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


function joinRoomHandle() {
    // Add event listeners to all joinRoom elements
    joinRoomElements.forEach(Element => {
        Element.addEventListener("click", () => {
            if (window.joinRoom === 0 || window.joinRoom === undefined) {
            playAnimation()
            window.joinRoom = 1
        }else if (window.joinRoom === 1){
            joinRoom()
        }
        });
    });
}
function playAnimation(){
    {
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
    }
}
function joinRoom(){
    var playerName = joinInputs[0].value;
    var roomName = joinInputs[1].value;

    localStorage.setItem("playerName" , playerName)
    localStorage.setItem("roomName" , roomName)
    
    if ( (playerName === "" )|| ( roomName === "")){
        console.log("value are not given for either plpayer name Or room name");
    } else { sendRequestToJoinRoom(playerName , roomName)}
}
function sendRequestToJoinRoom(playerName , roomName){
    
    fetch("/room/" + roomName + "/verify", {
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({})
    }).then(()=>{
        window.location = "/room/" + roomName
    })
    .catch(error => {
            console.error("Error Joining the room . rooom has not been created");
        });
}

export { joinRoomHandle };
