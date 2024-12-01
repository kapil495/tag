//convert the mapBlocks coordinates wrt to new Origin .

function shiftOrigin(mapBlocks, [newOriginX, newOriginY]) {
    let newMapBlocks = []
    mapBlocks.forEach((block) => {
        const [blockName, xCoordinate, yCoordinate] = block;
        let newBlockname = blockName ;
        let newXCoordinate = xCoordinate - newOriginX;
        let newYCoordinate = yCoordinate - newOriginY;
        newMapBlocks.push([newBlockname, newXCoordinate, newYCoordinate])
     }
    )
    return newMapBlocks;
}
module.exports = {shiftOrigin}