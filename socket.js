require("dotenv").config({path : "./environmentVariables/socket.env"})

const { join } = require("path");
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server , {
  cors : {
      origin : process.env.origin,
      methods : (process.env.methods).split(",")
  }
});


//event for socket to be here
const { connection } = require("./helperFunctions/socket/ioEvents/connection")
const { disconnect } = require("./helperFunctions/socket/ioEvents/disconnect")
const { inRoomPlayers } = require("./helperFunctions/socket/ioEvents/inRoomPlayers")
const { giveMyInformation } = require("./helperFunctions/socket/socketEvents/giveMyInformation")

// Initialize Socket.IO on the server
console.log(giveMyInformation);

// Listen for a connection event from clients
io.on('connection', (socket) => {
  socket.on('connection' , (response)=>{ connection(io , socket , response ) })
  socket.on('inRoomPlayers', (response)=>{ inRoomPlayers(io , socket , response ) })
  socket.on('disconnect', () => { disconnect( io , socket) });
  socket.on('giveMyInformation',() => { giveMyInformation(io , socket) });
});

// Start the server
server.listen(process.env.PORT, () => {
  console.log(`Socket is running on http://localhost:${process.env.PORT}`);
});
