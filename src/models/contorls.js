class Controls {
    constructor(){
        this.clockwise = false;
        this.counterClockWise = false; 
        this.throwBullet = true;
        this.#keyBoardEventListeners();
    }

    #keyBoardEventListeners(){ 
       document.onkeydown = (event) => {
            switch(event.key){
                case 'ArrowRight':
                    this.clockwise = true
                    break;
                case 'ArrowLeft':
                    this.counterClockWise = true;
                    break;
                case 'ArrowUp':
                    this.throwBullet = true
                    break; 
            }
       } 

       document.onkeyup = (event) => {
            switch(event.key){
                case 'ArrowRight':
                    this.clockwise = false 
                    break;
                case 'ArrowLeft':
                    this.counterClockWise = false;
                    break;
                case 'ArrowUp':
                    this.throwBullet = false;
                    break; 
            }
       } 

    }
}