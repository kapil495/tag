export function changeBackgroundImages(images, timeInterval) {
    let currentIndex = 0;

    // Function to change the background every specified timeInterval
    setInterval(() => {
        const imageUrl = images[currentIndex].src;

        // Set the background image with zoom and faster movement
        document.body.style.transition = `background-image 0.5s ease-in-out, background-position 1.5s ease-in-out, transform 1.5s ease-in-out`; // Shorter transition time
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = '130%'; // Zoom the background by 30%

        // Increase the range of random movement for X and Y axes
        const randomX = Math.floor(Math.random() * 60) - 30; // Random value between -30% and 30%
        const randomY = Math.floor(Math.random() * 60) - 30; // Random value between -30% and 30%

        document.body.style.backgroundPosition = `${50 + randomX}% ${50 + randomY}%`; // Move the background more dynamically

        // Update the index to the next image, looping back to the start if necessary
        currentIndex = (currentIndex + 1) % images.length;
    }, timeInterval); // Use the provided timeInterval
}
