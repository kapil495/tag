import backgrounds from "/game_definers/statics/backgrounds.js";

// This file contains a default function to set background, 
// It is independent of the context, and act as an utility function.

// Last updated: 09 Nov 2024 by Pratyaksh
// let backgroundObjList = [];
export function setBackground(scene,backgroundId) {
    console.log(`%cSetting the background with Id: ${backgroundId}` , 'color: black; font-size: 12px; background-color: green; padding: 2px;');
    const background = backgrounds[backgroundId-1]
    background.forEach((bg)=>{
        let bgComponent = scene.add.image(bg.position[0], bg.position[1], bg.name)
        bgComponent.setOrigin(bg.origin[0], bg.origin[1])
        bgComponent.setDisplaySize(scene.cameras.main.width,scene.cameras.main.height)
    })
    console.log(`%cScene with background Id: ${backgroundId} is ready` , 'color: black; font-size: 12px; background-color: green; padding: 2px;');
}