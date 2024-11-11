import { keyState } from "/game_definers/keys/states.js"

import { backgrounds } from "/game_definers/statics/backgrounds.js"
import { setBackground } from "/game_definers/set/background.js";
import { loadBackground } from "/game_definers/load/background.js";
import { updateBackground } from "/game_definers/update/background.js";

import { loadChasers } from "/game_definers/load/chasers.js";
import { setChasers } from "/game_definers/set/chasers.js";
import { animateChasers } from "/game_definers/animate/chasers.js";
import { updateChasers } from "/game_definers/update/chasers.js"

import { loadRunners } from "/game_definers/load/runners.js"
import { setRunners } from "/game_definers/set/runners.js" 

import { loadArrows } from "/game_definers/load/arrows.js"
import { setArrows } from "/game_definers/set/arrows.js"
import { updateArrows } from "/game_definers/update/arrows.js"

// All these value below are tend to be loaded dynamically via socket connection
let frameRate = 10
let playerChaserNumber = 1 - 1
let backgroundNumber = 3;
let backgroundObjList ; 
let chasersObjList ;
let chaserObjAnimsList ; // chaserObjAnimsList[player number][ animation number  ]    1:front rest    2:leftrun    3:right run     4:backrest
let runnerObjList ;
let arrowsObjList ; 
let cursors ;
let actions ;
let stateOf ;
let gameScene = new Phaser.Scene('Game');

gameScene.init = ()=>{
    console.log("Initiating the game scene")
}
gameScene.preload = ()=>{
    loadBackground(gameScene,backgroundNumber)
    loadChasers(gameScene)
    loadRunners(gameScene)
    loadArrows(gameScene)
}
gameScene.create = ()=>{
    
    stateOf = keyState(gameScene)
    
    backgroundObjList = setBackground(gameScene , backgroundNumber);
    chasersObjList = setChasers(gameScene);
    runnerObjList = setRunners(gameScene);
    arrowsObjList = setArrows(gameScene);

    chaserObjAnimsList = animateChasers(gameScene , frameRate)
}
gameScene.update = ()=>{
    cursors = gameScene.input.keyboard.createCursorKeys();
    actions = {
        up : cursors.up.isDown ,
        wKey : stateOf.wKey,
        
        down : cursors.down.isDown,
        sKey : stateOf.sKey,
        
        left : cursors.left.isDown,
        aKey : stateOf.aKey,
        
        right : cursors.right.isDown,
        dKey : stateOf.dKey

    }
    updateBackground(backgroundObjList , backgroundNumber , actions )
    updateChasers(gameScene,chasersObjList[playerChaserNumber])
    updateArrows(gameScene , arrowsObjList[0] , chasersObjList[0])
}
export {gameScene}