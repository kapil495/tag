const fs = require('fs');
const path = require('path');
const { mapEncoder } = require("../maps/mapEncoder.js");
const { saveImages } = require("../maps/saveImages.js");

// Function to ensure the upload directory exists
/**
 * Ensures that the specified upload directory exists. If it doesn't, it attempts to create it.
 * 
 * @param {string} uploadDir - The directory path to check and create if it doesn't exist.
 */
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
/**
 * Handles image uploads by saving the images and encoding the map data.
 * 
 * This function listens for POST requests at `/uploadImages`, where it expects image data and 
 * map-related information. It validates and processes the incoming data, saves the images to disk, 
 * and encodes the map for use in the game.
 * 
 * @param {Object} app - The Express application object to register the route on.
 * @param {string} uploadPath - The relative path where images should be uploaded and saved.
 * @returns {void}
 */
function uploadImages(app, uploadPath) {
    app.post('/uploadImages', (req, res) => {
        try {
            const uploadDir = path.join(process.cwd(), uploadPath);
            uploadDirGate(uploadDir); // Ensure the upload directory exists

            const { images, mapBlocks, canvasHeight, canvasLength } = req.body;
            console.log(mapBlocks , canvasHeight , canvasLength);
            
            if (!images || images.length === 0) {
               console.log("No images to upload");
               return res.status(400).json({ message: 'No images to upload' });
            }

            // Save images to the specified upload directory
            saveImages(images, uploadDir);

            // Validate map data
            if (!mapBlocks || !canvasHeight || !canvasLength) {
                return res.status(400).json({ message: 'Invalid map data' });
            }

            // Encode the map data for the game
            mapEncoder({ mapBlocks, canvasHeight, canvasLength }, uploadDir);

            // Respond to the client indicating success
            res.json({ message: 'Images uploaded successfully. Map has been encoded.' });
        } catch (err) {
            console.error('Error handling /uploadImages:', err.message);
            res.status(500).json({ message: 'Server error' });
        }
    });
}

module.exports = { uploadImages };
