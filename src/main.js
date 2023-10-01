const canvas = document.getElementById('canvas');
const network_canvas = document.getElementById('network');
const background_image = document.getElementById('background_image');
setupCanvas(background_image);
setupCanvas(canvas)
setupCanvas(network_canvas)

//cavas context
const ctx = canvas.getContext('2d')
const network_ctx = network_canvas.getContext('2d');

//localStorage
const smartNetworkLayersExist = JSON.parse(localStorage.getItem('best_network_layers1'));
const bestScore = JSON.parse(localStorage.getItem('best_score'));

let bestCannon;
const cannons = [];
//instances
cannons[0] = new Cannon(cannonWidth, cannonHeight, 'AI', sensetivity, id = 0);
const info = new Info(bestScore)
const gameController = new GameController();

if (smartNetworkLayersExist) {
    cannons[0].cannon_net.layers = smartNetworkLayersExist;
}

//generation process
//generateCannons(num) is to determine the number of cannons to run in parallel (used in training only)
//if not called, only one cannon will show up which holds the best network
const generateCannons = (num) => {
    if (smartNetworkLayersExist) {
        for (let i = 1; i < num; i++) {
            const newCannon = new Cannon(cannonWidth, cannonHeight, 'AI', sensetivity, id = i);
            newCannon.cannon_net.layers = JSON.parse(localStorage.getItem('best_network_layers1'));
            Network.mutate(newCannon.cannon_net, 0.2)
            cannons.push(newCannon);
        }
    }
    else {
        for (let i = 1; i < num; i++) {
            cannons.push(new Cannon(cannonWidth, cannonHeight, 'AI', sensetivity, id = i));
        }
    }
}
// generateCannons(100);

//save the best cannon network in localStorage 
const save = () => {
    localStorage.setItem('best_network_layers1', JSON.stringify(bestCannon.cannon_net.layers));
    localStorage.setItem('best_score', JSON.stringify(bestCannon.c_state.score));
}


animate();
function animate() {
    setupCanvas(canvas)
    setupCanvas(network_canvas)
    bestCannon = cannons.find(c => c.c_state.score == Math.max(...cannons.map(c => c.c_state.score)))
    for (let i = 0; i < cannons.length; i++) {
        cannons[i].update(ctx);
    }
    if(bestCannon.c_state.score > bestScore){
        save();
    }
    const num_lived_cannons = cannons.filter(i => i.c_state.gameOver == false).length;
    if(!num_lived_cannons){
        window.location.reload();
    }
    gameController.update(ctx, bestCannon.c_state);
    info.update(network_ctx, bestCannon.c_state.score, num_lived_cannons)
    window.requestAnimationFrame(animate)
}
