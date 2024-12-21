import { addAllPlayers } from "./helperFunctions/addAllPlayers.js";
import { addPlayer } from "./helperFunctions/addPlayer.js";
import { addServerInformation } from "./helperFunctions/addServerInformation.js"
import { addSlots } from "./helperFunctions/addSlots.js";
const playerName = localStorage.getItem("playerName")
const playerId = localStorage.getItem("playerId")
const socket = io("http://localhost:7000"); // Connect to the server
const roomName = window.location.pathname.split("/")[ window.location.pathname.split("/").length -1 ]
// Send a message to the server
socket.emit('connection', { playerName : playerName , roomName : roomName });
socket.emit("giveRoomServerInformation") //ask for serve information and dispaly it
socket.emit('giveMyInformation') //ask for my information. may be used in future but currentl no use
socket.emit('inRoomPlayers' , { roomName : roomName } ) //ask for players in the room before him/her

socket.on("inRoomPlayers" , (allplayers) =>{ addAllPlayers(allplayers) }) //display the inroom players. response like this [ [player1 , seatnumnber] , [player2, seatnumber] , [player3, seatnumber] , ......]
socket.on('myInformation', (data) => {console.log(data)}); //no use but may be in future. response like this { playerId , playerName , roomName }
socket.on("roomServerInformation" , (roomServerInformation)=>{ addServerInformation(roomServerInformation) ;addSlots(roomServerInformation.maxPlayers , "#ccc9c9") })//  will display the server information sended by the server
socket.on('playerJoin' , ({playerName , seatNumber})=>{ addPlayer(playerName , seatNumber) }) //will add new player . reponse like this { playername , seatNumber }
socket.on('response', (data) => { console.log(data) }) //response is you havae joined the room
socket.on("updateAllPlayers" , (allPlayers)=>{ addAllPlayers( allPlayers )} ) //whenevr someone leaves or disconnectes from the server send thsi event. response like this [ [player1 , seatnumnber] , [player2, seatnumber] , [player3, seatnumber] , ......]