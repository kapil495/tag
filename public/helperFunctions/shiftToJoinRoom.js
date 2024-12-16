import { fade , hide , removeHide , textNonFade ,inputNonFade , boxNonFade , removeBoxNonFade , removeInputNonFade , removeTextNonFade} from "./DOMmanupulation.js"
const joinRoomElements = Array.from(document.getElementsByClassName("joinRoom"));
const joinRoomText = Array.from(document.getElementsByClassName("joinRoomText"));
const joinRoomForms = Array.from(document.getElementsByClassName("joinRoomForm"));
const joinInputs = Array.from(document.getElementsByClassName("joinRoomInput"));
const shiftToMakeRoom = Array.from(document.getElementsByClassName("shiftToMakeRoom"));

const makeRoomElements = Array.from(document.getElementsByClassName("makeRoom"));
const makeRoomText = Array.from(document.getElementsByClassName("makeRoomText"));
const makeRoomForms = Array.from(document.getElementsByClassName("makeRoomForm"));
const makeInputs = Array.from(document.getElementsByClassName("makeRoomInput"));
const shiftToJoinRoom = Array.from(document.getElementsByClassName("shiftToJoinRoom"));
// Combine all elements into arrays for fade, hide, and show
const allElements = [
    ...joinRoomElements,
    ...joinRoomForms,
    ...joinInputs,
    ...joinRoomText,
    ...shiftToMakeRoom,

    ...makeRoomForms,
    ...makeRoomElements,
    ...makeInputs,
    ...makeRoomText,
    ...shiftToJoinRoom
];
const allElementsToShow = [
    ...joinRoomElements,
    ...joinInputs,
    ...joinRoomForms,
    ...joinRoomText,
    ...shiftToMakeRoom
];

function shiftToJoinRoomHandle() {
    window.joinRoom = 1
    window.makeRoom = 0
    // Add event listeners to all joinRoom elements
    shiftToJoinRoom.forEach(Element => {
        Element.addEventListener("click", () => {
            removeTextNonFade([...joinRoomText , ...makeRoomText])
            removeBoxNonFade(allElements)
            removeInputNonFade(joinInputs)
            // Step 1: Fade out all elements
            fade(allElements);
            // Step 2: Hide all elements after fade-out is complete
            setTimeout(() => {
                hide(allElements); // Add hide class
                removeHide(allElementsToShow); // Remove hide class for relevant elements
                
                // Step 3: Show necessary elements with fade-in effect
                textNonFade(joinRoomText) //Add textNonfade class
                inputNonFade(joinInputs); // Add inputNonFade class
                boxNonFade([...joinRoomElements , ...shiftToMakeRoom]); // Add boxNonFade class
            }, 1000); // 1-second delay to match fade-out duration
        });
    });
}


export { shiftToJoinRoomHandle };
