// Function to add details to the small box with customizable color and text size
function addDetailsToSmallBox(name, detail, color = 'black', fontSize = '100%') {
    // Select the small box
    const smallBox = document.querySelector('.center-box.small');
    
    // Create the content to be added (you can customize this as needed)
    const nameElement = document.createElement('h3');
    nameElement.textContent = name; // Set the name
    nameElement.style.color = color; // Apply the color
    nameElement.style.fontSize = fontSize; // Apply the font size

    const detailElement = document.createElement('p');
    detailElement.textContent = detail; // Set the detail
    detailElement.style.color = color; // Apply the color
    detailElement.style.fontSize = fontSize; // Apply the font size
    detailElement.style.paddingLeft = "6%"

    // Append the elements to the small box
    smallBox.appendChild(nameElement);
    smallBox.appendChild(detailElement);
}

export { addDetailsToSmallBox };
