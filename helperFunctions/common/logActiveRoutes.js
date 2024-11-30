function logActiveRoutes (app){
    const routes = app._router.stack.filter(layer => layer.route)
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
module.exports = {logActiveRoutes}