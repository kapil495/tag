import { addPlayer } from './addPlayer.js';
let playerName , seatNumber;
function addAllPlayers(playerList){
    // expected list   [ ["playername 1" , seatNumber]  , ["player name 2 " , seatnumber], ........]
    playerList.forEach((player) => {
        playerName = player[0]
        seatNumber = player[1]

        addPlayer(playerName , seatNumber)
    });
}
export {addAllPlayers}