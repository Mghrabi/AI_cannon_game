//ninja weapon (I called it Ninja)
class Ninja{
    constructor(angle, id){
        this.imageSize = imageSize;
        this.id = id;
        this.angleRadian = angle * Math.PI / 180;
        //good value for now (you don't need to change it for each Ninja)
        this.radius = 350;
        this.currentPosition = { x: this.radius* Math.sin(this.angleRadian), y: this.radius * -Math.cos(this.angleRadian) };
        this.topRightCornerPosition = { x: this.radius* Math.sin(this.angleRadian) + this.imageSize/2, y: this.radius * -Math.cos(this.angleRadian) - this.imageSize/2 };
        this.image = document.getElementById('image')
        this.sensetivity = 10; //for rotation
        this.speed = 1.5//for linear movement
        this.rotationAngle = 0 ;
        //if Math.abs is less than the circle cannon radius then
        //you die
    }

    update(ctx){
        this.move();
        this.draw(ctx)
    }

    move(){
        this.radius-=this.speed;
        this.currentPosition = { x: this.radius* Math.sin(this.angleRadian), y: this.radius * -Math.cos(this.angleRadian) };
        this.topRightCornerPosition = { x: this.radius* Math.sin(this.angleRadian) + this.imageSize/2, y: this.radius * -Math.cos(this.angleRadian) - this.imageSize/2 };
        this.rotationAngle = (this.rotationAngle + this.sensetivity) % 360;
    }

    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        // ctx.rect(this.currentPosition.x,this.currentPosition.y, 20,20);
        // ctx.drawImage(this.image,  this.currentPosition.x, this.currentPosition.y, 40,40)
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
        // ctx.font = "48px serif";
        // ctx.fillStyle = "green";
        // ctx.fillText("+1", this.currentPosition.x, this.currentPosition.y);
        ctx.restore();
    }

}