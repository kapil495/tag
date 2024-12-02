const { join } = require("path");
require('dotenv').config({ path: join(process.cwd(), './environmentVariables/maps.env') });

/**
 * Calculates and returns the center (origin) of the map.
 * 
 * The function determines the center of the map by dividing the map's length and height
 * (retrieved from environment variables) by 2. It assumes `defaultMapLength` and `defaultMapHeight`
 * are defined in the environment variables file located at `./environmentVariables/maps.env`.
 * 
 * @returns {Array<number>} An array containing the x-coordinate and y-coordinate of the map center.
 */
function newOrigin() {
    const newOrigin = [process.env.defaultMapLength / 2, process.env.defaultMapHeight / 2];
    return newOrigin;
}
module.exports = { newOrigin };
