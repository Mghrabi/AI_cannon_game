//should be removed 

const canvas = document.getElementById('canvas');
const network_canvas = document.getElementById('network');
const background_image = document.getElementById('background_image');
// const save_button = document.getElementById('save_button');
setupCanvas(background_image);
setupCanvas(canvas)
setupCanvas(network_canvas)
let bestCannon;
const ctx = canvas.getContext('2d')
const network_ctx = network_canvas.getContext('2d');

const sensetivity = 10;
const cannons = [];

// const game_score = 0;

// console.log('cannon_net form the b', cannons[0].cannon_net);
cannons[0] = new Cannon(cannonWidth, cannonHeight, 'AI', sensetivity, id = 0);
const smartNetworkLayersExist = JSON.parse(localStorage.getItem('best_network_layers1'));
const bestScore = JSON.parse(localStorage.getItem('best_score'));
Info = new Info(bestScore)

console.log('smartNetworkLayersExist', smartNetworkLayersExist);
if (smartNetworkLayersExist) {
    cannons[0].cannon_net.layers = smartNetworkLayersExist;
}

const generateCannons = (num) => {
    if (smartNetworkLayersExist) {
        for (let i = 1; i < num; i++) {
            const newCannon = new Cannon(cannonWidth, cannonHeight, 'AI', sensetivity, id = i);
            console.log('newCannon layer before', newCannon.cannon_net.layers)
            newCannon.cannon_net.layers = JSON.parse(localStorage.getItem('best_network_layers1'));
            // console.log('layers in newCannon', newCannon.cannon_net.layers);
            //this line is producing an error (it makes model), it affects the best_cannon model as well
            //which means that the smartNetworkLayers is passed as a reference, all cannons share the same network
            Network.mutate(newCannon.cannon_net, 0.2)
            console.log('newCannon layers after', newCannon.cannon_net.layers);
            console.log('cannons length', cannons.length);
            console.log('---------------------------------------------')
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


const gameController = new GameController();
save_button.addEventListener('click', (e) => {
    save();
    console.log('saved')
})
const save = () => {
    // const network_without_stringify = cannons[1].cannon_net;
    // console.log('network_without_stringify ', network_without_stringify)
    // console.log('network_with stringify ', JSON.stringify(network_without_stringify))
    /////
    localStorage.setItem('best_network_layers1', JSON.stringify(bestCannon.cannon_net.layers));
    localStorage.setItem('best_score', JSON.stringify(bestCannon.c_state.score));
    // console.log('type of', typeof(JSON.parse(localStorage.getItem('best_score'))))
    // localStorage.setItem('best', JSON.stringify(bestCannon.cannon_net.layers));
    /////
    // const fetch_without = localStorage.getItem('best_network1');
    // const fetch_json = JSON.parse(fetch_without);
    // const fetch_json = JSON.parse(fetch_without);
    // console.log('fetch_without ',fetch_without);
    // console.log('fetch_json', fetch_json);
}

animate();
function animate() {
    setupCanvas(canvas)
    setupCanvas(network_canvas)
    // cannon.update(ctx) 
    bestCannon = cannons.find(c => c.c_state.score == Math.max(...cannons.map(c => c.c_state.score)))
    for (let i = 0; i < cannons.length; i++) {
        // console.log('i', i)
        // console.log('cannnons', cannons)
        cannons[i].update(ctx);
    }
    if(bestCannon.c_state.score > bestScore){
        save();
    }
    // console.log('lived cannons', cannons.filter(i => i.c_state.gameOver == false))
    const num_lived_cannons = cannons.filter(i => i.c_state.gameOver == false).length;
    if(!num_lived_cannons){
        window.location.reload();
    }
    gameController.update(ctx, bestCannon.c_state);
    Info.update(network_ctx, bestCannon.c_state.score, num_lived_cannons)
    // console.log('best_cannon', bestCannon.cannon_net.layers[0].outputs);
    window.requestAnimationFrame(animate)
}

//reset logic
//gameover false
//reset all bullets
//reset all ninjas
//make score 0

