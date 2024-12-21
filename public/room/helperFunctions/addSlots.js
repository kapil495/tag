// Function to add dynamic CSS for smaller boxes inside the large box
function addDynamicCSSForSmallerBoxes(color) {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Styles for smaller boxes inside the large box */
        .smaller-box {
            width: 43%; /* Width of 40% of the container */
            min-height: 10%; /* Height of 10% of the container */
            background-color: rgba(0, 0, 0, 0.3); /* 30% transparency */
            padding: 10px;
            box-sizing: border-box; /* Ensure padding is inside the element */
            border-radius: 10px;
            display: inline-block;
            margin-right: 2%;
            margin-left:2%;
            margin-top:1.5%;
            text-align: center;
            color: ${color} /* Text color */
        }
        /* Layout for two smaller boxes in one horizontal line */
        .large-box-container {
            display: flex;
            flex-wrap: wrap; /* Allow wrapping of items */
            gap: 10px; /* Space between boxes */
            justify-content: center;
        }
    `;
    document.head.appendChild(style); // Add the style to the document head
}

// Function to create smaller boxes inside the large box
function addSlots(totalSlots , color) {
    const largeBox = document.querySelector('.center-box.large');
    
    // Ensure dynamic CSS is added before creating the boxes
    addDynamicCSSForSmallerBoxes(color);

    // Create container for smaller boxes
    const largeBoxContainer = document.createElement('div');
    largeBoxContainer.classList.add('large-box-container');

    // Loop to create the specified number of smaller boxes
    for (let i = 0; i < totalSlots; i++) {
        const smallerBox = document.createElement('div');
        smallerBox.classList.add('smaller-box');
        smallerBox.classList.add('slot')
        
        // Optionally, you can add content to each smaller box
        smallerBox.textContent = ``;
        
        // Append each smaller box to the container
        largeBoxContainer.appendChild(smallerBox);
    }

    // Append the container to the large box
    largeBox.appendChild(largeBoxContainer);
}

export {addSlots};