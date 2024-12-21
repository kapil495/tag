// all rooms mainatining data in form 
// allRooms.{ roomId }  =  [ [host , 0] , [ playername , seatnumber ] , [playername , seatnumber] , .......]
const  {v4}  = require("uuid")
let roomId , totalPlayersInRoom , seatNumber  , playerName , playerId;
let allRooms = {};

function connection(io,socket , response){
    //expwctwd response { name : "player name" , roomId : "room id "}
    roomId = response.roomId
    playerName = response.playerName
    playerId = v4() // unique player id assosciated
    seatnumber = joinPlayer(socket , playerId);

    //whener a player joins below will send the player name and seatnumber to all other player in room . { playername , seatnumber }
    socket.customData = {
        playerName : playerName,
        playerId : playerId,
        roomId : roomId,
        seatNumber : seatNumber
    }
    io.to(roomId).emit("playerJoin" , {playerName : playerName , seatNumber : seatNumber})
}
function joinPlayer(socket , playerId){
    //if room was not creted previously. then i will create a new room and make first player the HOST.

    if ( checkIfRoomIsAlreadyCreated(roomId)) {
        seatNumber = allRooms[roomId].length //its the seatnumber
        allRooms[roomId].push([playerName , seatNumber , playerId]) // allRooms.roomid = [ [ playername  , seatNumber ] , .......]
        socket.join(roomId)
        socket.emit("response" , "you have joined the room ")
    }else{
        allRooms[roomId] = []
        allRooms[roomId].push([playerName , 0 , playerId]) // allRooms.roomid = [ [ playername  , seatNumber ] ]
        socket.emit("response" , "room have been added. you are host")
        socket.join(roomId)
        seatNumber = 0
    }
    return seatNumber
}
function checkIfRoomIsAlreadyCreated(roomId){
    return (roomId in allRooms) 
}
function getRoomData(roomId){
    return allRooms[roomId];
}
//whenever the socket disconnects the change must be reflected in AllRooms.roomid
function changeRoomData(roomId , newRoomData){
    allRooms[roomId] = newRoomData;
}
module.exports = { connection , getRoomData , changeRoomData}