// to split the screen between the two canvases 

const setupCanvas = (can) => {
    can.height = window.innerHeight;
    can.width = window.innerWidth / 2;
}

//between a ninja and a bullet;
const detectCollision = (n_topCornerPosition, b_position) => {
    // 
    // console.log('loooooooooooooooooooooooooooog', n_topCornerPosition)
    const {x: n_x, y: n_y} = n_topCornerPosition;
    const {x: b_x, y: b_y} = b_position

    const x = n_x - b_x;
    const y = b_y - n_y;
    if (x>0 && y>0 && (x <= imageSize - 10) && (y<=imageSize - 10)) {
        return true 
    }
    return false;
}


const getNinjaAngleAndDistance = (ninjaArr) => {
    const dict = {};
    for (let n of ninjaArr){
        if(dict[n.anlge]){
            dict[n.anlge].push(n.distanceFromCenter);
            continue
        }
        dict[n.angle] = [n.distanceFromCenter];
    }
    return dict;
}