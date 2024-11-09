import { gameScene } from "/game_definers/scenes/gameScene.js"

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
  scene: gameScene,
  pixelArt: false,
  title: "Tag"
}
// Initialising Game
new Phaser.Game(config)