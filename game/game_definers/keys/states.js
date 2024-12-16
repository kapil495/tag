import { keys } from "/game/game_definers/statics/keys.js";

let keyStates = {};

/**
 * Tracks the state of specified keys (whether they are pressed or not) in a given Phaser scene.
 * 
 * This function updates the `keyStates` object by checking the state of each key defined in the `keys` array. 
 * It uses Phaser's input system to determine if each key is currently being pressed down.
 * 
 * @param {Object} sceneName - The Phaser scene object used to track the keyboard input.
 * @returns {Object} - An object with key names (in lowercase) as properties and boolean values 
 * indicating whether the corresponding key is currently pressed (`true`) or not (`false`).
 */
export function states(sceneName) {
    // Iterate over each key in the 'keys' array and check its state in the scene
    keys.forEach(key => {
        keyStates[key.toLowerCase() + "key"] = sceneName.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[key.toUpperCase()]).isDown;
    });

    // Log the current key states to the console
   // console.log(keyStates);
    
    return keyStates;
}