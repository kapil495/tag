/**
 * Returns the path of the object with the matching key from the array.
 * If the key is not present, it returns `false`.
 * 
 * @param {Array} items - [{name : "A" , path : "/path/to/A.png"} , {name : "B" , path : "path/to/B.png"} , ......]
 * @param {string} targetName - "B"
 * @returns {string|boolean} - The `path` of the matching object, or `false` if not found. 
 */

function getBasepath(baseNames, key) {
    const basePath = baseNames.find((baseName) => baseName.name === key)?.path;
    if (!basePath) {
        console.log(`No path found for ${key}`);
        return false;
    }
    return basePath;
}
module.exports = {getBasepath};