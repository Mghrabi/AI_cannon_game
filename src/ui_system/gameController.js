class GameController {
    constructor() {
        this.updateUiForGameOver = false;
        // this.#keyBoardEventListeners();
    }

    update(ctx){
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
        ctx.fillText("SCORE: ", canvas.width/2 - 80, 70);
        ctx.fillStyle = 'black';
        ctx.fillText(gameScore, canvas.width/2 + 100, 70);

        ctx.restore();
    }
}