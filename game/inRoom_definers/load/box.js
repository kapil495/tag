import {box} from "/game/inRoom_definers/statics/box.js"
/**
 * Loads the box image asset into the specified Phaser scene.
 * 
 * @param {Phaser.Scene} sceneName - The Phaser scene where the box image should be loaded.
 * @param {boolean} log - Whether to log a confirmation message to the console.
 * @throws {Error} If the box asset cannot be found or loaded.
 */
function loadBox(sceneName, log) {
    sceneName.load.image(box.name, box.path);
    if (log) {
        console.log("Loaded boxes");
    }
}

export { loadBox };
