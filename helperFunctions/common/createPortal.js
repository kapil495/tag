const path = require('path');

/**
 * Creates a route that serves static files from a specified directory.
 * 
 * This function dynamically generates a route for serving files from a `parent_dir`. 
 * The route listens for GET requests at `/parent_dir/:dir`, where `:dir` is a dynamic 
 * parameter representing the file or folder to serve from the specified `parent_dir`.
 * 
 * @param {Object} app - The Express application object to register the route on.
 * @param {string} parent_dir - The directory from which files will be served.
 * @returns {void}
 */
function createPortal(app, parent_dir) {
    app.get(`${parent_dir}/:dir`, (req, res) => {
        // Log the requested file path
        console.log(`Request for the following path: ` + path.join(process.cwd(), `${parent_dir}/${req.params.dir}`));
        
        // Serve the file from the parent directory
        res.sendFile(path.join(process.cwd(), `${parent_dir}/${req.params.dir}`));
    });

    // Log that the portal has been created
    console.log(`Created portal for ${parent_dir}`);
}

module.exports = { createPortal };