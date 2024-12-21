// Function to add details to the small box with customizable color and text size
function addDetailsToSmallBox(name, detail, color = 'black', fontSize = '100%') {
    // Select the small box
    const smallBox = document.querySelector('.center-box.small');
    const holder = document.createElement('div');
    const hr = document.createElement('hr')
    // Create the content to be added (you can customize this as needed)
    const nameElement = document.createElement('h3');
    nameElement.textContent = name; // Set the name
    nameElement.style.color = "#ccc9c9"; // Apply the color
    nameElement.style.fontSize = fontSize; // Apply the font size

    const detailElement = document.createElement('p');
    detailElement.classList.add("detail")
    detailElement.style.color = "#989191"
    detailElement.textContent = detail; // Set the detail
    detailElement.style.fontSize = fontSize; // Apply the font size

    // Append the elements to the small box
    holder.appendChild(nameElement);
    holder.appendChild(detailElement);
    holder.appendChild(hr)
    smallBox.appendChild(holder)
}

export { addDetailsToSmallBox };
