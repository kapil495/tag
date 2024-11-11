import {chasers} from "/game_definers/statics/chasers.js"
let chasersObjList  = [];
/**
 * @param {*} gameScene 
 * @returns {Array}
 */
export function setChasers(scene){
    chasers.forEach((chaser)=>{
        let chaserSprite = scene.add.sprite(chaser.position[0], chaser.position[1] , chaser.name)
        chaserSprite.setOrigin(chaser.origin[0], chaser.origin[1], chaser.name);
        chasersObjList.push(chaserSprite)
    })
    return chasersObjList 
}