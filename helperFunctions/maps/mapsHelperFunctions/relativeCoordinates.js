/**
 * Converts map blocks from canvas coordinates to game coordinates.
 * 
 * This function adjusts the coordinates of each block based on the provided map ratios,
 * transforming the `xInCanvas` and `yInCanvas` into `xInGame` and `yInGame`.
 * 
 * @param {Array<Array>} mapBlocks - An array of blocks, where each block is an array in the format 
 *                                   ["blockName", xInCanvas, yInCanvas].
 * @param {number} mapHeightRatio - The ratio used to scale the y-coordinates.
 * @param {number} mapLengthRatio - The ratio used to scale the x-coordinates.
 * @returns {Array<Array>} A new array of blocks with updated coordinates in the format 
 *                         ["blockName", xInGame, yInGame].
 * 
 * @throws {Error} If `mapBlocks` is not a non-empty array.
 * @throws {Error} If `mapHeightRatio` or `mapLengthRatio` are not numbers.
 * @throws {Error} If any block in `mapBlocks` is not an array of exactly three elements.
 */
function relativeCoordinates(mapBlocks, mapHeightRatio, mapLengthRatio) {
    if (!Array.isArray(mapBlocks) || mapBlocks.length === 0) {
        throw new Error('mapBlocks must be a non-empty array');
    }
    if (typeof mapHeightRatio !== 'number' || typeof mapLengthRatio !== 'number') {
        throw new Error('mapHeightRatio and mapLengthRatio must be numbers');
    }
    return mapBlocks.map((block) => {
        if (!Array.isArray(block) || block.length !== 3) {
            throw new Error('Each block must be an array of three elements');
        }
        const [blockName, xCoordinate, yCoordinate] = block;
        return [
            blockName,
            xCoordinate * mapLengthRatio,
            yCoordinate * mapHeightRatio,
        ];
    });
}

module.exports = { relativeCoordinates };
