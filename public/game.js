import { gameScene } from "/game/game_definers/scenes/gameScene.js"
import { room } from "/game/room_definers/scenes/room.js"
// Initial Config
// Explanation: The Common way of defining game is to setup all func here. 
// But we have changed the approched to more modulated, we have made every part of this project in a seperate file
let config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scale:
  {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  fps : {
    target : 30,
    forceSetTimeOut : true
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
},
  scene: [room,gameScene],
  pixelArt: false,
  title: "Tag"
}
// Initialising Game
new Phaser.Game(config)