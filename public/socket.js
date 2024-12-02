window.onload = function() {
    const socket = io("http://localhost:7000"); // Connect to the server

    // Send a message to the server
    socket.emit('message', 'Hello from client!');

    // Listen for a response from the server
    socket.on('response', (data) => {
      console.log('Server says: ' + data);
    });
  }
