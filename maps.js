//modules
const express = require('express');
const path = require('path');
const app = express();
const fs = require("node:fs")
require("dotenv").config({path : "./maps.env"})

//helper Functions
const { logActiveRoutes } = require("./helperFunctions/common/logActiveRoutes");

//route handling functions
const  { uploadImages }  = require("./helperFunctions/mapRoutes/uploadImages")

//code
app.use(express.json({ limit: process.env.ImageUploadingLimit }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "maps", "index.html"));
});
// create for handling map designing
app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "maps", "create", "index.html"));
});
// for handling the post data from /create
uploadImages(app, process.env.ImageUploadingPath || "/assets/maps")

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
logActiveRoutes(app)