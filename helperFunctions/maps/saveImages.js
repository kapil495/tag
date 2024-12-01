const fs = require('fs');
const path = require('path');

function saveImages(imageArray, uploadDir) {
    imageArray.forEach((image, index) => {
        try {
            // Validate image structure
            if (!image.base64 || !image.name) {
                console.warn(`Skipping invalid image at index ${index}:`, image);
                return;
            }

            // Decode base64 and construct the file path
            const imageBuffer = Buffer.from(image.base64.split(',')[1], 'base64');
            const filePath = path.join(uploadDir, `${image.name}.png`);

            console.log(`Saving image to: ${filePath}`);

            // Write the file
            fs.writeFileSync(filePath, imageBuffer);
            console.log(`Saved image: ${filePath}`);
        } catch (error) {
            console.error(`Error saving image at index ${index}:`, error.message);
        }
    });
}

module.exports = { saveImages };
