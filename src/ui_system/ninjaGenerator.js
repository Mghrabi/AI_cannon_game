class NinjaGenerator {
    constructor() {
        this.randomAngle = 100
        this.ninjas = [];
        this.possibleAngles = [0, 45, 90, 135, 180, 225, 270, 315, 360];//all possible angles for ninja
        this.generateNow = true;
        //1500ms 
        this.generationTime = 1500; //2 seconds
        this.idNumber = 0;
    }

    update(ctx) {
        if(gameOver){
            //logic for ui
            this.clear(ctx);
            return
        }
        this.generateNinja();
        this.draw(ctx)
    }


    generateNinja() {
        //pick random location;
        const chosenAngle1 = this.possibleAngles[Math.floor(Math.random() * this.possibleAngles.length)]
        const chosenAngle2 = this.possibleAngles[Math.floor(Math.random() * this.possibleAngles.length)]
        //generate every 1 seconds
        if (this.generateNow) {
            this.generateNow = false;
            setTimeout(() => {
                this.addNinja(chosenAngle1);
                this.addNinja(chosenAngle2);
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
            // const exist = n.id in filteredNinjas;
            if(filteredNinjas.includes(n.id)){
                n.unDraw(ctx);
                filteredNinjas.splice(filteredNinjas.indexOf(n.id),1)
                return false;
            }
            if((ninjaDistance < cannonRadius)){
                // make gameover 
                gameOver = true;
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