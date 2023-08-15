class Controls {
    constructor(){
        this.clockwise = false;
        this.counterClockWise = false; 
        this.throwBullet = false;
        this.#keyBoardEventListeners();
    }

    #keyBoardEventListeners(){ 
       document.onkeydown = (event) => {
            console.log('this is the key', event);
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
                //for simplicity I put this here (for reseting the game)
                case 'r':
                    //
                    if(gameOver){
                        gameScore = 0;
                        gameOver = false;
                    }
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