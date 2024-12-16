function fade(elementsToFade) {
    elementsToFade.forEach(element => {
        element.classList.add("fade"); // Add fade class for 1s effect
    });
}

function hide(elementsToHide) {
    elementsToHide.forEach(element => {
        element.classList.add("hide"); 
    });
}

function removeHide(elementsToNonHide) {
    elementsToNonHide.forEach(element => {
        element.classList.remove("hide"); // Remove hide class
        element.classList.remove("fade"); // Ensure fade is removed
    });
}

function textNonFade(textElementsToNonFade){
    textElementsToNonFade.forEach(element => {
        element.classList.add("textNonFade");
    })
}

function inputNonFade(inputElementsToNonFade) {
    inputElementsToNonFade.forEach(element => {
        element.classList.add("inputNonFade"); // Add fade-in effect for inputs
    });
}

function boxNonFade(boxElementsToNonFade) {
    boxElementsToNonFade.forEach(element => {
        element.classList.add("boxNonFade"); // Add fade-in effect for boxes
    });
}

function removeInputNonFade(inputElementsToFade){
    inputElementsToFade.forEach(element => {
        element.classList.remove("inputNonFade");
    })
}

function removeBoxNonFade(boxElementsToFade){
    boxElementsToFade.forEach(element => {
        element.classList.remove("boxNonFade");
    })
}

function removeTextNonFade(textElementstoFade){
    textElementstoFade.forEach(element => {
        element.classList.remove("textNonFade");
    })
}
export { fade , hide , removeHide , textNonFade ,inputNonFade , boxNonFade , removeBoxNonFade , removeInputNonFade , removeTextNonFade}