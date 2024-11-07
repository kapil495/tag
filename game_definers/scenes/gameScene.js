import { setBackground } from "/game_definers/setBackground.js";
import { loadBackground } from "/game_definers/loadBackground.js";

import { loadChasers } from "/game_definers/loadChasers.js";
import { setChasers } from "/game_definers/setChasers.js";
import { animateChasers } from "/game_definers/animateChasers.js";

import { loadRunners } from "/game_definers/loadRunners.js"
import { setRunners } from "/game_definers/setRunners.js" 


let frameRate = 10
let backgroundNumber = 3;
let backgroundObjList ; 
let chasersObjList ;
let chaserObjAnimsList ; // chaserObjAnimsList[player number][ animation number  ]    1:front rest    2:leftrun    3:right run     4:backrest
let runnerObjList ;
let gameScene = new Phaser.Scene('Game');

gameScene.init = ()=>{

}
gameScene.preload = ()=>{
    loadBackground(gameScene,backgroundNumber)
    loadChasers(gameScene)
    loadRunners(gameScene)
    
}
gameScene.create = ()=>{
    backgroundObjList = setBackground(gameScene , backgroundNumber);
    chasersObjList = setChasers(gameScene);
    runnerObjList = setRunners(gameScene);
    chaserObjAnimsList = animateChasers(gameScene , frameRate)
    
}
gameScene.update = ()=>{

}
export {gameScene}