class Info {
    constructor(previous_best_score){
        this.previous_best_score = previous_best_score;
        this.current_score = 0;
        this.num_lived_cannons = null;
    }

    update(ctx, current_score, num_lived_cannons){
        this.current_score = current_score;
        this.num_lived_cannons = num_lived_cannons;
        this.draw(ctx)
    }

    draw(ctx){
        ctx.rect(0, 0,canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)' 
        ctx.fill();
        ctx.font = "48px serif";
        ctx.fillStyle = "yellow";
        ctx.fillText('Gen', 10, canvas.height/2 + -250);
        ctx.fillText("Highest Score "+ this.previous_best_score, canvas.width/2 - 200, canvas.height/2 + -200);
        ctx.fillStyle = "white";
        ctx.fillText("Num Lived Cannons: "+ this.num_lived_cannons, canvas.width/2 - 250, canvas.height/2);
        ctx.fillText("Best Cannon Score: "+ this.current_score, canvas.width/2 - 250, canvas.height/2+100);
    }
}