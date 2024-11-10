import { backgrounds } from "/game_definers/statics/backgrounds.js"

function shiftUpBackground(backgroundObjList , backgroundNumber){
    console.log("up");
    for (let i = 0; i < backgroundObjList.length; i++) {
        backgroundObjList[i].y += backgrounds[backgroundNumber][i].shiftSpeed.up
    }

}
function shiftDownBackground(backgroundObjList , backgroundNumber){
    console.log("down");
    for (let i = 0; i < backgroundObjList.length; i++) {
        backgroundObjList[i].y -= backgrounds[backgroundNumber][i].shiftSpeed.up
    }
}
function shiftLeftBackground(backgroundObjList ,backgroundNumber){
    console.log("left");
    for (let i = 0; i < backgroundObjList.length; i++) {
        backgroundObjList[i].x -= backgrounds[backgroundNumber][i].shiftSpeed.left
    }
}
function shiftRightBackground(backgroundObjList , backgroundNumber){
    console.log("right");
    for (let i = 0; i < backgroundObjList.length; i++) {
        backgroundObjList[i].x += backgrounds[backgroundNumber][i].shiftSpeed.right
    }
}

export function updateBackground(backgroundObjList, backgroundNumber , actions) {
    backgroundNumber -= 1
    if (actions.up == true || actions.wKey == true) {
        shiftUpBackground(backgroundObjList , backgroundNumber)
        
    }else if (actions.down == true || actions.sKey == true){
        shiftDownBackground(backgroundObjList , backgroundNumber)
    }else if (actions.right == true || actions.dKey == true){
        shiftRightBackground(backgroundObjList , backgroundNumber)
    }else if (actions.left == true || actions.aKey == true){
        shiftLeftBackground(backgroundObjList , backgroundNumber)
    }
}