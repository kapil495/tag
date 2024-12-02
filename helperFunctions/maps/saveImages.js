const fs = require('fs');
const path = require('path');

/**
 * Saves an array of base64-encoded images to a specified directory.
 * 
 * This function processes an array of images, decodes their base64 data, and saves them
 * as `.png` files in the specified upload directory.
 * 
 * @param {Array<Object>} imageArray - Array of image objects. Each object should have:
 *   - `base64` (string): The base64-encoded image data.
 *   - `name` (string): The name for the saved image file (without extension).
 * @param {string} uploadDir - Path to the directory where the images will be saved.
 * 
 * @returns {void}
 * 
 * @throws Will log an error if the image data is invalid or if there are issues writing the file.
 */
function saveImages(imageArray, uploadDir) {
    imageArray.forEach((image, index) => {
        try {
            // Validate image structure
            if (!image.base64 || !image.name) {
                console.warn(`Skipping invalid image at index ${index}:`, image);
                return;
            }

            // Decode base64 data and construct the file path
            const imageBuffer = Buffer.from(image.base64.split(',')[1], 'base64');
            const filePath = path.join(uploadDir, `${image.name}.png`);

            console.log(`Saving image to: ${filePath}`);

            // Write the decoded image to a file
            fs.writeFileSync(filePath, imageBuffer);
            console.log(`Saved image: ${filePath}`);
        } catch (error) {
            console.error(`Error saving image at index ${index}:`, error.message);
        }
    });
}

module.exports = { saveImages };