import { states } from "/game/game_definers/keys/states.js"

import { backgrounds } from "/game/game_definers/statics/backgrounds.js"
import { setBackground } from "/game/game_definers/set/background.js";
import { loadBackground } from "/game/game_definers/load/background.js";
import { updateBackground } from "/game/game_definers/update/background.js";

import { setMaps } from "/game/game_definers/set/maps.js";
import { loadMaps } from "/game/game_definers/load/maps.js";
import { updateMaps } from "/game/game_definers/update/maps.js";

import { loadChasers } from "/game/game_definers/load/chasers.js";
import { setChasers } from "/game/game_definers/set/chasers.js";
import { animateChasers } from "/game/game_definers/animate/chasers.js";
import { updateChasers } from "/game/game_definers/update/chasers.js"

import { loadRunners } from "/game/game_definers/load/runners.js"
import { setRunners } from "/game/game_definers/set/runners.js" 

import { loadArrows } from "/game/game_definers/load/arrows.js"
import { setArrows } from "/game/game_definers/set/arrows.js"
import { updateArrows } from "/game/game_definers/update/arrows.js"

// All these value below are tend to be loaded dynamically via socket connection
let frameRate = 10
let playerChaserNumber = 1 - 1
let backgroundNumber = 3;
let mapNumber = 1


let backgroundObjList ; 
let chasersObjList ;
let chaserObjAnimsList ; // chaserObjAnimsList[player number][ animation number  ]    1:front rest    2:leftrun    3:right run     4:backrest
let runnerObjList ;
let mapsObjList ; 
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
    loadMaps(gameScene)
}
gameScene.create = ()=>{
    
    stateOf = states(gameScene)
    
    backgroundObjList = setBackground(gameScene , backgroundNumber);
    chasersObjList = setChasers(gameScene);
    runnerObjList = setRunners(gameScene);
    arrowsObjList = setArrows(gameScene);
    mapsObjList = setMaps(gameScene , mapNumber)
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
    updateMaps(gameScene , mapsObjList , actions)
}
export {gameScene}