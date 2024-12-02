import { chasersAnims } from "/game/game_definers/statics/chasersAnims.js";
import { chasers } from "/game/game_definers/statics/chasers.js";

let anims = [];
let chaserObjAnimsListToReturn = [];

/**
 * Creates animations for a specific chaser based on the animation definitions in `chasersAnims`.
 * 
 * This function dynamically creates animations for a given chaser using the frame data from `chasersAnims` 
 * and adds them to the scene. Each animation is created with a unique key and is registered in the scene 
 * with a specified frame rate and repeat behavior.
 * 
 * @param {Object} sceneName - The Phaser scene object used to create and register the animations.
 * @param {string} chaserName - The name of the chaser for which the animations will be created.
 * @param {number} frameRate - The frame rate at which the animation will play.
 * @returns {Array<string>} - An array of animation keys for the chaser.
 */
function animateChasersWithName(sceneName, chaserName, frameRate) {
    for (let i = 0; i < chasersAnims.length; i++) {
        // Create animation for each chaser with the respective animation key
        sceneName.anims.create({
            key: chaserName + chasersAnims[i].key,
            frames: sceneName.anims.generateFrameNumbers(chaserName, {
                start: chasersAnims[i].start,
                end: chasersAnims[i].end
            }),
            frameRate: frameRate,
            repeat: chasersAnims[i].repeat
        });
        anims.push(chaserName + chasersAnims[i].key);
        console.log(`${chasersAnims[i].key} anim for ${chaserName} chaser has been created`);
    }
    console.log(`All animations for ${chaserName} chaser have been created.`);
    return anims;
}

/**
 * Creates animations for all chasers defined in `chasers` and returns a list of animation keys for each.
 * 
 * This function iterates over all chasers and calls `animateChasersWithName` to create the animations for each chaser.
 * The animations are then stored in an array for later use.
 * 
 * @param {Object} sceneName - The Phaser scene object used to create and register the animations.
 * @param {number} frameRate - The frame rate at which the animations will play.
 * @returns {Array<Array<string>>} - An array containing arrays of animation keys for each chaser.
 */
export function animateChasers(sceneName, frameRate) {
    for (let i = 0; i < chasers.length; i++) {
        chaserObjAnimsListToReturn.push(animateChasersWithName(sceneName, chasers[i].name, frameRate));
        anims = [];  // Reset the anims array for the next chaser
    }
    return chaserObjAnimsListToReturn;
}

// Example Usage:
// animateChasers(gamescene, 10);
// chaserObjList[i].play('redrunRight');
