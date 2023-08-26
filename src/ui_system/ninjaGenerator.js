class NinjaGenerator {
    constructor(c_state) {
        this.randomAngle = 100
        this.ninjas = [];
        this.possibleAngles = [0, 45, 90, 135, 180, 225, 270, 315, 360];//all possible angles for ninja
        this.generateNow = true;
        this.c_state = c_state;
        //1500ms 
        this.generationTime = 1700; //2 seconds
        this.idNumber = 0;
    }

    update(ctx) {
        // console.log('this.ninjas', this.ninjas)
        if(this.c_state.gameOver){
            //logic for ui
            this.clear(ctx);
            return
        }
        this.generateNinja();
        this.draw(ctx)
    }


    generateNinja() {
        // console.log('cannonCurrentAngle', cannonCurrentAngle);
        //pick random location;
        const chosenAngle1 = this.possibleAngles[Math.floor(Math.random() * this.possibleAngles.length)]
        const chosenAngle2 = this.possibleAngles[Math.floor(Math.random() * this.possibleAngles.length)]
        const chosenAngle3 = this.possibleAngles[Math.floor(Math.random() * this.possibleAngles.length)]
        //generate every 1 seconds
        if (this.generateNow) {
            this.generateNow = false;
            setTimeout(() => {
                this.addNinja(0);
                this.addNinja(135);
                // this.addNinja(chosenAngle3);
                this.generateNow = true;
            }, this.generationTime);
        }
    }

    addNinja(randomAngle) {
        //for now 
        this.ninjas.push(new Ninja(randomAngle, this.idNumber))
        this.idNumber+=1;
    }

    generateProcess(ctx){
        this.ninjas = this.ninjas.filter(n => {
            const ninjaDistance = (Math.abs(n.currentPosition.x)**2 + Math.abs(n.currentPosition.y)**2)**0.5
            if(n.remove){
                n.unDraw(ctx);
                return false;
            }
            if((ninjaDistance < cannonRadius)){
                // make gameover 
                this.c_state.gameOver = true;
                n.unDraw(ctx);
                return false
            }
            n.update(ctx);
            return true;
        })
    }

    clear(ctx){
        this.ninjas = this.ninjas.filter(n => {
            n.unDraw(ctx);
            return false;
        })
    }

    draw(ctx) {
        // console.log('this.Ninjas: ', this.ninjas);
        return this.generateProcess(ctx);
    }

    
}