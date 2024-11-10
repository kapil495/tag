const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
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

const create_portal = (parent_dir)=>{
    app.get(`${parent_dir}/:dir`,(req,res)=>{
        console.log(`request for the following path ` + path.join(__dirname,`${parent_dir}/${req.params.dir}`));
        res.sendFile(path.join(__dirname,`${parent_dir}/${req.params.dir}`))
    })
    console.log(`created \b ${parent_dir}`)
}
const portals = require("./config/portals.json")
const create_portals = (portals)=>{
    for (let i = 0; i < portals.length; i++) {
        create_portal(portals[i])
    }
    console.log("all of the portals have been created");
    
}
create_portals(portals)
app.use(express.static('public'));
app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
logActiveRoutes()
