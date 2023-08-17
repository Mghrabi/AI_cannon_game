// let gameScore = 0;
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






//inputs to network
//1- sensors + distance of the ninja (true or false + distance) 
//2- did it already took the dicision based on that sensor (or should I leave it to learn that with its own) 
//(actually it won't be able to do that because there is no difference in the inputs given)

//3- 