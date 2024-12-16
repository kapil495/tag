require("dotenv").config({path : "./environmentVariables/main.env"})
const express = require('express');
const path = require('path');
const app = express();

//helper functions
const { logActiveRoutes }= require("./helperFunctions/common/logActiveRoutes")

//route handling functions
const portals = require("./mainConfig/portals.json") 
const { createPortal } = require("./helperFunctions/common/createPortal") //create 1 portals at a time  createPottal("string route")
const { createPortals }= require("./helperFunctions/common/createPortals");
const { handleMakeRoom } = require("./helperFunctions/main/handleMakeRoom")
//code
app.use(express.static(path.join(process.cwd(),'public')));
app.use(express.json())
app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
});
createPortals(app,portals,createPortal)
handleMakeRoom(app)

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
logActiveRoutes(app)
