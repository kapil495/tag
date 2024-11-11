import {runners} from "/game_definers/statics/runners.js"
let runnersObjList  = [];
/**
 * @param {*} gameScene 
 * @returns {Array}
 */
export function setRunners(scene){
    runners.forEach((runner)=>{
        let runnerSprite = scene.add.sprite(runner.position[0], runner.position[1] , runner.name)
        runnerSprite.setOrigin(runner.origin[0], runner.origin[1], runner.name);
        runnersObjList.push(runnerSprite)
    })
    return runnersObjList    
}