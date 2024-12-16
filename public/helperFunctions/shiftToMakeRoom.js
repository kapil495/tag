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
    ...makeRoomElements,
    ...makeInputs,
    ...makeRoomForms,
    ...makeRoomText,
    ...shiftToJoinRoom
];

function shiftToMakeRoomHandle() {
    window.makeRoom = 1
    window.joinRoom = 0
    // Add event listeners to all joinRoom elements
    shiftToMakeRoom.forEach(Element => {
        Element.addEventListener("click", () => {
            removeTextNonFade(joinRoomText)
            removeBoxNonFade(allElements)
            removeInputNonFade(makeInputs)
            // Step 1: Fade out all elements
            fade(allElements);
            // Step 2: Hide all elements after fade-out is complete
            setTimeout(() => {
                hide(allElements); // Add hide class
                removeHide(allElementsToShow); // Remove hide class for relevant elements
                
                // Step 3: Show necessary elements with fade-in effect
                textNonFade(makeRoomText) //Add textNonfade class
                inputNonFade(makeInputs); // Add inputNonFade class
                boxNonFade([...makeRoomElements , ...shiftToJoinRoom]); // Add boxNonFade class
            }, 1000); // 1-second delay to match fade-out duration
        });
    });
}


export { shiftToMakeRoomHandle };
