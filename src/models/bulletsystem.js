class BulletSystem {
    constructor(cannonWidth){
        this.bullets = [];
        this.cannonWidth = cannonWidth
    }

    addBullet(startPosition, angle){
        this.bullets.push(new Bullet(startPosition, angle, this.cannonWidth));
    }

    update(ctx){
        this.draw(ctx);
    }

    draw(ctx){
        //create a bullet shape
        for (let b of this.bullets){
            console.log('Bullets', this.bullets);
            b.update(ctx);
        } 
        //then move it in a certain direction accoridng to a point + angle

    }



}
