import { box } from "/game/inRoom_definers/statics/box.js";

/**
 * Creates and sets multiple box images in the scene.
 * 
 * @param {Phaser.Scene} sceneName - The Phaser scene where the boxes should be added.
 * @param {boolean} log - Whether to log the creation of each box.
 * @returns {Array} An array of the box objects.
 */
function setBox(sceneName, log) {
    let x =  0  
    let y = 0
    const boxObjList = [];
    const screenWidth = sceneName.game.config.width;
    const screenHeight = sceneName.game.config.height;
    let x1 = screenWidth / 4 //1/4
    let x2 = screenWidth - x1 // 3/4
    let y1 = screenHeight / 10
    let i = 0;
    // Ensure that the loop runs while box.totalBoxes is greater than 0
    while (box.totalBoxes > 0) {
        
        if (i % 2 == 0){
            x = x1;
            y += y1
        }else{
            x = x2;
        }
        
        // Create a box at the current x, y position
        const newBox = sceneName.add.image(x, y, box.name).setOrigin(0.5,0.5);

        // Set the display size relative to screen size
        newBox.setDisplaySize(screenWidth / 4 , screenHeight / 4);

        // Push the new box to the list
        boxObjList.push(newBox);

        // Log box creation if required
        if (log) {
            console.log(`Loaded box ${i + 1}`);
            console.log(i%2);
        }

        
        // Decrease the total boxes count
        box.totalBoxes -= 1;

        // Increment the index for tracking
        i += 1;
    }

    // Return the list of box objects
    return boxObjList;
}

export { setBox };
