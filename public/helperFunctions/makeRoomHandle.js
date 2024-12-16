import { fade, hide, removeHide, textNonFade, inputNonFade, boxNonFade, removeBoxNonFade, removeInputNonFade, removeTextNonFade } from "./DOMmanupulation.js"
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

function makeRoomHandle() {


    // Add event listeners to all joinRoom elements
    makeRoomElements.forEach(Element => {
        Element.addEventListener("click", () => {
            console.log(window.makeRoom);
            
            if ( window.makeRoom === undefined || window.makeRoom === 1 ) {
                playAnimation()
                window.makeRoom = 0
            }
            else if(window.makeRoom === 0){
                makeRoom()
            }
        });
    });
}
function playAnimation() {
    removeTextNonFade(makeRoomText)
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
        boxNonFade([...makeRoomElements, ...shiftToJoinRoom]); // Add boxNonFade class
    }, 1000); // 1-second delay to match fade-out duration
}

function makeRoom(){
    var playerName = makeInputs[0].value;
    var roomName = makeInputs[1].value;
    
    localStorage.setItem("playerName" , playerName)
    localStorage.setItem("roomName" , roomName)
    
    if ( (playerName === "" )|| ( roomName === "")){
        console.log("value are not given for either plpayer name Or room name");
    } else { sendRequestToMakeRoom(playerName , roomName)}
}
function sendRequestToMakeRoom(playerName , roomName){
    
    fetch("/makeRoom", {
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            playerName : playerName,
            roomName : roomName
        })
    }).then(()=>{
        window.location = "/room/" + roomName
    })
    .catch(error => {
            console.error("Error creating room:", error);
        });
}

export { makeRoomHandle };
