class Cannon {
    constructor(width, height, sensetivity = 1) {
        this.width = width;
        this.height = height;
        this.sensetivity = sensetivity;
        this.angle = 0;
        this.controls = new Controls()
    }

    update(ctx) {
        this.move();
        this.draw(ctx);
    }

    move() {
        if (this.controls.clockwise) {
            this.angle += this.sensetivity;
        }
        if (this.controls.counterClockWise) {
            this.angle -= this.sensetivity;
        }
    }

    draw(ctx) {
        ctx.save();
        // ctx.beginPath();
        const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 3, canvas.width / 2, canvas.height / 2, 40);
        gradient.addColorStop(0, "gray"); // Start color at the center
        gradient.addColorStop(1, "black"); // End color at the outer edge

        // Set the gradient as the fill style
        ctx.fillStyle = gradient;
        ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, 2 * Math.PI)
        ctx.fill();

        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.rotate(this.angle * Math.PI / 180);
        // ctx.translate(-canvas.width / 2, -canvas.height / 2)

        // ctx.beginPath();
        ctx.fillStyle = 'black'
        ctx.fillRect(- this.width / 2, - this.height / 2, this.width, this.height + 15);
        ctx.restore();
    }

}