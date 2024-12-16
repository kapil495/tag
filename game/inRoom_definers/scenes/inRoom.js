import { gameScene } from "/game/game_definers/scenes/gameScene.js";
import { states } from "/game/game_definers/keys/states.js"

import { setBackground } from "/game/inRoom_definers/set/background.js";

import { loadBox } from "/game/inRoom_definers/load/box.js"

import {setBox} from "/game/inRoom_definers/set/box.js"
import { setPlayerNames } from "/game/inRoom_definers/set/playerNames.js";

import {updateBox} from "/game/inRoom_definers/update/box.js"
import { updatePlayerNames } from "/game/inRoom_definers/update/playerNames.js";

let inRoom = new Phaser.Scene('inRoom');
let boxObjList;
let playerNamesObjList ; 
inRoom.init = () => {
    console.log("Initializing inRoom");
};

inRoom.preload = () => {
    console.log("Preloading the inRoom");
    loadBox(inRoom , true)
};

inRoom.create = () => {
    setBackground(inRoom , "#1F1F1F" ,false)
    boxObjList = setBox(inRoom , false)
    playerNamesObjList = setPlayerNames(inRoom , boxObjList , false)
};

inRoom.update = () => {
    let cursors = inRoom.input.keyboard   
    let keys= states(inRoom)
    if (keys.wkey) {
        inRoom.scene.start(gameScene)
    }
    updateBox(inRoom,boxObjList , false)
    updatePlayerNames(inRoom , playerNamesObjList , true)
    
};

export { inRoom };
