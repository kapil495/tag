/**
 * Creates multiple portals by iterating over an array of portal paths and calling `createPortal` for each.
 * 
 * This function takes an array of portal paths and uses the provided `createPortal` function to 
 * generate a route for each path, effectively setting up multiple static file-serving routes on the 
 * Express app.
 * 
 * @param {Object} app - The Express application object to register the routes on.
 * @param {Array<string>} portals - An array of portal paths (directory paths) that will be used to create routes.
 * @param {Function} createPortal - A function that creates an individual portal (route) for serving files.
 * @returns {void}
 */
function createPortals(app, portals, createPortal) {
    for (let i = 0; i < portals.length; i++) {
        createPortal(app, portals[i]);  // Create a portal for each path in the portals array
    }
    console.log("All of the portals have been created");
}

module.exports = { createPortals };
