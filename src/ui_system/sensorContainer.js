class SensorContainer {
    constructor(){
        //manually set the positions of the sensors 
        this.possibleAngles = [0, 45, 90, 135, 180, 225, 270, 315];//all possible angles for ninja
        sensors = this.possibleAngles.map(s_angle=> new Sensor(s_angle));
    }

    

    draw(ctx){
        sensors.forEach(s => {
            console.log('drawing sensors')
            s.update(ctx);
        })
    }
}