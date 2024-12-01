function getBasepath(baseNames, key) {
    const basePath = baseNames.find((baseName) => baseName.name === key)?.path;
    if (!basePath) {
        console.log(`No path found for ${key}`);
        return false;
    }
    return basePath;
}
module.exports = {getBasepath};