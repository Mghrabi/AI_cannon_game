//cannon shape
const cannonWidth = 20;
const cannonHeight = 70;
const cannonRadius = 10;
const sensetivity = 10;

//game rules
const MISSED_BULLET = 1;
const SUCCESSFUL_BULLET= 10; 
const LIVING_POINTS= 5; //points given every 5s if the game is still running

//(ninja size)
let imageSize = 75;
const possibleAngles = [0, 45, 90, 135, 180, 225, 270, 315, 360];//all possible angles for ninja
let generationSequence = [180, 90, 315, 225, 45, 0, 315, 315, 45, 135, 315, 315, 315, 0, 135, 315, 45, 225, 225, 90, 180, 225, 270, 90, 90, 360, 315, 90, 180, 45, 180, 225, 90, 0, 315, 360, 225, 270, 0, 135, 45, 270, 135, 225, 45, 135, 90, 45, 90, 135, 180, 270, 360, 180, 45, 180, 45, 0, 45, 135, 270, 225, 315, 360, 90, 45, 180, 225, 0, 0, 135, 45, 135, 225, 315, 180, 90, 270, 90, 90, 180, 0, 0, 360, 315, 0, 45, 180, 315, 0, 45, 90, 315, 0, 90, 360, 45, 225, 270, 135,
    180, 90, 315, 225, 45, 0, 315, 315, 45, 135, 315, 315, 315, 0, 135, 315, 45, 225, 225, 90, 180, 225, 270, 90, 90, 360, 315, 90, 180, 45, 180, 225, 90, 0, 315, 360, 225, 270, 0, 135, 45, 270, 135, 225, 45, 135, 90, 45, 90, 135, 180, 270, 360, 180, 45, 180, 45, 0, 45, 135, 270, 225, 315, 360, 90, 45, 180, 225, 0, 0, 135, 45, 135, 225, 315, 180, 90, 270, 90, 90, 180, 0, 0, 360, 315, 0, 45, 180, 315, 0, 45, 90, 315, 0, 90, 360, 45, 225, 270, 135]
generationSequence.concat(generationSequence);
