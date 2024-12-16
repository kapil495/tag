function addPlayer(updatedText , index) {
    // Select all the smaller boxes inside the large box
    const smallerBoxes = document.getElementsByClassName('slot');
    if (index >= 0 && index < smallerBoxes.length) {
        smallerBoxes[index].textContent = updatedText;
    } else {
        console.error(`Index ${index} is out of bounds!`);
    }
}
export { addPlayer }