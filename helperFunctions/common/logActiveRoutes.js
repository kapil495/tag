/**
 * Logs all active routes in the Express app.
 * 
 * This function scans the Express app's internal router stack to retrieve and log 
 * all the currently active routes, including their HTTP methods and paths.
 * 
 * @param {Object} app - The Express application object to extract routes from.
 * @returns {void}
 */
function logActiveRoutes(app) {
    // Filter the router stack to get layers with routes
    const routes = app._router.stack.filter(layer => layer.route)
        .map(layer => {
            return {
                method: Object.keys(layer.route.methods).join(', ').toUpperCase(),
                path: layer.route.path
            };
        });

    // Log the active routes to the console
    console.log('Active Routes:');
    routes.forEach(route => {
        console.log(`${route.method} ${route.path}`);
    });
}

module.exports = { logActiveRoutes };
