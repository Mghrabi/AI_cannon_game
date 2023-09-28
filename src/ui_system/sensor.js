class Sensor{
    constructor(angle, c_state){
        this.angle = angle;
        this.c_state = c_state;
        this.angleRadian = angle * Math.PI / 180;
        this.detected = false;
        this.reading = -1; //-1 means it detects nothing at the moment
        this.radius = 300;
    }

    update(ctx, reading){
        this.draw(ctx, reading);
    }

    draw(ctx, reading){
        // this.reading = reading;
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.beginPath();
        ctx.moveTo(0,0);
        // console.log('readingeeeeeeeeeeeeeee with angleeeeeeeee', reading, this.angle)
        ctx.strokeStyle= 'gray';
        if(reading == -1 || !reading){
            ctx.strokeStyle= 'gray';
        }else {
            // ctx.strokeStyle= 'yellow';
        }
        const lineLength = reading == -1?this.radius:reading;
        ctx.lineTo(lineLength* Math.sin(this.angleRadian), lineLength * -Math.cos(this.angleRadian))
        ctx.lineWidth = 2;
        this.reading = reading;
        // ctx.setLineDash([20, 5])
        ctx.stroke();
        ctx.restore();
    }
}