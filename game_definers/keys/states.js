import { keys } from "/game_definers/statics/keys.js";

let keyStates = {};

export function keyState(sceneName) {
    keys.forEach(key => {
        keyStates[key.toLowerCase() + "key"] = sceneName.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[key.toUpperCase()]).isDown
    });
    console.log(keyStates);
    
    return keyStates;
}