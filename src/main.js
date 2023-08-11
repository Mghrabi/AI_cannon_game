canvas = document.getElementById('canvas');
network_canvas = document.getElementById('network');
setupCanvas(canvas)
setupCanvas(network_canvas)

const game_score = 0;
ctx = canvas.getContext('2d')

//20, 85
cannon = new Cannon(20, 70);
const robotGen = new RobotGenerator()

animate();
function animate(){
    setupCanvas(canvas)
    setupCanvas(network_canvas)
    cannon.update(ctx) 
    robotGen.update(ctx);
    window.requestAnimationFrame(animate)
}