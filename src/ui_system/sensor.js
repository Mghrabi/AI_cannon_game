class Sensor{
    constructor(angle){
        this.angle = angle;
        this.angleRadian = angle * Math.PI / 180;
        this.detected = false;
        this.reading = -1; //-1 means it detects nothing at the moment
        this.radius = sensorRadius;
    }

    update(ctx, reading){
        this.draw(ctx, reading);
    }

    draw(ctx, reading){
        this.reading = reading;
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.beginPath();
        ctx.moveTo(0,0);
        // console.log('readingeeeeeeeeeeeeeee with angleeeeeeeee', reading, this.angle)
        if(reading == -1){
            ctx.strokeStyle= 'gray';
        }else {
            ctx.strokeStyle= 'red';
        }
        const lineLength = reading == -1?this.radius:reading;
        ctx.lineTo(lineLength* Math.sin(this.angleRadian), lineLength * -Math.cos(this.angleRadian))
        ctx.lineWidth = 2;
        // ctx.setLineDash([20, 5])
        ctx.stroke();
        ctx.restore();
    }
}