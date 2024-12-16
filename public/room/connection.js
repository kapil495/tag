import { addAllPlayers } from "./helperFunctions/addAllPlayers.js";
import { addPlayer } from "./helperFunctions/addPlayer.js";

const playerName = localStorage.getItem("playerName")
const socket = io("http://localhost:7000"); // Connect to the server
const roomId = window.location.pathname.split("/")[ window.location.pathname.split("/").length -1 ]
// Send a message to the server
socket.emit('connection', { playerName : playerName , roomId : roomId });
socket.emit('inRoomPlayers' , { roomId : roomId } )
socket.on("inRoomPlayers" , (allplayers) =>{
    console.log(allplayers);
    addAllPlayers(allplayers);
})
socket.on('response', (data) => {
    console.log( data);
});
socket.on('playerJoin' , ({playerName , seatNumber})=>{
    addPlayer(playerName , seatNumber)
})
//whenevr a player disconnectes server send thsi event
socket.on("updateAllPlayers" , (allPlayers)=>{
    addAllPlayers(allPlayers)
    console.log(allPlayers);
    
})