let playerInformation;
function giveMyInformation(io, socket) {
    playerInformation = {
        playerId: socket.customData.playerId,
        playerName: socket.customData.playerName,
        roomId: socket.customData.roomId
    }
    { socket.emit("myInformation", playerInformation) }
}
module.exports = {giveMyInformation}