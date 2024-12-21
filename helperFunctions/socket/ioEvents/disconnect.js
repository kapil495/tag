const { getRoomData , changeRoomData} = require("./connection.js"); // Assuming this fetches room data based on roomId
let roomId , disconnectedPlayerName , roomData , disconnectedPlayerSeatNumber , disconnectedPlayerId;
function disconnect(io, socket) {
    try {
        // Check if custom data exists on the socket
        if (!socket.customData) {
          throw new Error('Socket custom data is missing');
        }

        disconnectedPlayerName = socket.customData.playerName;
        disconnectedPlayerSeatNumber = socket.customData.seatNumber;
        disconnectedPlayerId = socket.customData.playerId;
        roomId = socket.customData.roomId;

        // Fetch the current room data
        roomData = getRoomData(roomId);

        // Modify the room data to remove the disconnected player
        roomData = newUpdatedRoomData(roomData , [disconnectedPlayerId , disconnectedPlayerSeatNumber])
        console.log(roomData);
        

        //changes must be felected in actual room data present in connection.js
        changeRoomData(roomId,roomData)
        // Emit updated room data to all players in the room
        io.to(roomId).emit("updateAllPlayers", roomData);

        console.log(`Player ${disconnectedPlayerName} disconnected from room ${roomId}`);
    } catch (error) {
        console.error('Error handling disconnection:', error);
    }
}
function newUpdatedRoomData(roomdata, disconnectedPlayerInfo) {
    // Find the index of the player that disconnected
    const [disconnectedPlayerId, disconnectedPlayerSeatNumber] = disconnectedPlayerInfo;
    
    // Remove the disconnected player
    let updatedArray = roomdata.filter(([_, __, id]) =>(id !== disconnectedPlayerId));

    // Adjust seat numbers of players with a seat number greater than the disconnected player's seat number
    for (let i = 0; i < roomdata.length; i++) {
        if (roomdata[i][1] > disconnectedPlayerSeatNumber) {
            roomdata[i][1]--;
        }
    }
    return updatedArray;
}



module.exports = { disconnect };
