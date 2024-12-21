let playerInformation;
function giveMyInformation(io, socket) {
    playerInformation = {
        playerId: socket.customData.playerId,
        playerName: socket.customData.playerName,
        roomName: socket.customData.roomName
    }
    { socket.emit("myInformation", playerInformation) }
}
module.exports = {giveMyInformation}