import {runners} from "/game_definers/statics/runners.js"
let runnersObjList  = [];
/**
 * @param {*} gameScene 
 * @returns {Array}
 */
export function setRunners(sceneName){
    for (let i = 0; i < runners.length; i++) {
        runnersObjList.push(sceneName.add.sprite(runners[i].position[0], runners[i].position[1] , runners[i].name))
        runnersObjList[i].setOrigin(runners[i].origin[0], runners[i].origin[1])
    }
    return runnersObjList    
}