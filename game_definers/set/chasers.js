import {chasers} from "/game_definers/statics/chasers.js"
let chasersObjList  = [];
/**
 * @param {*} gameScene 
 * @returns {Array}
 */
export function setChasers(sceneName){
    for (let i = 0; i < chasers.length; i++) {
        chasersObjList.push(sceneName.add.sprite(chasers[i].position[0], chasers[i].position[1] , chasers[i].name))
        chasersObjList[i].setOrigin(chasers[i].origin[0], chasers[i].origin[1])
    }
    return chasersObjList    
}