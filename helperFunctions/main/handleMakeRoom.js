const { join } = require("path");

function handleMakeRoom(app , roomName) {
    app.post("/makeRoom", (req, res) => {
        const {roomName , playerName} = req.body;
        console.log(roomName)
        if (makeRoom(app, roomName)) {
            res.json({ roomname: roomName});
        } else {
            res.status(500).json({ error: "Error creating room" });
        }
    });
}

function makeRoom(app, roomName) {
    // Dynamically create a route for the room
    app.get(`/room/${roomName}`, (req, res) => {
        res.sendFile(join(process.cwd(), "./public/room/index.html"));
    });
    app.post(`/room/${roomName}/verify` , (req,res)=>{
        res.json({success : true})
    })
    return true; // Indicate room creation succeeded
}


module.exports = { handleMakeRoom };
