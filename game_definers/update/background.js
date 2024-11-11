import { backgrounds } from "/game_definers/statics/backgrounds.js"

const updateBackgroundPosition = (backgroundId, loadedBgComponents, axisChangeFx=(x,y,shiftSpeed=0)=>[x,y]) => {
    const StaticBackground = backgrounds[backgroundId];
    loadedBgComponents.forEach((lbc, i)=>{
        let change = axisChangeFx(lbc.x, lbc.y, StaticBackground[i].shiftSpeed)
        lbc.x = change[0]
        lbc.y = change[1]
    })
}

export function updateBackground(backgroundObjList, backgroundNumber , actions) {
    backgroundNumber -= 1
    if (actions.up == true || actions.wKey == true) {
        updateBackgroundPosition(backgroundNumber, backgroundObjList, (x,y,shiftSpeed)=>{
            y+=shiftSpeed.up
            return [x,y]
        })
    } if (actions.down == true || actions.sKey == true){
        updateBackgroundPosition(backgroundNumber, backgroundObjList, (x,y,shiftSpeed)=>{
            y-=shiftSpeed.down
            return [x,y]
        })
    } if (actions.right == true || actions.dKey == true){
        updateBackgroundPosition(backgroundNumber, backgroundObjList, (x,y,shiftSpeed)=>{
            x-=shiftSpeed.right
            return [x,y]
        })
    } if (actions.left == true || actions.aKey == true){
        updateBackgroundPosition(backgroundNumber, backgroundObjList, (x,y,shiftSpeed)=>{
            x+=shiftSpeed.left
            return [x,y]
        })
    }
}