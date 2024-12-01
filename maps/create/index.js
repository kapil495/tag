
const rowsSlider = document.getElementById('rows');
const colsSlider = document.getElementById('cols');
const rowsValue = document.getElementById('rowsValue');
const colsValue = document.getElementById('colsValue');
const table = document.getElementById('dynamicTable');
const imagePreview = document.getElementById('imagePreview');
const imageDataOutput = document.getElementById('imageDataOutput');

let images = [];  // Array to hold images and their names
// Function to convert table data into an array format with non-empty values and their positions
function getTableDataWithCoordinates() {
    const rows = table.rows;
    const tableData = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        for (let j = 0; j < row.cells.length; j++) {
            const input = row.cells[j].querySelector('input');
            const cellValue = input.value;

            // Only add non-empty cell values
            if (cellValue) {
                tableData.push([cellValue, i, j]);
            }
        }
    }

    return tableData;
}

// Example usage: log the transformed table data to console
function logTableDataWithCoordinates() {
    const tableData = getTableDataWithCoordinates();
    console.log(tableData);
}

// Example button to log the transformed table data (optional for HTML)
const logButton = document.createElement('button');
logButton.textContent = 'Log Table Data with Coordinates';
logButton.onclick = logTableDataWithCoordinates;
document.body.appendChild(logButton);   // Update the table based on slider values (unchanged)
function updateTable() {
    const rows = rowsSlider.value;
    const cols = colsSlider.value;

    rowsValue.textContent = rows;
    colsValue.textContent = cols;
    table.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            let input = document.createElement('input');
            input.type = 'text';
            input.placeholder = `R${i + 1}C${j + 1}`;
            cell.appendChild(input);
        }
    }
}

// Event listeners for sliders (unchanged)
rowsSlider.addEventListener('input', updateTable);
colsSlider.addEventListener('input', updateTable);
updateTable();

// Allow drag over for drop (unchanged)
function allowDrop(event) {
    event.preventDefault();
}

// Handle dropped images (unchanged)
function drop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;

    for (const file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;

                const nameInput = document.createElement('input');
                nameInput.type = 'text';
                nameInput.className = 'name-input';
                nameInput.maxLength = 1;

                nameInput.addEventListener('input', () => {
                    const name = nameInput.value.toUpperCase();
                    const imageObj = { imgSrc: img.src, name: name };
                    const index = images.findIndex(image => image.imgSrc === img.src);
                    if (index === -1) images.push(imageObj);
                    else images[index] = imageObj;
                });

                const imageContainer = document.createElement('div');
                imageContainer.appendChild(img);
                imageContainer.appendChild(nameInput);
                imagePreview.appendChild(imageContainer);
            };
            reader.readAsDataURL(file);
        }
    }
}

// Function to upload images
function uploadImages() {
    // Prepare image data for upload
    const imageData = images.map(image => ({
        name: image.name,
        base64: image.imgSrc
    }));

    // Send image data to the server
    fetch('/uploadImages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            images: imageData,
            loadData: getTableDataWithCoordinates(),
            length: table.rows.length,
            breadth: table.rows[0] ? table.rows[0].cells.length : 0
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Upload successful', data);
            alert('Images uploaded successfully!');
        })
        .catch(error => {
            console.error('Error uploading images:', error);
            alert('Error uploading images.');
        });
}
