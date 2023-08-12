class Cannon {
    constructor(width, height, sensetivity = 10) {
        this.width = width;
        this.height = height;
        this.sensetivity = sensetivity;
        this.angle = 0;
        this.controls = new Controls()
        //cannon position: at the center of the canvas 
        this.position = { x: canvas.width / 2, y: canvas.height / 2 }
        this.bulletGenerator = new bulletGenerator(width);
        //to make sure to not throw many bullets with one click
        this.bulletFlag = true 
        this.bulletTimeDelay = 100;
        this.ninjasArr = []
    }


    update(ctx, ninjasArr) {
        this.ninjasArr = ninjasArr;
        this.action();
        this.draw(ctx);
    }

    action() {
        if (this.controls.clockwise) {
            this.angle = (this.angle + this.sensetivity) % 360;
        }
        if (this.controls.counterClockWise) {
            this.angle = (this.angle - this.sensetivity) % 360;
        }
        if (this.controls.throwBullet && this.bulletFlag) {
            this.bulletFlag = false;
            this.bulletGenerator.addBullet(this.position, this.angle);
            setTimeout(() => {this.bulletFlag = true}, this.bulletTimeDelay)
        }
    }

    draw(ctx) {

        ctx.save();

        //display score
        ctx.beginPath()
        ctx.font = "48px serif";
        ctx.fillStyle = "black";
        ctx.fillText("SCORE: ", canvas.width/2 - 80, 70);
        ctx.fillStyle = 'black';
        ctx.fillText(gameScore, canvas.width/2 + 100, 70);

        //gameOver
        if(gameOver){
            ctx.rect(0, 0,canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)' 
            ctx.fill();
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.fillText("YOUR SCORE: "+ gameScore, canvas.width/2 - 140, canvas.height/2);
            return 
        }

        const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 3, canvas.width / 2, canvas.height / 2, 40);
        gradient.addColorStop(0, "gray"); // Start color at the center
        gradient.addColorStop(1, "black"); // End color at the outer edge

        // Set the gradient as the fill style
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(canvas.width / 2, canvas.height / 2, this.height / 2, 0, 2 * Math.PI)
        ctx.fill();

        //allow rotation
        ctx.translate(canvas.width / 2, canvas.height / 2)
        const angleValue = this.angle * 2 * Math.PI / 360
        ctx.rotate(angleValue);
        // ctx.translate(-canvas.width / 2, -canvas.height / 2)

        //create the cannon gun
        ctx.beginPath();
        ctx.fillStyle = 'black'
        const marginValue = 15
        ctx.roundRect(- this.width / 2, - this.height / 2 - marginValue, this.width, this.height + marginValue + 5, [0, 0, 10, 10]);
        ctx.fill();

        //update bullets locaiton
        ctx.restore();
        this.bulletGenerator.update(ctx, this.ninjasArr);

    }

}