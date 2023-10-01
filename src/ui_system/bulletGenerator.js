class bulletGenerator {
    constructor(cannonWidth, c_state){
        this.bullets = [];
        this.cannonWidth = cannonWidth
        this.ninjasArr = [];
        this.c_state = c_state
    }

    update(ctx, ninjasArr){
        this.ninjasArr = ninjasArr;
        if(this.c_state.gameOver){
            this.clear(ctx);
            return 
        }
        this.draw(ctx);
    }

    addBullet(startPosition, angle){
        if(!this.c_state.gameOver){
            this.bullets.push(new Bullet(startPosition, angle, this.cannonWidth));
        }
    }

    generateProcess(ctx){
        this.bullets = this.bullets.filter(b => {
            const hitNinja = this.ninjasArr.some((n) => {
                const hit = detectCollision(n.topRightCornerPosition, b.currentPosition);
                if(hit){
                    n.remove = true;
                }
                return hit;
            });

            

            //console.log('hitNinja')

            if(hitNinja){
                // this.ninjasArr.push(2);
                b.unDraw(ctx);
                // gameScore+=1;
                this.c_state.score +=SUCCESSFUL_BULLET;
                return false;
            }                  

            if(Math.abs(b.currentPosition.x) > canvas.width/2 - 10  || Math.abs(b.currentPosition.y) > canvas.height/2 - 10){
                b.unDraw(ctx);
                // gameScore-=1;
                this.c_state.score -=MISSED_BULLET;
                return false
            }
            b.update(ctx);
            return true;
        })
    }

    draw(ctx){
        this.generateProcess(ctx);
        //create a bullet shape
        // console.log('this.bullets', this.bullets);

    }

    //this will be called by cannon
    clear(ctx){
        this.bullets = this.bullets.filter(b => {
            // console.log('unDraw the bullet')
            b.unDraw(ctx);
            return false;
        })
        // console.log('now this.bullets', this.bullets)
    }


}
