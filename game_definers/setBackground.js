let backgroundObjList = [];
import {backgrounds} from "/game_definers/statics/backgrounds.js";

export function setBackground(sceneName,backgroundNumber) {
    console.log(`%csetting the scene` , 'color: black; font-size: 12px; background-color: green; padding: 2px;');
    backgroundNumber = backgroundNumber -1 
    //setting the pos
    
    for (let i = 0; i < backgrounds[backgroundNumber].length; i++) {
        backgroundObjList.push(sceneName.add.image(backgrounds[backgroundNumber][i].position[0],backgrounds[backgroundNumber][i].position[1],backgrounds[backgroundNumber][i].name).setOrigin(backgrounds[backgroundNumber][i].origin[0] , backgrounds[backgroundNumber][i].origin[1]))     
        //console.log(`%c${backgrounds[backgroundNumber][i].name} has been placed` , '');
    }
    //scaleing to max 
    for (let i = 0; i < backgroundObjList.length; i++) {
       // console.log(backgroundObjList[i]);
        backgroundObjList[i].setDisplaySize(sceneName.cameras.main.width,sceneName.cameras.main.height)
    }
    
    console.log('%cscene ready' , 'color: black; font-size: 12px; background-color: green; padding: 2px;');
    return backgroundObjList;
}