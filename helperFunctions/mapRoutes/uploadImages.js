const fs = require('fs');
const path = require('path');
const { mapEncoder } = require("../maps/mapEncoder.js");
const { saveImages } = require("../maps/saveImages.js");

// Function to ensure the upload directory exists
function uploadDirGate(uploadDir) {
    if (!fs.existsSync(uploadDir)) {
        try {
            fs.mkdirSync(uploadDir);
        } catch (err) {
            console.error(`Failed to create directory ${uploadDir}:`, err.message);
        }
    }
}

// POST route to handle image uploads
function uploadImages(app, uploadPath) {
    app.post('/uploadImages', (req, res) => {
        try {
            const uploadDir = path.join(process.cwd(), uploadPath);
            uploadDirGate(uploadDir);
            const { images, mapBlocks, canvasHeight, canvasLength } = req.body;
            console.log(mapBlocks , canvasHeight , canvasLength);
            
            if (!images || images.length === 0) {
               console.log("no images to upload");
               
            }

            // Save images
            saveImages(images, uploadDir);

            if (!mapBlocks || !canvasHeight || !canvasLength) {
                return res.status(400).json({ message: 'Invalid map data' });
            }
            //it will convert it to map usable by game
            mapEncoder({mapBlocks : mapBlocks,canvasHeight : canvasHeight , canvasLength :canvasLength } , uploadDir);
            res.json({ message: 'Images uploaded successfully. Map has been encoded.' });
        } catch (err) {
            console.error('Error handling /uploadImages:', err.message);
            res.status(500).json({ message: 'Server error' });
        }
    });
}

module.exports = { uploadImages };
