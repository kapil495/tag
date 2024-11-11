const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const fs = require("node:fs")
// Function to log active routes
const logActiveRoutes = () => {
    const routes = app._router.stack
        .filter(layer => layer.route) // Only get the routes
        .map(layer => {
            return {
                method: Object.keys(layer.route.methods).join(', ').toUpperCase(),
                path: layer.route.path
            };
        });

    console.log('Active Routes:');
    routes.forEach(route => {
        console.log(`${route.method} ${route.path}`);
    });
};
app.use(express.json({ limit: '30mb' }));
// Serve the index.html file for the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "maps", "index.html"));
});

// Serve the create.html file for the /create route
app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "maps", "create", "index.html"));
});
app.post('/upload-images', (req, res) => {
    console.log('Request Body:', req.body);  // Log the incoming body to check what is received
    
    const { images } = req.body;

    if (!images || images.length === 0) {
        return res.status(400).json({ message: 'No images to upload' });
    }

    const uploadDir = path.join(__dirname, '/assets/maps');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }

    images.forEach((image, index) => {
        const imageBuffer = Buffer.from(image.base64.split(',')[1], 'base64');
        const filePath = path.join(uploadDir, `${image.name}.png`);
        
        fs.writeFileSync(filePath, imageBuffer);
        console.log(`Saved image: ${filePath}`);
    });

    res.json({ message: 'Images uploaded successfully' });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Log active routes
logActiveRoutes();
