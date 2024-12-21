// all rooms mainatining data in form
const  {v4}  = require("uuid")
let roomName, roomId , seatNumber  , playerName , playerId;
let allRooms = {}; //for managing player data inside some room. 
// allRooms.roomName = [ [player1data] , [player2data] , ..... ]
// allRooms.roomName  =  [ ["manish" ,0 ,"02e35481-3ce7-4c92-b074-40156afb69b5"] , [ playername , seatnumber ,playerId] , [playername , seatnumber , playerId] , .......]
//prefered getRoomInformation(roomName)

let allRoomsServerInformation = {}; //for managing room information like host , max player , map name , ...... .
// allRoomsServerInformation.roomId = { hostName , roomId , maxPlayers , mapName , roomName }
//preferred getRoomServerInformation(roomId)

function connection(io,socket , response){
    //expwctwd response { name : "player name" , roomName : "room id "}
    roomName = response.roomName
    playerName = response.playerName
    playerId = v4() // unique player id assosciated
    let {seatNumber , roomId} = joinPlayer(socket , playerId)
    //whener a player joins below will send the player name and seatnumber to all other player in room . { playername , seatnumber }
    socket.customData = {
        playerName : playerName,
        playerId : playerId,
        roomName : roomName,
        seatNumber : seatNumber,
        roomId : roomId
    }
    io.to(roomName).emit("playerJoin" , {playerName : playerName , seatNumber : seatNumber})
}
function joinPlayer(socket , playerId){
    //if room was not creted previously. then i will create a new room and make first player the HOST.

    if ( checkIfRoomIsAlreadyCreated(roomName)) {
        seatNumber = allRooms[roomName].length //its the seatnumber
        allRooms[roomName].push([playerName , seatNumber , playerId]) // allRooms.roomid = [ [ playername  , seatNumber ] , .......]
        socket.join(roomName)
        socket.emit("response" , "you have joined the room ")
    }else{
        roomId = v4()
        allRooms[roomName] = []
        allRooms[roomName].push([playerName , 0 , playerId]) // allRooms.roomid = [ [ playername  , seatNumber ] ]
        socket.emit("response" , "room have been added. you are host")
        socket.join(roomName)
        seatNumber = 0
        //adding room server information
        allRoomsServerInformation[roomId] = {
            hostName : playerName,
            roomId : roomId ,
            maxPlayers : 30 ,
            mapName : "asked in future",
            roomName : roomName
        }
    }
    return {seatNumber , roomId}
}
function checkIfRoomIsAlreadyCreated(roomName){
    return (roomName in allRooms) 
}
function getRoomInformation(roomName){
    return allRooms[roomName];
}
function getRoomServerInformation(roomId){
    return allRoomsServerInformation[roomId];
}
//whenever the socket disconnects the change must be reflected in AllRooms.roomid
function changeRoomData(roomName , newRoomData){
    allRooms[roomName] = newRoomData;
}
module.exports = { connection , getRoomInformation , changeRoomData , getRoomServerInformation}