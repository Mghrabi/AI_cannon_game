class GameController {
    constructor() {
        this.updateUiForGameOver = false;
        this.c_state = {};
        // this.#keyBoardEventListeners();
    }

    update(ctx, c_state){
        this.c_state = c_state;
        this.draw(ctx)
    }


    // #keyBoardEventListeners(){ 
    //    document.addEventListener = (event) => {
    //         console.log('this is the key', event);
    //         switch(event.key){
    //             case 'r':
    //                 gameScore = 0; 
    //                 gameOver = false;
    //         }
    //    } 
    // }

    draw(ctx) {
        ctx.save();
        //game score
        ctx.beginPath()
        ctx.font = "48px serif";
        ctx.fillStyle = "black";
        ctx.fillText("SCORE: ", canvas.width/2 - 120, 70);
        ctx.fillStyle = 'black';
        // ctx.fillText(c_state, canvas.width/2 + 100, 70);
        ctx.fillText(this.c_state.score, canvas.width/2 + 100, 70);

        ctx.restore();
    }
}