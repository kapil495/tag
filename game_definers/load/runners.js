import {runners} from "/game_definers/statics/runners.js"

export function loadRunners(sceneName) {
    for (let i = 0; i < runners.length; i++) {
        sceneName.load.spritesheet(runners[i].name, runners[i].path , 
    {
        frameWidth : runners[i].frameWidth , 
        fraameHeight : runners[i].frameHeight
    }
    )
    console.log(`${ runners[i].name } runner has been loaded`);
};
}