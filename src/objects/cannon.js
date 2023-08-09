class Cannon {
    constructor(width, height, rotation_speed) {
        this.width = width;
        this.height = height;
        this.rotation_speed = rotation_speed;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, 2 * Math.PI)
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = '#333333'
        ctx.fillRect(0,0,50,50);
    }
}