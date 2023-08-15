class Sensor{
    constructor(angle){
        this.angle = angle;
        this.angleRadian = angle * Math.PI / 180;
        this.detected = false;
        this.distance = -1; //-1 means it detects nothing at the moment
        this.radius = 300;
    }

    update(ctx, distance){
        this.draw(ctx, distance);
    }

    draw(ctx, distance){
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.beginPath();
        ctx.moveTo(0,0);
        // console.log('distanceeeeeeeeeeeeeeee with angleeeeeeeee', distance, this.angle)
        ctx.lineTo(distance* Math.sin(this.angleRadian), distance * -Math.cos(this.angleRadian))
        ctx.lineWidth = 2;
        ctx.strokeStyle= 'yellow';
        // ctx.setLineDash([20, 5])
        ctx.stroke();
        ctx.restore();
    }
}