const { join } = require("path")
const { getBaseNames } = require("./getBaseNames.js")

require('dotenv').config({ path: join(process.cwd(), './maps.env') });

/**
 * Encodes map data into a format suitable for image processing.
 * 
 * @param {Object} options - Map encoding options.
 * @param {Array} options.mapBlocks - 2D array of map blocks.
 * @param {Number} options.canvasHeight - Height of the canvas.
 * @param {Number} options.canvasLength - Length of the canvas.
 * @param {String} imageDir - Directory path of images.
 */
function mapEncoder({ mapBlocks, canvasHeight, canvasLength }, imageDir) {
    const encodedMap = mapBlocks.map((block, index) => {
        const [blockName, xCoordinate, yCoordinate] = block;
        return {
            blockName,
            xCoordinate,
            yCoordinate,
            encodedX: xCoordinate * canvasLength,
            encodedY: yCoordinate * canvasHeight,
        };
    });
}

function relativeCoordinates(mapBlocks, mapHeightRatio, mapLengthRatio) {
    return mapBlocks.map((block) => {
        const [blockName, xCoordinate, yCoordinate] = block;
        return [
            blockName,
            xCoordinate * mapLengthRatio,
            yCoordinate * mapHeightRatio,
        ];
    });
}
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
function newOrigin(mapBlocks){
    let newMapBlocks = []
    mapBlocks.forEach((block)=>{
        const [blockName, xCoordinate, yCoordinate] = block;
        let newBlockname = blockName
        let newXCoordinate = xCoordinate - (process.env.defaultMapLength/2)
        let newYCoordinate = yCoordinate - (process.env.defaultMapHeight/2)
        newMapBlocks.push([newBlockname, newXCoordinate, newYCoordinate])
    })
    return newMapBlocks;
}
if (require.main === module) {
    const mapBlocks = [
        ['a', 2, 4],
        ['a', 1, 0]
    ]
    const canvasHeight = 10
    const canvasLength = 10
    const imageDir = join(process.cwd(), process.env.ImageUploadingPath)

    const baseNames = getBaseNames(imageDir);
    const defaultMapHeight = process.env.defaultMapHeight;
    const defaultMapLength = process.env.defaultMapLength;

    const mapHeightRatio = defaultMapHeight / canvasHeight;
    const mapLengthRatio = defaultMapLength / canvasLength;
    const relativeMap = relativeCoordinates(mapBlocks, mapHeightRatio, mapLengthRatio);
    const shiftedOriginMap = shiftOrigin(mapBlocks)

    console.log(relativeMap);
    console.log(shiftedOriginMap);
    
}

module.exports = { mapEncoder}