const { getRoomData , changeRoomData} = require("./connection.js"); // Assuming this fetches room data based on roomId
let roomId , disconnectedPlayerName , roomData , disconnectedPlayerSeatNumber;
function disconnect(io, socket) {
    try {
        // Check if custom data exists on the socket
        if (!socket.customData) {
          throw new Error('Socket custom data is missing');
        }

        disconnectedPlayerName = socket.customData.playerName;
        disconnectedPlayerSeatNumber = socket.customData.seatNumber;
        roomId = socket.customData.roomId;

        // Fetch the current room data
        roomData = getRoomData(roomId);

        // Modify the room data to remove the disconnected player
        roomData = newUpdatedRoomData(roomData , [disconnectedPlayerName , disconnectedPlayerSeatNumber])
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
function newUpdatedRoomData(roomdata, disconnectedPlayer) {
    // Find the index of the player that disconnected
    const [disconnectedName, disconnectedSeat] = disconnectedPlayer;
    
    // Remove the disconnected player
    let updatedArray = roomdata.filter(([name, seat]) => (name !== disconnectedName) && (disconnectedSeat !== seat));

    // Adjust seat numbers of players with a seat number greater than the disconnected player's seat number
    for (let i = 0; i < roomdata.length; i++) {
        if (roomdata[i][1] > disconnectedSeat) {
            roomdata[i][1]--;
        }
    }
    return updatedArray;
}



module.exports = { disconnect };
