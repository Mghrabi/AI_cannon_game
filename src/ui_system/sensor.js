class Sensor{
    constructor(angle){
        this.angle = angle;
        this.angleRadian = angle * Math.PI / 180;
        this.detected = false;
        this.distance = -1; //-1 means it detects nothing at the moment
        this.radius = sensorRadius;
    }

    update(ctx, distance){
        this.draw(ctx, distance);
    }

    draw(ctx, distance){
        this.distance = distance;
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.beginPath();
        ctx.moveTo(0,0);
        // console.log('distanceeeeeeeeeeeeeeee with angleeeeeeeee', distance, this.angle)
        if(distance == -1){
            ctx.strokeStyle= 'gray';
        }else {
            ctx.strokeStyle= 'yellow';
        }
        const lineLength = distance == -1?this.radius:distance;
        ctx.lineTo(lineLength* Math.sin(this.angleRadian), lineLength * -Math.cos(this.angleRadian))
        ctx.lineWidth = 2;
        // ctx.setLineDash([20, 5])
        ctx.stroke();
        ctx.restore();
    }
}