canvas = document.getElementById('canvas');
network_canvas = document.getElementById('network');
setupCanvas(canvas)
setupCanvas(network_canvas)

const game_score = 0;
ctx = canvas.getContext('2d')

//20, 85
cannon = new Cannon(20, 70);

animate();
function animate(){
    setupCanvas(canvas)
    setupCanvas(network_canvas)
    cannon.update(ctx) 
    window.requestAnimationFrame(animate)
}