class Controls {
    constructor(c_state){
        this.clockwise = false;
        this.counterClockWise = false; 
        this.throwBullet = false;
        this.#keyBoardEventListeners();
        this.c_state = c_state

        this.sensorContainer = new SensorContainer(8, this.c_state);
    }

    #keyBoardEventListeners(){ 
       document.onkeydown = (event) => {
            // console.log('this is the key', event);
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
                    if(this.c_state.gameOver){
                        // gameScore = 0;
                        this.c_state.score = 0; 
                        this.c_state.gameOver = false;
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

    drawSensors(ctx, ninjaArr){
        // this.ninjaArr = ninjaArr;
        this.sensorContainer.draw(ctx, getNinjaAngleAndDistance(ninjaArr));
    }
}