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
                    n.remove = true; //ninjaGenerator constantly check every n.remove and if true -> removes ui
                }
                return hit;
            });

            if(hitNinja){
                b.unDraw(ctx); //remove bullet if hit
                this.c_state.score +=SUCCESSFUL_BULLET;
                return false;
            }                  

            //remove bullet if passed out the game frame
            if(Math.abs(b.currentPosition.x) > canvas.width/2 - 10  || Math.abs(b.currentPosition.y) > canvas.height/2 - 10){
                b.unDraw(ctx);
                this.c_state.score -=MISSED_BULLET;
                return false
            }
            b.update(ctx);
            return true;
        })
    }

    draw(ctx){
        this.generateProcess(ctx);
    }

    clear(ctx){
        this.bullets = this.bullets.filter(b => {
            b.unDraw(ctx);
            return false;
        })
    }
}
