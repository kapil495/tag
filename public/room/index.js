import { changeBackgroundImages } from "../room/helperFunctions/changeBackgroundImages.js"
import { preloadImages } from "../room/helperFunctions/preloadImages.js"
import { addDetailsToSmallBox } from "../room/helperFunctions/addDetailsToSmallBox.js";
import { addSlots } from "../room/helperFunctions/addSlots.js"
// Example image URLs (Replace these with your actual URLs)
const imageUrls = [
        '/assets/backgrounds/1/orig.png', 
        '/assets/backgrounds/2/orig.svg',
        '/assets/backgrounds/3/orig.svg'
];

// Preload the images and then start the background transition
preloadImages(imageUrls, 4000 ,changeBackgroundImages);
addDetailsToSmallBox("name" , "kapil" , "grey" , "140%")
addSlots(90,"white")