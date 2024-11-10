
import backgrounds from "/game_definers/statics/backgrounds.js";
let backgroundObjList = [];
let patternCount = {
    horizontal : 4,
    verticle : 1,
}
// This file contains a default function to set background, 
// It is independent of the context, and act as an utility function.

// Last updated: 09 Nov 2024 by Pratyaksh
// let backgroundObjList = [];
export function setBackground(scene,backgroundId) {
    console.log(`%cSetting the background with Id: ${backgroundId}` , 'color: black; font-size: 12px; background-color: green; padding: 2px;');
    const background = backgrounds[backgroundId-1]
    
    background.forEach((bg)=>{
        //let bgComponent = scene.add.image(bg.position[0], bg.position[1], bg.name)
        let bgComponent = scene.add.tileSprite(
            
            bg.position[0] + scene.cameras.main.width / 2 ,
            bg.position[0] + scene.cameras.main.height / 2, 
            scene.textures.get(bg.name).getSourceImage().width * (patternCount.horizontal), 
            scene.textures.get(bg.name).getSourceImage().height * (patternCount.verticle), 
            bg.name
        
        );
        bgComponent.setOrigin(bg.origin[0] + 0.5, bg.origin[1] + 0.5)
        bgComponent.setDisplaySize(
            scene.cameras.main.width * patternCount.horizontal,
            scene.cameras.main.height * patternCount.verticle
        
        );
        backgroundObjList.push(bgComponent)
    })
    console.log(`%cScene with background Id: ${backgroundId} is ready` , 'color: black; font-size: 12px; background-color: green; padding: 2px;');
    return(backgroundObjList)
}