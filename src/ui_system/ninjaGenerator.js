class NinjaGenerator {
    constructor() {
        this.randomAngle = 100
        this.ninjas = [];
        this.possibleAngles = [0, 45, 90, 135, 180, 225, 270, 315, 360];//all possible angles for ninja
        this.generateNow = true;
        this.generationTime = 2000; //2 seconds
    }

    update(ctx) {
        this.generateNinja();
        this.draw(ctx)
    }


    generateNinja() {
        //pick random location;
        const chosenAngle = this.possibleAngles[Math.floor(Math.random() * this.possibleAngles.length)]
        //generate every 1 seconds
        if (this.generateNow) {
            this.generateNow = false;
            setTimeout(() => {
                this.addNinja(chosenAngle);
                this.generateNow = true;
            }, this.generationTime);
        }
    }

    addNinja(randomAngle) {
        //for now 
        this.ninjas.push(new Ninja(randomAngle))
    }

    draw(ctx) {
        for (let r of this.ninjas) {
            r.update(ctx);
        }
        console.log('this.Ninjas: ', this.ninjas);
    }
}