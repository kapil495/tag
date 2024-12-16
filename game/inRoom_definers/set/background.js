/**
 * Sets the background color of a specified scene and optionally logs the operation.
 *
 * @param {*} sceneName - The Phaser scene whose background color is being set.
 * @param {string|number} color - The color to set as the background. Can be a hex string (e.g., "#ffffff") or a numeric value.
 * @param {boolean} log - If true, logs a message indicating the background color was set.
 */
function setBackground(sceneName, color, log) {
    sceneName.cameras.main.setBackgroundColor(color);
    if (log) {
        print("set background  :  done");
    }
}
export { setBackground }