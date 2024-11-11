const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
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
app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname , "maps" , "index.html"))
})
app.get("/create/map" , (req,res) =>{

})
app.listen(PORT , ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})
logActiveRoutes()