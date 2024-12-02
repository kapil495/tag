//modules
const express = require('express');
const path = require('path');
const app = express();
const fs = require("node:fs")
require("dotenv").config({path : "./environmentVariables/maps.env"})

//helper Functions
const { logActiveRoutes } = require("./helperFunctions/common/logActiveRoutes");

//route handling functions
const portals = require("./mapConfig/portals.json") 
const  { uploadImages }  = require("./helperFunctions/mapRoutes/uploadImages")
const { createPortal } = require("./helperFunctions/common/createPortal") //create 1 portals at a time  createPottal("string route")
const { createPortals }= require("./helperFunctions/common/createPortals");
console.log(portals);

//code
createPortals(app,portals,createPortal)
app.use(express.json({ limit: process.env.ImageUploadingLimit }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "maps", "index.html"));
});
// /maps/create for handling map designing
app.get("/maps/create", (req, res) => {
    res.sendFile(path.join(__dirname, "maps", "create", "index.html"));
});
// for handling the post data from /create
uploadImages(app, process.env.ImageUploadingPath || "/assets/maps") //create a route for handling image upload {post route}

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
logActiveRoutes(app)