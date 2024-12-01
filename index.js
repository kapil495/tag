require("dotenv").config({path : "./main.env"})
const express = require('express');
const path = require('path');
const app = express();

//helper functions
const { logActiveRoutes }= require("./helperFunctions/common/logActiveRoutes")

//route handling functions
const portals = require("./mainConfig/portals.json") 
const { createPortal } = require("./helperFunctions/common/createPortal") //create 1 portals at a time  createPottal("string route")
const { createPortals }= require("./helperFunctions/common/createPortals");

//code
app.use(express.static('public'));

createPortals(app,portals,createPortal)

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
logActiveRoutes(app)
