const { join, basename } = require("path")
const { getBaseNames } = require("./getBaseNames.js")
const { relativeCoordinates } = require("./mapsHelperFunctions/relativeCoordinates.js")
const { shiftOrigin } = require("./mapsHelperFunctions/shiftOrigin.js")
const { newOrigin } = require("./mapsHelperFunctions/newOrigin.js")
const { getBasepath } = require("./mapsHelperFunctions/getBasePath.js")
const { saveJson } = require("./saveJson.js")
const { log } = require("console")
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
function mapEncoder({ mapBlocks, canvasHeight, canvasLength , shiftSpeeds}, imageDir) {
    let encodedMap =[];
    //logic begins from here
    const baseNames = getBaseNames(imageDir);
    const defaultMapHeight = process.env.defaultMapHeight;
    const defaultMapLength = process.env.defaultMapLength;
    const mapHeightRatio = defaultMapHeight / canvasHeight;
    const mapLengthRatio = defaultMapLength / canvasLength;
    
    finalBlockData = shiftOrigin(relativeCoordinates(mapBlocks,mapHeightRatio,mapLengthRatio) , newOrigin())
    finalBlockData.forEach(([blockName , xCoordinate , yCoordinate])=>{
        blockName = blockName.toUpperCase()
        let name = blockName;
        let path = getBasepath(baseNames , blockName)
        let position = [xCoordinate , yCoordinate];
        let setDisplaySize = [mapLengthRatio , mapHeightRatio]
        let origin = [0.5,0.5]
        let shiftSpeed = shiftSpeeds === undefined ? JSON.parse(process.env.shiftSpeed) : shiftSpeeds;
        let final = {name,path,position,setDisplaySize,origin,shiftSpeed}
        log(final)
        encodedMap.push(final)
    })
    saveJson("first.json" , encodedMap)
}
//this below is for development purposes only
if (require.main === module) {
    let finalBlockData = []
    let encodedMap = []
    const mapBlocks = [
        ['a', 2, 4],
        ['a', 1, 0]
    ]
    const canvasHeight = 10
    const canvasLength = 10
    const imageDir = join(process.cwd(), process.env.ImageUploadingPath)
    let shiftSpeeds;
    //logic begins from here
    const baseNames = getBaseNames(imageDir);
    const defaultMapHeight = process.env.defaultMapHeight;
    const defaultMapLength = process.env.defaultMapLength;
    const mapHeightRatio = defaultMapHeight / canvasHeight;
    const mapLengthRatio = defaultMapLength / canvasLength;
    
    finalBlockData = shiftOrigin(relativeCoordinates(mapBlocks,mapHeightRatio,mapLengthRatio) , newOrigin())
    finalBlockData.forEach(([blockName , xCoordinate , yCoordinate])=>{
        let name = blockName;
        let path = getBasepath(baseNames , blockName)
        let position = [xCoordinate , yCoordinate];
        let setDisplaySize = [mapLengthRatio , mapHeightRatio]
        let origin = [0.5,0.5]
        let shiftSpeed = shiftSpeeds === undefined ? JSON.parse(process.env.shiftSpeed) : shiftSpeeds;
        log({name,path,position,setDisplaySize,origin,shiftSpeed})
        encodedMap.push({name,path,position,setDisplaySize,origin,shiftSpeed})
    })
    console.log(baseNames);
    
    console.log(encodedMap);
    saveJson("first.json" , encodedMap)
}

module.exports = { mapEncoder }