class Cannon {
    constructor(width, height, sensetivity = 10) {
        this.width = width;
        this.height = height;
        this.sensetivity = sensetivity;
        cannonCurrentAngle = 0;
        this.controls = new Controls()
        //cannon position: at the center of the canvas 
        this.position = { x: canvas.width / 2, y: canvas.height / 2 }
        this.bulletGenerator = new bulletGenerator(width);
        //to make sure to not throw many bullets with one click
        this.bulletFlag = true 
        this.bulletTimeDelay = 100;
        this.ninjasArr = []

        //define the network
        this.network = new Network([8, 3]);
        //this should be after computation
        // this.layers_outputs = this.network.map(l => l.outputs)
    }


    update(ctx, ninjasArr) {
        console.log('layers outputs', this.network_ouptut)
        this.ninjasArr = ninjasArr;
        this.action();
        this.draw(ctx);
    }

    action() {
        if (this.controls.clockwise) {
            cannonCurrentAngle = (cannonCurrentAngle + this.sensetivity) % 360;
        }
        if (this.controls.counterClockWise) {
            cannonCurrentAngle = (cannonCurrentAngle - this.sensetivity) % 360;
        }
        if (this.controls.throwBullet && this.bulletFlag) {
            this.bulletFlag = false;
            this.bulletGenerator.addBullet(this.position, cannonCurrentAngle);
            setTimeout(() => {this.bulletFlag = true}, this.bulletTimeDelay)
        }
    }

    draw(ctx) {

        this.controls.drawSensors(ctx, this.ninjasArr)
        ctx.save();
        // console.log('gameScore', gameScore)
        //gameOver
       if(gameOver){
            //ui for gameover with respect to cannon
            this.clear(ctx);
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
        const angleValue = cannonCurrentAngle * 2 * Math.PI / 360
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

    clear(ctx){
        ctx.rect(0, 0,canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)' 
        ctx.fill();
        ctx.font = "48px serif";
        ctx.fillStyle = "white";
        ctx.fillText("YOUR SCORE: "+ gameScore, canvas.width/2 - 140, canvas.height/2);
        this.bulletGenerator.clear(ctx);
    }

}