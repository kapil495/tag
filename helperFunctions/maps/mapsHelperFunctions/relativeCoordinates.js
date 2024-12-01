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