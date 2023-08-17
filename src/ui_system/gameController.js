class GameController {
    constructor() {
        this.updateUiForGameOver = false;
        // this.#keyBoardEventListeners();
    }

    update(ctx, c_score){
        this.draw(ctx, c_score)
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

    draw(ctx, c_score) {
        ctx.save();
        //game score
        ctx.beginPath()
        ctx.font = "48px serif";
        ctx.fillStyle = "black";
        ctx.fillText("SCORE: ", canvas.width/2 - 120, 70);
        ctx.fillStyle = 'black';
        // ctx.fillText(c_score, canvas.width/2 + 100, 70);
        ctx.fillText(c_score.score, canvas.width/2 + 100, 70);

        ctx.restore();
    }
}