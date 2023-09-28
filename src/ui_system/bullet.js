class Bullet {
    constructor(startPosition, angle, cannonWidth) {
        this.startPosition = startPosition;
        // this.currentPosition = startPosition;
        this.angleRadian = angle * Math.PI / 180;
        this.radius = cannonHeight - 20;
        this.currentPosition = { x: this.radius* Math.sin(this.angleRadian) , y: this.radius * -Math.cos(this.angleRadian) };
        this.cannonWidth = cannonWidth
        this.bulletRadius = cannonWidth / 2 - 1;
        this.speed = 10;
        // this.bulletRadius
    }

    update(ctx){
        //console.log('bullet current position', this.currentPosition)
        this.move();
        this.draw(ctx)
    }

    move(){
        this.radius+=this.speed;
        this.currentPosition = { x: this.radius* Math.sin(this.angleRadian), y: this.radius * -Math.cos(this.angleRadian) };
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        // ctx.moveTo()
        // ctx.restore();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.arc(this.currentPosition.x, this.currentPosition.y, this.bulletRadius, 0, 2 * Math.PI)
        ctx.fill();
        ctx.restore();
    }

    unDraw(ctx){
        ctx.save();
        ctx.beginPath();
        // ctx.moveTo()
        // ctx.restore();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.arc(this.currentPosition.x, this.currentPosition.y, 0, 0, 2 * Math.PI)
        ctx.fill();
        ctx.restore();
    }
}