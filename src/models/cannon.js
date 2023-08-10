class Cannon {
    constructor(width, height, sensetivity = 30) {
        this.width = width;
        this.height = height;
        this.sensetivity = sensetivity;
        this.angle = 0;
        this.controls = new Controls()
        //cannon position: at the center of the canvas 
        this.position = { x: canvas.width / 2, y: canvas.height / 2 }
        this.bulletSystem = new BulletSystem();
    }

    update(ctx) {
        this.action();
        this.draw(ctx);
    }

    action() {
        if (this.controls.clockwise) {
            this.angle = (this.angle + this.sensetivity) % 360;
        }
        if (this.controls.counterClockWise) {
            this.angle = (this.angle - this.sensetivity) % 360;
        }
        if (this.controls.throwBullet) {
            this.bulletSystem.addBullet(this.position, this.angle);
        }
    }

    draw(ctx) {
        ctx.save();
        console.log('score', gameScore)
        // ctx.beginPath();
        const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 3, canvas.width / 2, canvas.height / 2, 40);
        gradient.addColorStop(0, "gray"); // Start color at the center
        gradient.addColorStop(1, "black"); // End color at the outer edge

        // Set the gradient as the fill style
        ctx.fillStyle = gradient;
        ctx.arc(canvas.width / 2, canvas.height / 2, this.height / 2, 0, 2 * Math.PI)
        ctx.fill();

        //allow rotation
        ctx.translate(canvas.width / 2, canvas.height / 2)
        const angleValue = this.angle * 2 * Math.PI / 360
        ctx.rotate(angleValue);
        // ctx.translate(-canvas.width / 2, -canvas.height / 2)

        //create the cannon gun
        ctx.beginPath();
        ctx.fillStyle = 'black'
        const marginValue = 15
        ctx.roundRect(- this.width / 2, - this.height / 2 - marginValue, this.width, this.height + marginValue, [0, 0, 10, 10]);
        ctx.fill();



        ctx.restore();
    }

}