canvas = document.getElementById('canvas');
network_canvas = document.getElementById('network');
setupCanvas(canvas)
setupCanvas(network_canvas)

ctx = canvas.getContext('2d')

//20, 85
cannon = new Cannon(17, 70);

animate();
function animate(){
    setupCanvas(canvas)
    setupCanvas(network_canvas)
    cannon.update(ctx) 
    window.requestAnimationFrame(animate)
}