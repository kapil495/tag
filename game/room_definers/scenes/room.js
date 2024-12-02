import { gameScene } from "/game/game_definers/scenes/gameScene.js";
import { states } from "/game/game_definers/keys/states.js"
let room = new Phaser.Scene('room');

room.init = () => {
    console.log("Initializing room");
};

room.preload = () => {
    console.log("Preloading the room");
};

room.create = () => {
    console.log("creating room")
};

room.update = () => {
    let cursors = room.input.keyboard   
    let keys= states(room)
    console.log(keys);
    if (keys.wkey) {
        room.scene.start(gameScene)
    }
    
};

export { room };
