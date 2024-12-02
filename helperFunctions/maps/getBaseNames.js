const fs = require("fs");
const path = require("path");

/**
 * Retrieves the base names and relative paths of all files in a specified directory.
 * 
 * This function reads the contents of the given directory, extracts the base name (without extension) and
 * the relative path of each file, and returns an array of objects containing these details.
 * 
 * @param {string} dirPath - The path to the directory to read files from.
 * @returns {Array<Object>} An array of objects where each object contains:
 *   - `name` (string): The base name of the file (without extension).
 *   - `path` (string): The relative path of the file from the current working directory.
 * 
 * @throws {Error} Will log an error if the directory cannot be read.
 */
function getBaseNames(dirPath) {
  try {
    // Read the directory contents
    const files = fs.readdirSync(dirPath);
    
    // Map the files to an array of objects containing base names and relative paths
    const result = files.map((file) => {
      return {
        name: path.parse(file).name, // Get the base name without the file extension
        path: "/" + path.relative(process.cwd(), path.join(dirPath, file))  // Get the relative path, formatted with forward slashes
          .replace(/\\/g, "/") // Normalize Windows paths to use forward slashes
      };
    });

    return result;
  } catch (error) {
    console.error("Error reading directory:", error.message);
    return [];
  }
}

module.exports = { getBaseNames };