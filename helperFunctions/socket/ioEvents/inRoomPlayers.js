const { getRoomInformation } = require("./connection")

let roomName , playerName , seatNumber , InRoomPlayerNames;
function inRoomPlayers(io, socket , response){
    roomName = response.roomName ;
    InRoomPlayerNames = getRoomInformation(roomName) ;
    socket.emit('inRoomPlayers', InRoomPlayerNames) ;
    console.log(InRoomPlayerNames);
    
}
module.exports = { inRoomPlayers }