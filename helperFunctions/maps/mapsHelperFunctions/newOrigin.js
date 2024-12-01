const { join } = require("path")
require('dotenv').config({ path: join(process.cwd(), './maps.env') });

// founds the center of the map
function newOrigin(){
    const newOrigin = [process.env.defaultMapLength/ 2 , process.env.defaultMapHeight / 2 ]
    return newOrigin
}
module.exports = { newOrigin }