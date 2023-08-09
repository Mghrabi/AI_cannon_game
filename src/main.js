canvas = document.getElementById('canvas');
network_canvas = document.getElementById('network');
setupCanvas(canvas)
setupCanvas(network_canvas)

ctx = canvas.getContext('2d')

cannon = new Cannon(20, 85, 10);
// cannon.update(ctx) 

animate();
function animate(){
    setupCanvas(canvas)
    setupCanvas(network_canvas)
    cannon.update(ctx) 
    window.requestAnimationFrame(animate)
}