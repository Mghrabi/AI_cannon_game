const setupCanvas = (can) => {
    can.height = window.innerHeight;
    can.width = window.innerWidth / 2;
}

canvas = document.getElementById('canvas');
network_canvas = document.getElementById('network');
setupCanvas(canvas)
setupCanvas(network_canvas)


ctx = canvas.getContext('2d')
ctx.fillRect(10, 20, 50, 50);

ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 40, 0, 2 * Math.PI)
ctx.stroke();

