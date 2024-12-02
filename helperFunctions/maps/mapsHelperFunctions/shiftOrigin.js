/**
 * Shifts the coordinates of map blocks relative to a new origin.
 * 
 * This function adjusts the coordinates of each block in `mapBlocks` by subtracting the new origin's 
 * x and y coordinates from the block's current coordinates. The adjusted coordinates are returned 
 * as a new array of blocks.
 * 
 * @param {Array<Array>} mapBlocks - An array of blocks, where each block is in the format 
 *                                   ["blockName", xCoordinate, yCoordinate].
 * @param {Array<number>} newOrigin - An array containing the new origin's x and y coordinates 
 *                                    as [newOriginX, newOriginY].
 * @returns {Array<Array>} A new array of blocks with coordinates shifted relative to the new origin.
 */
function shiftOrigin(mapBlocks, [newOriginX, newOriginY]) {
    let newMapBlocks = [];
    mapBlocks.forEach((block) => {
        const [blockName, xCoordinate, yCoordinate] = block;
        let newBlockname = blockName;
        let newXCoordinate = xCoordinate - newOriginX;
        let newYCoordinate = yCoordinate - newOriginY;
        newMapBlocks.push([newBlockname, newXCoordinate, newYCoordinate]);
    });
    return newMapBlocks;
}

module.exports = { shiftOrigin };