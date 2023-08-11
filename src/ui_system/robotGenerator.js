class RobotGenerator {
    constructor(){
        this.randomAngle = -100 
        this.robots = [new Robot(this.randomAngle)];
    }

    update(ctx){
        this.draw(ctx)
    }

    addRobot(){
        //for now 
        randomAngle = 0;
        this.robots.push(new Robot(randomAngle))
    }

    draw(ctx){
        for (let r of this.robots){
            r.update(ctx);
        }
        console.log('this.robots: ', this.robots);
    }
}