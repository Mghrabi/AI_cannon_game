class Cannon {
    constructor(width, height, cannonType, sensetivity = 10, id=null) {
        this.id = id;
        this.cannonType = cannonType 
        this.width = width;
        this.height = height;
        this.sensetivity = sensetivity;
        this.cannonCurrentAngle = 0;
        this.position = { x: canvas.width / 2, y: canvas.height / 2 }
        this.bulletFlag = true 
        this.bulletTimeDelay = 100;
        this.c_state = {score: 0, gameOver: false};
        this.countTime = false;
        
        this.ninjaGenerator = new NinjaGenerator(this.c_state);
        this.controls = new Controls(this.c_state)
        this.bulletGenerator = new bulletGenerator(width, this.c_state);
        this.cannon_net = new Network([8, 3]);
        this.living_time = this.living_time;
        this.increaseScoreByTime = 7000; //cannons lives longer gain score
    }

    increaseScoreBasedOnTime(){
        if(!this.countTime){
            this.countTime = true;
            setTimeout(() => {
                if(!this.c_state.gameOver){
                    this.c_state.score+=LIVING_POINTS;
                }
                this.countTime = false;
            }, this.increaseScoreByTime);
        }
    }

    update(ctx) {
        if(this.c_state.score < -20){
            this.c_state.gameOver = true;
        }
        this.ninjaGenerator.ninjas = this.ninjaGenerator.ninjas;
        //inputs: sensors + currentCannonAngle
        const input = [...(this.controls.sensorContainer.sensors.map(s => s.reading/200)), this.cannonCurrentAngle/200];
        let out = this.cannon_net.forward(input.map(i => i));
        this.action(this.cannonType, out);
        this.draw(ctx);
    }


    action(type=null, out=null) {
        if(type=='AI'){
            if (out[2]>0.5) {
                this.cannonCurrentAngle = (this.cannonCurrentAngle + this.sensetivity) % 360;
            }
            if (out[0]>0.5) {
                this.cannonCurrentAngle = (this.cannonCurrentAngle - this.sensetivity) % 360;
            }
            if (out[1]<=0.5 && this.bulletFlag){
                this.bulletFlag = false;
                this.bulletGenerator.addBullet(this.position, this.cannonCurrentAngle);
                setTimeout(() => {this.bulletFlag = true}, this.bulletTimeDelay)
            }
            return
        }

        //otherwise (manual)
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

        this.controls.drawSensors(ctx, this.ninjaGenerator.ninjas)
        ctx.save();
       if(this.c_state.gameOver){
            return 
        }

        this.increaseScoreBasedOnTime();

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

        //create the cannon tip 
        ctx.beginPath();
        ctx.fillStyle = 'black'
        const marginValue = 15
        ctx.roundRect(- this.width / 2, - this.height / 2 - marginValue, this.width, this.height + marginValue + 5, [0, 0, 10, 10]);
        ctx.fill();

        //update bullets locaiton
        ctx.restore();
        this.bulletGenerator.update(ctx, this.ninjaGenerator.ninjas, this.c_state);
        this.ninjaGenerator.update(ctx);
    }

    clear(ctx){
        ctx.rect(0, 0,canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)' 
        ctx.fill();
        ctx.font = "48px serif";
        ctx.fillStyle = "white";
        ctx.fillText("YOUR SCORE: "+ this.c_state.score, canvas.width/2 - 140, canvas.height/2);
        this.bulletGenerator.clear(ctx);
    }

}