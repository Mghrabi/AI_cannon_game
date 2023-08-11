class Robot{
    constructor(angle){
        this.angleRadian = angle * Math.PI / 180;
        //good value for now (you don't need to change it for each robot)
        this.radius = 200;
        this.currentPosition = { x: this.radius* Math.sin(this.angleRadian), y: this.radius * -Math.cos(this.angleRadian) };
        // this.image = new Image(100,100);this.image.src = '../../assets/star.png';
        this.image = document.getElementById('image')
    }

    update(ctx){
        this.move();
        this.draw(ctx)
    }

    move(){
        this.radius-=2;
        this.currentPosition = { x: this.radius* Math.sin(this.angleRadian), y: this.radius * -Math.cos(this.angleRadian) };
    }

    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        // ctx.rect(this.currentPosition.x,this.currentPosition.y, 20,20);
        ctx.drawImage(this.image,  this.currentPosition.x, this.currentPosition.y, 40,40)
        ctx.fill();
        ctx.restore();
    }

    unDraw(ctx){
        ctx.save();
        ctx.beginPath();
        // ctx.moveTo()
        // ctx.restore();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rect(50,50, 0, 0);
        ctx.fill();
        ctx.restore();
    }

}