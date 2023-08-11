class bulletGenerator {
    constructor(cannonWidth){
        this.bullets = [];
        this.cannonWidth = cannonWidth
        this.ninjasArr = [];
    }

    update(ctx, ninjasArr){
        this.ninjasArr = ninjasArr
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

            const hitNinja = this.ninjasArr.some((n) => {
                const hit = detectCollision(n.topRightCornerPosition, b.currentPosition);
                if(hit){
                    console.log('after hit, id to add is ', n.id);
                    filteredNinjas.push(n.id);
                }
                return hit;
            });

            console.log('hitNinja')

            if(hitNinja){
                b.unDraw(ctx);
                gameScore+=1;
                return false;
            }                  

            if(Math.abs(b.currentPosition.x) > canvas.width/2 - 10  || Math.abs(b.currentPosition.y) > canvas.height/2 - 10){
                b.unDraw(ctx);
                gameScore-=1;
                return false
            }
            b.update(ctx);
            return true;
        })
        // console.log('this.bullets', this.bullets);

    }



}
