class SensorContainer {
    constructor(c_state) {
        //manually set the positions of the sensors 
        this.possibleAngles = [0, 45, 90, 135, 180, 225, 270, 315];//all possible angles for ninja
        this.c_state = c_state;
        this.sensors = this.possibleAngles.map(s_angle => new Sensor(s_angle, c_state));
    }

    draw(ctx, ninjaDict) {
        // console.log('number of sensors', sensors.length);

        this.sensors.forEach(s => {
            //this part here generates a bug (not very important)
            const minReading = Math.min(...(ninjaDict[s.angle] && ninjaDict[s.angle].length? ninjaDict[s.angle] : [-1]))
            s.update(ctx, minReading);
        })
    }
}