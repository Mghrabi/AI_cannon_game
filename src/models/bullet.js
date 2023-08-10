class Bullet{
    constructor(startPosition, angle){
        this.startPosition = startPosition;
        this.currentPosition = startPosition;
        this.angle = angle;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.startPosition.x, this.startPosition.y);
        
    }
}