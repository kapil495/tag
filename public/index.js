import { changeBackgroundImages } from "/room/helperFunctions/changeBackgroundImages.js";
import { preloadImages } from "/room/helperFunctions/preloadImages.js";
import { addVignetee } from "/room/helperFunctions/addVignetee.js";

import { joinRoomHandle } from "/helperFunctions/joinRoomHandle.js";
import { makeRoomHandle } from "/helperFunctions/makeRoomHandle.js"
import { shiftToJoinRoomHandle } from "./helperFunctions/shiftToJoinRoom.js";
import { shiftToMakeRoomHandle } from "./helperFunctions/shiftToMakeRoom.js";

// Initialize effects and preload images
addVignetee(0.4, 0.8);
preloadImages(
    [
        "/assets/backgrounds/1/orig.svg",
        "/assets/backgrounds/2/orig.svg",
        "/assets/backgrounds/3/orig.svg",
        "/assets/backgrounds/4/orig.svg"
    ],
    3000,
    changeBackgroundImages
);
joinRoomHandle()
makeRoomHandle()
shiftToJoinRoomHandle()
shiftToMakeRoomHandle()