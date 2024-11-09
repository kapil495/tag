import {gameScene} from "/game_definers/scenes/gameScene.js"

let config = {
    type : Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
  scale: 
  {
    mode: Phaser.Scale.FIT, 
    autoCenter: Phaser.Scale.CENTER_BOTH
},
    scene : gameScene,
    pixelArt : false,
    title : "Tag"
}

let game = new Phaser.Game(config)