class bulletGenerator {
    constructor(cannonWidth){
        this.bullets = [];
        this.cannonWidth = cannonWidth
    }

    update(ctx){
        this.draw(ctx);
    }

    addBullet(startPosition, angle){
        if(!gameOver){
            this.bullets.push(new Bullet(startPosition, angle, this.cannonWidth));
        }
    }

    draw(ctx){
        //create a bullet shape
        this.bullets = this.bullets.filter(b => {
            if(Math.abs(b.currentPosition.x) > canvas.width/2 - 10  || Math.abs(b.currentPosition.y) > canvas.height/2 - 10){
                b.unDraw(ctx);
                return false
            }
            b.update(ctx);
            return true;
        })
        // console.log('this.bullets', this.bullets);

    }



}
