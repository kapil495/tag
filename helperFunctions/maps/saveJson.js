const { join } = require('path');
const fs = require("node:fs");
require('dotenv').config({ path: join(process.cwd(), './environmentVariables/maps.env') });

/**
 * Saves a given JSON object to a file in a specified directory.
 * 
 * The function converts the provided JSON data to a properly formatted string and writes it
 * to a file in the directory specified by the `mapSavingDir` environment variable.
 * 
 * @param {string} fileName - The name of the file to save the JSON data to.
 * @param {Object} jsonData - The JSON data to be saved. Can be an object or an already stringified JSON.
 * @returns {void}
 * 
 * @throws Will log an error if the JSON data is invalid or if there is an issue writing to the file.
 */
function saveJson(fileName, jsonData) {
    try {
        // Parse and re-stringify the JSON data to ensure it's properly formatted
        const parsedData = JSON.parse(JSON.stringify(jsonData, null, 2));

        // Construct the full file path
        const filePath = join(process.cwd(), process.env.mapSavingDir + "/" + fileName);

        // Convert parsed data to a formatted JSON string
        const jsonString = JSON.stringify(parsedData, null, 2);

        // Write the JSON string to the file asynchronously
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

module.exports = { saveJson };
