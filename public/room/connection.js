import { addAllPlayers } from "./helperFunctions/addAllPlayers.js";
import { addPlayer } from "./helperFunctions/addPlayer.js";

const playerName = localStorage.getItem("playerName")
const playerId = localStorage.getItem("playerId")
const socket = io("http://localhost:7000"); // Connect to the server
const roomId = window.location.pathname.split("/")[ window.location.pathname.split("/").length -1 ]
// Send a message to the server
socket.emit('connection', { playerName : playerName , roomId : roomId });
socket.on('response', (data) => {
    console.log( data);
});
//ask for currently in room player . may be possible there were player befor that are joined
socket.emit('inRoomPlayers' , { roomId : roomId } )
socket.on("inRoomPlayers" , (allplayers) =>{
    console.log(allplayers);
    addAllPlayers(allplayers);
})

//whenevr a new player joines it will be added in slot or box
socket.on('playerJoin' , ({playerName , seatNumber})=>{
    addPlayer(playerName , seatNumber)
})
//whenevr someone leaves or disconnectes from the server send thsi event
socket.on("updateAllPlayers" , (allPlayers)=>{
    addAllPlayers(allPlayers)
    console.log(allPlayers);
    
})