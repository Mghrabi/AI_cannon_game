canvas = document.getElementById('canvas');
network_canvas = document.getElementById('network');
const background_image = document.getElementById('background_image');
setupCanvas(background_image);
setupCanvas(canvas)
setupCanvas(network_canvas)

const game_score = 0;
ctx = canvas.getContext('2d')

//20, 85
const cannons = [];
const sensetivity = 10;
const robotGen = new NinjaGenerator()
const cannon = new Cannon(cannonWidth, cannonHeight, sensetivity);
// generateCannons();
const gameController = new GameController();
// const a = [[1,3,5], [13,5,6]]
// const b = [[2,3], [3,6]];
// const c = math.multiply(a,b);
// console.log('c', c);

animate();
function animate(){
    setupCanvas(canvas)
    setupCanvas(network_canvas)
    cannon.update(ctx, robotGen.ninjas) 
    //update all cannons
    // for(let i=0; i<cannons.length; i++){
    //     cannon.update(ctx, robotGen.ninjas, [...(sensors.map(s => s.reading))]) 
    // }
    robotGen.update(ctx);
    gameController.update(ctx, cannon.c_score);
    // gameController.update(ctx);
    window.requestAnimationFrame(animate)
}

//reset logic
//gameover false
//reset all bullets 
//reset all ninjas
//make score 0

const generateCannons = (num) => {
    for(let i=0; i<num; i++){
        cannons.push(new Cannon(cannonWidth, cannonHeight, sensetivity));
    }
}