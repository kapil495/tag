require("dotenv").config({path : "./environmentVariables/socket.env"})

const { join } = require("path");

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();

// Create an HTTP server using the express app
const server = http.createServer(app);

// Initialize Socket.IO on the server
const io = socketIo(server , {
    cors : {
        origin : process.env.origin,
        methods : (process.env.methods).split(",")
    }
});

// Listen for a connection event from clients
io.on('connection', (socket) => {
  console.log('a user connected');
  
  // Listen for 'message' events sent from the client
  socket.on('message', (data) => {
    console.log('Received message: ' + data);
    
    // Send a response back to the client
    socket.emit('response', 'Message received!');
  });

  // Handle client disconnect event
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
// Start the server
server.listen(process.env.PORT, () => {
  console.log(`Socket is running on http://localhost:${process.env.PORT}`);
});
