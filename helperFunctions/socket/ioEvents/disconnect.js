const { getRoomData , changeRoomData} = require("./connection.js"); // Assuming this fetches room data based on roomId
let roomId , disconnectedPlayerName , roomData ; 
function disconnect(io, socket) {
    try {
        // Check if custom data exists on the socket
        if (!socket.customData) {
          throw new Error('Socket custom data is missing');
        }

        disconnectedPlayerName = socket.customData.playerName;
        roomId = socket.customData.roomId;

        // Fetch the current room data
        roomData = getRoomData(roomId);

        // Modify the room data to remove the disconnected player
        roomData = roomData.map(([playerName, seatNumber]) => { 
            // If the player matches the disconnected player, set their name to an empty string
            if (playerName === disconnectedPlayerName) {
                return ["", seatNumber]; // Clear the player name but retain the seat number
            }
            return [playerName, seatNumber]; // Return unchanged player data
        });
        //changes must be felected in actual room data present in connection.js
        changeRoomData(roomId,roomData)
        // Emit updated room data to all players in the room
        io.to(roomId).emit("updateAllPlayers", roomData);

        console.log(`Player ${disconnectedPlayerName} disconnected from room ${roomId}`);
    } catch (error) {
        console.error('Error handling disconnection:', error);
    }
}

module.exports = { disconnect };
