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
cannons[0] = new Cannon(cannonWidth, cannonHeight, 'AI',sensetivity);
console.log('cannon_net form the b', cannons[0].cannon_net);
// localStorage.removeItem('best_network')
if(localStorage.getItem('best_network')){
     cannons[0].cannon_net = JSON.parse(localStorage.getItem('best_network'));
}
const generateCannons = (num) => {
    for(let i=1; i<num; i++){
        cannons.push(new Cannon(cannonWidth, cannonHeight, 'AI',sensetivity));
    }
}
generateCannons(9);



const gameController = new GameController();
save_button.addEventListener('click', (e) => {
    save();
    console.log('saved')
})
const save = () => {
    localStorage.setItem('best_network',JSON.stringify(bestCannon.cannon_net));
}

animate();
function animate(){
    setupCanvas(canvas)
    setupCanvas(network_canvas)
    // cannon.update(ctx) 
    for(let i=0; i<cannons.length; i++){
        // console.log('i', i)
        // console.log('cannnons', cannons)
        cannons[i].update(ctx);
    }
    bestCannon = cannons.find(c => c.c_state.score == Math.max(...cannons.map(c => c.c_state.score)))
    gameController.update(ctx, bestCannon.c_state);
    window.requestAnimationFrame(animate)
}

//reset logic
//gameover false
//reset all bullets 
//reset all ninjas
//make score 0
