class Cannon {
    constructor(width, height, sensetivity = 10) {
        this.width = width;
        this.height = height;
        this.sensetivity = sensetivity;
        this.cannonCurrentAngle = 0;
        this.position = { x: canvas.width / 2, y: canvas.height / 2 }
        this.bulletFlag = true 
        this.bulletTimeDelay = 100;
        // this.ninjasArr = []
        this.c_score = {score: 0};

        this.controls = new Controls()
        this.bulletGenerator = new bulletGenerator(width);
        this.cannon_net = new Network([8, 3]);
    }


    update(ctx, ninjasArr) {
        this.ninjasArr = ninjasArr;
        //sensors + currentCannonAngle
        const input = [...(this.controls.sensorContainer.sensors.map(s => s.reading)), this.cannonCurrentAngle];
        // console.log('input', input);
        let out = this.cannon_net.forward(input);
        // console.log(this.cannon_net.layers)
        this.action('A', out);
        // this.action('AI', out);
        this.draw(ctx);
    }

    action(type=null, out=null) {
        if(type=='AI'){
            if (out[2]) {
                this.cannonCurrentAngle = (this.cannonCurrentAngle + this.sensetivity) % 360;
            }
            if (out[0]) {
                this.cannonCurrentAngle = (this.cannonCurrentAngle - this.sensetivity) % 360;
            }
            if (out[1]==0) {
                this.bulletFlag = false;
                this.bulletGenerator.addBullet(this.position, this.cannonCurrentAngle);
                setTimeout(() => {this.bulletFlag = true}, this.bulletTimeDelay)
            }
            return
        }

        //otherwise
        if (this.controls.clockwise) {
            this.cannonCurrentAngle = (this.cannonCurrentAngle + this.sensetivity) % 360;
        }
        if (this.controls.counterClockWise) {
            this.cannonCurrentAngle = (this.cannonCurrentAngle - this.sensetivity) % 360;
        }
        if (this.controls.throwBullet && this.bulletFlag) {
            this.bulletFlag = false;
            this.bulletGenerator.addBullet(this.position, this.cannonCurrentAngle);
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
        const angleValue = this.cannonCurrentAngle * 2 * Math.PI / 360
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
        this.bulletGenerator.update(ctx, this.ninjasArr, this.c_score);
    }

    clear(ctx){
        ctx.rect(0, 0,canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)' 
        ctx.fill();
        ctx.font = "48px serif";
        ctx.fillStyle = "white";
        // ctx.fillText("YOUR SCORE: "+ gameScore, canvas.width/2 - 140, canvas.height/2);
        ctx.fillText("YOUR SCORE: "+ this.c_score.score, canvas.width/2 - 140, canvas.height/2);
        this.bulletGenerator.clear(ctx);
    }

}