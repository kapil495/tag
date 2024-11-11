import {chasersAnims} from "/game_definers/statics/chasersAnims.js";
import { chasers } from "/game_definers/statics/chasers.js"

let anims = [];
let chaserObjAnimsListToReturn = []
function animateChasersWithName(sceneName , chaserName , frameRate){
//adding all the animation of the particular chaser from chaserAnims.js
for (let i = 0; i < chasersAnims.length; i++) {
    sceneName.anims.create({
        key : chaserName + chasersAnims[i].key,
        frames : sceneName.anims.generateFrameNumbers(chaserName,{
            start : chasersAnims[i].start,
            end : chasersAnims[i].end
        }),
        frameRate : frameRate , 
        repeat : chasersAnims[i].repeat
    })
    anims.push(chaserName + chasersAnims[i].key)
    console.log(`${chasersAnims[i].key} anim for ${chaserName} chaser has been creted`)
}
console.log(`all anims of ${chaserName} CHASER has been creted`);
return anims
}
export function animateChasers(sceneName , frameRate){
    for (let i = 0; i < chasers.length; i++) {
        chaserObjAnimsListToReturn.push(animateChasersWithName(sceneName,chasers[i].name,frameRate))
        anims = []
    }
    return chaserObjAnimsListToReturn
}
//can be accesible by chaserObjList[i].play(chaserName + key)
// example 
//animateChasers(gamescene , "red" , 10)
//chaserObjList[i].play(redrunRigth)