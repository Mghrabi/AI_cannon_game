class GameController {
    constructor() {
        this.updateUiForGameOver = false;
        this.c_state = {};
    }

    update(ctx, c_state){
        this.c_state = c_state;
        this.draw(ctx)
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath()
        ctx.font = "48px serif";
        ctx.fillStyle = "black";
        ctx.fillText("SCORE: ", canvas.width/2 - 120, 70);
        ctx.fillStyle = 'black';
        ctx.fillText(this.c_state.score, canvas.width/2 + 100, 70);
        ctx.restore();
    }
}