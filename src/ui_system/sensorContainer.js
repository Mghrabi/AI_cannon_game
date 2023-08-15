class SensorContainer {
    constructor(){
        //manually set the positions of the sensors 
        this.possibleAngles = [0, 45, 90, 135, 180, 225, 270, 315];//all possible angles for ninja
        sensors = this.possibleAngles.map(s_angle=> new Sensor(s_angle));
    }

    

    draw(ctx, ninjaDict){
        console.log('ninjaDict', ninjaDict)
        sensors.forEach(s => {

            const minValue = Math.min(...(ninjaDict[s.angle]?ninjaDict[s.angle]:[-1]))
            s.update(ctx, minValue);
        })
    }
}