class Bullet {
    constructor(startPosition, angle, cannonWidth) {
        this.startPosition = startPosition;
        // this.currentPosition = startPosition;
        this.angleRadian = angle * Math.PI / 180;
        this.radius = 0
        this.currentPosition = { x: this.radius* Math.sin(this.angleRadian), y: this.radius * -Math.cos(this.angleRadian) };
        this.angle = angle;
        this.cannonWidth = cannonWidth
    }

    update(ctx){
        this.move();
        this.draw(ctx)
    }

    move(){
        this.radius+=8;
        this.currentPosition = { x: this.radius* Math.sin(this.angleRadian), y: this.radius * -Math.cos(this.angleRadian) };
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        // ctx.moveTo()
        // ctx.restore();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.arc(this.currentPosition.x, this.currentPosition.y, this.cannonWidth / 2 - 1, 0, 2 * Math.PI)
        ctx.fill();
        ctx.restore();
    }
}