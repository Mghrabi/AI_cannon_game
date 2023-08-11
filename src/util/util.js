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
    console.log('loooooooooooooooooooooooooooog', x, y)
    if (x>0 && y>0 && (x <= imageSize) && (y<=imageSize)) {
        console.log('yes')
        return true 
    }
    console.log('no')
    return false;
}