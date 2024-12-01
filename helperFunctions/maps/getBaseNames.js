const fs = require("fs");
const path = require("path");

function getBaseNames(dirPath) {
  try {
    // Read the directory contents
    const files = fs.readdirSync(dirPath);
    
    // Map the files to the desired structure
    const result = files.map((file) => {
      return {
        name: path.parse(file).name, // Get the base name without extension
        path: "/" + path.relative(process.cwd(),path.join(dirPath  , file)).replace(/\\/g , "/")       // Get the relative path
      };
    });

    return result;
  } catch (error) {
    console.error("Error reading directory:", error.message);
    return [];
  }
}
module.exports = { getBaseNames }