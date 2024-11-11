
import backgrounds from "/game_definers/statics/backgrounds.js";
let backgroundObjList = [];
let patternCount = {
    horizontal : 4,
    verticle : 1,
}
let defaults = {};
// This file contains a default function to set background, 
// It is independent of the context, and act as an utility function.

// Last updated: 11 Nov 2024 by Kapil
// let backgroundObjList = [];
export function setBackground(scene,backgroundId) {
    console.log(`%cSetting the background with Id: ${backgroundId}` , 'color: black; font-size: 12px; background-color: green; padding: 2px;');
    const background = backgrounds[backgroundId-1]
    background.forEach((bg)=>{
        if (bg.verticle){
            defaults.verticle = patternCount.verticle
            patternCount.verticle = bg.verticle
        }
        if (bg.horizontal){
            defaults.horizontal = patternCount.horizontal
            patternCount.horizontal = bg.horizontal
        }
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
        if (bg.verticle){
            patternCount.verticle = defaults.verticle
        }
        if (bg.horizontal){
            patternCount.horizontal = defaults.horizontal
        }
        backgroundObjList.push(bgComponent)
    })
    console.log(`%cScene with background Id: ${backgroundId} is ready` , 'color: black; font-size: 12px; background-color: green; padding: 2px;');
    return(backgroundObjList)
}