const { join } = require('path');
const fs = require("node:fs")
require('dotenv').config({ path: join(process.cwd(), './maps.env') });

function saveJson(fileName ,jsonData) {
    try {
        // Parse the provided JSON data (in case it's a string)
        const parsedData = JSON.parse((JSON.stringify(jsonData,null,2)));

        // Create the full path for the file
        const filePath = join(process.cwd() , process.env.mapSavingDir+ "/" +fileName);

        // Convert the parsed data to a JSON string with indentation
        const jsonString = JSON.stringify(parsedData, null, 2);

        // Write the JSON string to the specified file
        fs.writeFile(filePath, jsonString, 'utf8', (err) => {
            if (err) {
                console.log('Error writing file:', err);
            } else {
                console.log(`File has been saved at ${filePath}`);
            }
        });
    } catch (err) {
        console.log('Invalid JSON data:', err);
    }
}
module.exports = {saveJson}