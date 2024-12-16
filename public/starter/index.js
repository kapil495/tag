document.addEventListener("DOMContentLoaded", () => {
    const makeRoomBtn = document.getElementById("makeRoomBtn");
    const joinRoomBtn = document.getElementById("joinRoomBtn");
    const makeRoomDiv = document.getElementById("makeRoom");
    const joinRoomDiv = document.getElementById("joinRoom");
    const sendToServerBtn = document.getElementById("sendToServer");
    const joinRoomSubmitBtn = document.getElementById("joinRoomSubmit");
    const roomCodeInput = document.getElementById("roomCode");

    // Show Make Room Section
    makeRoomBtn.addEventListener("click", () => {
        makeRoomDiv.classList.remove("hidden");
        joinRoomDiv.classList.add("hidden");
    });

    // Show Join Room Section
    joinRoomBtn.addEventListener("click", () => {
        joinRoomDiv.classList.remove("hidden");
        makeRoomDiv.classList.add("hidden");
    });

    // Send Request to Server for Make Room
    sendToServerBtn.addEventListener("click", () => {
        
    });

    // Submit Room Code to Join Room
    joinRoomSubmitBtn.addEventListener("click", () => {
        const roomCode = roomCodeInput.value;
        fetch("/makeRoom", {
            method: "POST",
        })
            .then(response => response.json())
            .then(data => {
                console.log(`Room created${data.roomId}`);
                window.location = `/room/${data.roomId}`;
            })
            .catch(error => {
                console.error("Error creating room:", error);
            });
        fetch(`/room/${roomCode}/verify`, {
            method: "POST",
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location = `/room/${roomCode}`;
                } else {
                    alert("Failed to join room: " + data.message);
                }
            })
            .catch(error => {
                console.error("Error joining room:", error);
            });
    });
});
