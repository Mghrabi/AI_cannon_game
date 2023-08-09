canvas = document.getElementById('canvas');
network_canvas = document.getElementById('network');
setupCanvas(canvas)
setupCanvas(network_canvas)

ctx = canvas.getContext('2d')

cannon = new Cannon();
cannon.draw(ctx);