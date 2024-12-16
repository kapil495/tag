function preloadImages(imageUrls, timeInterval,callback) {
    const images = [];
    let loadedCount = 0;
    
    imageUrls.forEach((url, index) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            images[index] = img;  // Store the loaded image
            loadedCount++;

            if (loadedCount === imageUrls.length) {
                callback(images , timeInterval); // All images are loaded, call the callback
            }
        };
        img.onerror = () => {
            console.error(`Failed to load image at ${url}`);
            loadedCount++;
            if (loadedCount === imageUrls.length) {
                callback(images);
            }
        };
    });
}
export {preloadImages}