//ninja weapon (I called it Ninja)
class Ninja{
    constructor(angle, id){
        this.angle = angle;
        this.imageSize = imageSize;
        this.id = id;
        this.angleRadian = angle * Math.PI / 180;
        this.radius = 350;
        this.currentPosition = { x: this.radius* Math.sin(this.angleRadian), y: this.radius * -Math.cos(this.angleRadian) };
        this.topRightCornerPosition = { x: this.radius* Math.sin(this.angleRadian) + this.imageSize/2, y: this.radius * -Math.cos(this.angleRadian) - this.imageSize/2 };
        this.image = document.getElementById('image')
        this.sensetivity = 10; //for rotation
        this.speed = 1//for linear movement
        this.rotationAngle = 0 ;
        this.distanceFromCenter = canvas/2;
    }

    update(ctx){
        this.move();
        this.draw(ctx)
    }

    move(){
        this.radius-=this.speed;
        this.currentPosition = { x: this.radius* Math.sin(this.angleRadian), y: this.radius * -Math.cos(this.angleRadian) };
        this.distanceFromCenter = (this.currentPosition.x**2 + this.currentPosition.y**2)**0.5
        this.topRightCornerPosition = { x: this.radius* Math.sin(this.angleRadian) + this.imageSize/2, y: this.radius * -Math.cos(this.angleRadian) - this.imageSize/2 };
        this.rotationAngle = (this.rotationAngle + this.sensetivity) % 360;
    }

    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.translate(this.currentPosition.x , this.currentPosition.y );
        ctx.rotate(this.rotationAngle * Math.PI/180);
        ctx.translate(-this.currentPosition.x - this.imageSize/2, -this.currentPosition.y - this.imageSize/2);
        ctx.drawImage(this.image,  this.currentPosition.x, this.currentPosition.y, this.imageSize, this.imageSize)
        ctx.fill();
        ctx.restore();
    }

    unDraw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.translate(this.currentPosition.x , this.currentPosition.y);
        ctx.drawImage(this.image,  this.currentPosition.x, this.currentPosition.y, 0, 0)
        ctx.fill();
        ctx.restore();
    }

}