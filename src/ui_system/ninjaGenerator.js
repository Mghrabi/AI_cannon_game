class NinjaGenerator {
    constructor() {
        this.randomAngle = 100
        this.ninjas = [];
        this.possibleAngles = [0, 45, 90, 135, 180, 225, 270, 315, 360];//all possible angles for ninja
        this.generateNow = true;
        //1500ms 
        this.generationTime = 6000; //2 seconds
        this.idNumber = 0;
    }

    update(ctx) {
        if(!gameOver){
            this.generateNinja();
        }
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
                // this.addNinja(chosenAngle2);
                this.generateNow = true;
            }, this.generationTime);
        }
    }

    addNinja(randomAngle) {
        //for now 
        this.ninjas.push(new Ninja(randomAngle, this.idNumber))
        this.idNumber+=1;
    }

    draw(ctx) {
        this.ninjas = this.ninjas.filter(n => {
            const ninjaDistance = (Math.abs(n.currentPosition.x)**2 + Math.abs(n.currentPosition.y)**2)**0.5
            const exist = n.id in filteredNinjas;
            console.log('filterNinja', filteredNinjas)
            console.log('ninjas', this.ninjas);
            console.log('exist inside the arr ', exist, 'id', n.id);
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
        // console.log('this.Ninjas: ', this.ninjas);
    }
}