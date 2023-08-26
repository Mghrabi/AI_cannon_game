// let gameScore = 0;
// let gameOver = false;
//cannon shape
let cannonWidth = 20;
let cannonHeight = 70;
let cannonRadius = 10;

//(ninja size)
let imageSize = 75;
const possibleAngles = [0, 45, 90, 135, 180, 225, 270, 315, 360];//all possible angles for ninja
// let generationSequence = [];
// const numNinjas = 200;
// for (let i=0; i<numNinjas; i++){
//     let chosenAngle = possibleAngles[Math.floor(Math.random() * possibleAngles.length)]
//     generationSequence.push(chosenAngle);
// }
// console.log('angles', generationSequence);
let generationSequence = [180, 90, 315, 225, 45, 0, 315, 315, 45, 135, 315, 315, 315, 0, 135, 315, 45, 225, 225, 90, 180, 225, 270, 90, 90, 360, 315, 90, 180, 45, 180, 225, 90, 0, 315, 360, 225, 270, 0, 135, 45, 270, 135, 225, 45, 135, 90, 45, 90, 135, 180, 270, 360, 180, 45, 180, 45, 0, 45, 135, 270, 225, 315, 360, 90, 45, 180, 225, 0, 0, 135, 45, 135, 225, 315, 180, 90, 270, 90, 90, 180, 0, 0, 360, 315, 0, 45, 180, 315, 0, 45, 90, 315, 0, 90, 360, 45, 225, 270, 135,
    180, 90, 315, 225, 45, 0, 315, 315, 45, 135, 315, 315, 315, 0, 135, 315, 45, 225, 225, 90, 180, 225, 270, 90, 90, 360, 315, 90, 180, 45, 180, 225, 90, 0, 315, 360, 225, 270, 0, 135, 45, 270, 135, 225, 45, 135, 90, 45, 90, 135, 180, 270, 360, 180, 45, 180, 45, 0, 45, 135, 270, 225, 315, 360, 90, 45, 180, 225, 0, 0, 135, 45, 135, 225, 315, 180, 90, 270, 90, 90, 180, 0, 0, 360, 315, 0, 45, 180, 315, 0, 45, 90, 315, 0, 90, 360, 45, 225, 270, 135]
generationSequence.concat(generationSequence);

console.log('angles', generationSequence);



//inputs to network
//1- sensors + distance of the ninja (true or false + distance)
//2- did it already took the dicision based on that sensor (or should I leave it to learn that with its own)
//(actually it won't be able to do that because there is no difference in the inputs given)

//3- 