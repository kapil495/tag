// all rooms mainatining data in form 
// allRooms.{ roomId }  =  [ [host , 0] , [ playername , seatnumber ] , [playername , seatnumber] , .......]
let roomId , totalPlayersInRoom , seatNumber ;
let allRooms = {};
function getRoomData(roomId){
    return allRooms[roomId];
}
//whenever the socket disconnects the change must be reflected in AllRooms.roomid
function changeRoomData(roomId , newRoomData){
    allRooms[roomId] = newRoomData;
}
function connection(io,socket , response){
    //expwctwd response { name : "player name" , roomId : "room id "}

    var roomId = response.roomId
    var playerName = response.playerName
    // checking if io has joined the room. if not then first player that joins become host  
    if ( ! (roomId in allRooms) ){
        allRooms[roomId] = []
        allRooms[roomId].push([playerName , 0]) // allRooms.roomid = [ [ playername  , seatNumber ] ]
        socket.emit("response" , "room have been added. you are host")
        socket.join(roomId)
    }else{
        //to add player that joined after the host and wmit 

        totalPlayersInRoom = allRooms[roomId].length
        allRooms[roomId].push([playerName , totalPlayersInRoom ]) // allRooms.roomid = [ [ playername  , seatNumber ] , .......]
        socket.join(roomId)
        socket.emit("response" , "you have joined the room ")
    }
    //whener a player joins below will send the player name and seatnumber to all other player in room . { playername , seatnumber }
    socket.customData = {
        playerName : playerName,
        playerId : socket.id,
        roomId : roomId
    }
    
    seatNumber = allRooms[roomId].length - 1
    io.to(roomId).emit("playerJoin" , {playerName : playerName , seatNumber : seatNumber})
}
module.exports = { connection , getRoomData , changeRoomData}