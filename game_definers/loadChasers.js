import {chasers} from "/game_definers/statics/chasers.js"

export function loadChasers(sceneName) {
    for (let i = 0; i < chasers.length; i++) {
        sceneName.load.spritesheet(chasers[i].name, chasers[i].path , 
    {
        frameWidth : chasers[i].frameWidth , 
        fraameHeight : chasers[i].frameHeight
    }
    )
    console.log(`${ chasers[i].name } chaser has been loaded`);

};
}