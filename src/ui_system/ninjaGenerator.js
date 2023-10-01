class NinjaGenerator {
    constructor(c_state) {
        this.randomAngle = 100
        this.ninjas = [];
        this.possibleAngles = [0, 45, 90, 135, 180, 225, 270, 315, 360];//all possible angles for ninja
        this.generateNow = true;
        this.c_state = c_state;
        this.generationTime = 6000; //2 seconds (used to be 1700)
        this.idNumber = 0;
        this.ninjaCount = 0;
    }

    update(ctx) {
        if(this.c_state.gameOver){
            this.clear(ctx);
            return
        }
        this.generateNinja();
        this.draw(ctx)
    }


    generateNinja() {
        //pick 3 random locations;
        const chosenAngle1 = this.possibleAngles[Math.floor(Math.random() * this.possibleAngles.length)]
        const chosenAngle2 = this.possibleAngles[Math.floor(Math.random() * this.possibleAngles.length)]
        const chosenAngle3 = this.possibleAngles[Math.floor(Math.random() * this.possibleAngles.length)]
        //generate every this.generationTime 
        if (this.generateNow) {
            this.generateNow = false;
            setTimeout(() => {

                //random ninja location
                this.addNinja(chosenAngle1);

                // generate ninja following the sequence exist in generationSequence array
                // this used in training to assure each cannon has running through the same 
                // conditions, therefore they can be compared to each other, also makes training easier
                // this.addNinja(generationSequence[this.ninjaCount]);
                
                //Only now you can generate restart generation
                this.generateNow = true;
            }, this.generationTime);
        }
    }

    addNinja(randomAngle) {
        this.ninjas.push(new Ninja(randomAngle, this.idNumber))
        this.idNumber+=1;
        this.ninjaCount+=1;
    }

    generateProcess(ctx){
        this.ninjas = this.ninjas.filter(n => {
            const ninjaDistance = (Math.abs(n.currentPosition.x)**2 + Math.abs(n.currentPosition.y)**2)**0.5
            if(n.remove){
                n.unDraw(ctx);
                return false;
            }
            if((ninjaDistance < cannonRadius)){
                // make gameover (for that particular cannon)
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