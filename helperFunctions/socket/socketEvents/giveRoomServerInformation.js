const { getRoomServerInformation } = require("../ioEvents/connection")
let roomServerInformation;
function giveRoomServerInformation(io, socket){
    roomServerInformation = getRoomServerInformation(socket.customData.roomId)
    socket.emit("roomServerInformation", roomServerInformation )
}
module.exports = { giveRoomServerInformation }