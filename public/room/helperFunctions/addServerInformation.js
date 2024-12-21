import { addDetailsToSmallBox } from "./addDetailsToSmallBox.js"

function addServerInformation(serverInformation){
    //expected server information [ [title1 , detail] , [title2 , detail] ,[title3 , detail] , .... ]
    let { hostName , mapName , maxPlayers , roomId , roomName } = serverInformation
    
    addDetailsToSmallBox("Map Name" , mapName , "grey" , "130%")
    addDetailsToSmallBox("Room name" , roomName , "grey" , "130%")
    addDetailsToSmallBox("Host Name" , hostName , "grey" , "130%")
    addDetailsToSmallBox("Max Players" , maxPlayers , "grey" , "130%")
    addDetailsToSmallBox("Room Id" , roomId , "grey" , "130%")
}
export { addServerInformation }