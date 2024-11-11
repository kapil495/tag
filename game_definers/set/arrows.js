import { arrows } from "/game_definers/statics/arrows.js"
let arrowsObjList = [];
export function setArrows(sceneName) {
    for (let i = 0; i < arrows.length; i++) {
        arrowsObjList.push(sceneName.add.image(arrows[i].position[0] , arrows[i].position[1] , arrows[i].name))
        arrowsObjList[i].setOrigin(arrows[i].origin[0] , arrows[i].origin[1])
    }
    return arrowsObjList
}