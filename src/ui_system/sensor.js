class Sensor{
    constructor(angle){
        this.angleRadian = angle * Math.PI / 180;
        this.detected = false;
        this.distance = -1; //-1 means it detects nothing at the moment
        this.radius = 300;
    }

    update(ctx){
        this.draw(ctx);
    }

    draw(ctx){
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(this.radius* Math.sin(this.angleRadian), this.radius * -Math.cos(this.angleRadian))
        ctx.lineWidth = 3;
        ctx.strokeStyle= 'yellow';
        ctx.setLineDash([20, 5])
        ctx.stroke();
        ctx.restore();
    }
}