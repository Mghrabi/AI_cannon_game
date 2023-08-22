canvas = document.getElementById('canvas');
network_canvas = document.getElementById('network');
const background_image = document.getElementById('background_image');
const save_button = document.getElementById('save_button');
setupCanvas(background_image);
setupCanvas(canvas)
setupCanvas(network_canvas)
let bestCannon;
ctx = canvas.getContext('2d')
const sensetivity = 10;
const cannons = [];

// const game_score = 0;
cannons[0] = new Cannon(cannonWidth, cannonHeight, 'AI', sensetivity, id=0);
console.log('cannon_net form the b', cannons[0].cannon_net);
// localStorage.removeItem('best_network')
if (localStorage.getItem('best_network_layers')) {
    // console.log('this is here ', JSON.parse(localStorage.getItem('best_network_layers')))
    cannons[0].cannon_net.layers = JSON.parse(localStorage.getItem('best_network_layers'));
}

const generateCannons = (num) => {
    for (let i = 1; i < num; i++) {
        cannons.push(new Cannon(cannonWidth, cannonHeight, 'AI', sensetivity, id=i));
    }
}
generateCannons(9);



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
    localStorage.setItem('best_network_layers', JSON.stringify(bestCannon.cannon_net.layers));
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
    for (let i = 0; i < cannons.length; i++) {
        // console.log('i', i)
        // console.log('cannnons', cannons)
        cannons[i].update(ctx);
    }
    bestCannon = cannons.find(c => c.c_state.score == Math.max(...cannons.map(c => c.c_state.score)))
    gameController.update(ctx, bestCannon.c_state);
    console.log('best_cannon', bestCannon);
    window.requestAnimationFrame(animate)
}

//reset logic
//gameover false
//reset all bullets
//reset all ninjas
//make score 0
