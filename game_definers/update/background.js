function shiftUpBackground(backgroundObjList){
    console.log("up");

}
function shiftDownBackground(backgroundObjList){
    console.log("down");
    
}
function shiftLeftBackground(backgroundObjList){
    console.log("left");
    
}
function shiftRightBackground(backgroundObjList){
    console.log("right");

}

export function updateBackground(backgroundObjList , actions) {
    if (actions.up == true || actions.wKey == true) {
        shiftUpBackground(backgroundObjList)    
    }else if (actions.down == true || actions.sKey == true){
        shiftDownBackground(backgroundObjList)
    }else if (actions.right == true || actions.dKey == true){
        shiftRightBackground(backgroundObjList)
    }else if (actions.left == true || actions.aKey == true){
        shiftLeftBackground(backgroundObjList)
    }
}