function createPortals( app,portals , createPortal ,){
    for (let i = 0; i < portals.length; i++) {
        createPortal(app,portals[i])
    }
    console.log("all of the portals have been created");
}
module.exports = {createPortals}