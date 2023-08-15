let gameScore = 0;
let gameOver = false;
//cannon shape
let cannonWidth = 20;
let cannonHeight = 70;
let cannonRadius = 10;

//(ninja size)
let imageSize = 75;

//data to transfer from bulletGenerator to bulletGenerator
//indexes of ninjas to be filters so that we transfer that info 
//to ninjaGenerator to deal with them;
let filteredNinjas = []; //ids of ninjas to filter