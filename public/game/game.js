import { gameScene } from "/game/game_definers/scenes/gameScene.js"
import { inRoom } from "/game/inRoom_definers/scenes/inRoom.js"

import { startConnection } from "/game/socket/startConnection.js"
// Initial Config
// Explanation: The Common way of defining game is to setup all func here. 
// But we have changed the approched to more modulated, we have made every part of this project in a seperate file

//the beloow function will send initial msg to server and start the game
startConnection("initial message")

let config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scale:
  {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  fps: {
    target: 30,
    forceSetTimeOut: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [inRoom, gameScene],
  plugins: {
    scene: [{
      key: 'UIPlugin',
      plugin: Phaser.UIPlugin,  // Use the globally available UIPlugin
      mapping: 'UIPlugin'
    }]
  },
  pixelArt: false,
  title: "Tag",
  dom: {
    createContainer: true  // Enable Phaser's DOM management
}
}
// Initialising Game
new Phaser.Game(config)