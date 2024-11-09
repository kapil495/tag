<<<<<<< HEAD
let backgroundObjList = [] ;
import {backgrounds} from "/game_definers/statics/backgrounds.js";

=======
import backgrounds from "/game_definers/statics/backgrounds.js";

let backgroundObjList = [];
>>>>>>> 7dc623e3adfef00fdc29c0c89cf78a15dfcf3e9b
export function loadBackground(sceneName,BackgroundNumber){
    console.log(`%cloading background number ${BackgroundNumber}` , 'color: black; font-size: 12px; background-color: green; padding: 2px;');
    BackgroundNumber = BackgroundNumber- 1
    for (let i = 0; i < backgrounds[BackgroundNumber].length; i++) {
        backgroundObjList.push(sceneName.load.image(backgrounds[BackgroundNumber][i].name , backgrounds[BackgroundNumber][i].path));
        console.log(`loaded the ${backgrounds[BackgroundNumber][i].name}`);
        console.log(`${backgrounds[BackgroundNumber][i].path}`);
    }
    console.log(`%cbackground has been loaded`, 'color: black; font-size: 12px; background-color: green; padding: 2px;');
    return backgroundObjList;
}