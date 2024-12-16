function startConnection(message) {
    const socket = io("http://localhost:7000"); // Connect to the server

    // Send a message to the server
    socket.emit('message', message);

    socket.on('response', (data) => {
      console.log('Server says: ' + data);
    });
}
export {startConnection }