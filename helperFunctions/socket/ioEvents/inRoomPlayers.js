const { getRoomData } = require("./connection")

let roomId , playerName , seatNumber , InRoomPlayerNames;
function inRoomPlayers(io, socket , response){
    roomId = response.roomId ;
    InRoomPlayerNames = getRoomData(roomId) ;
    socket.emit('inRoomPlayers', InRoomPlayerNames) ;
    console.log("aseked");
    console.log(InRoomPlayerNames);
    
    
}
module.exports = { inRoomPlayers }