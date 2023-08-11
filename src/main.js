canvas = document.getElementById('canvas');
network_canvas = document.getElementById('network');
const background_image = document.getElementById('background_image');
setupCanvas(background_image);
setupCanvas(canvas)
setupCanvas(network_canvas)

const game_score = 0;
ctx = canvas.getContext('2d')

//20, 85
const sensetivity = 10;
const robotGen = new NinjaGenerator()
const cannon = new Cannon(cannonWidth, cannonHeight, sensetivity);

animate();
function animate(){
    setupCanvas(canvas)
    setupCanvas(network_canvas)
    cannon.update(ctx, robotGen.ninjas) 
    robotGen.update(ctx);
    window.requestAnimationFrame(animate)
}