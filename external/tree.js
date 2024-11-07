const fs = require('fs');
const path = require('path');

function getAllPathsSync(dir) {
    let results = [];

    // Read directory contents
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            // If the file is a directory, recursively get its paths
            results = results.concat(getAllPathsSync(filePath));
        } else {
            // Otherwise, push the file path to results
            results.push(filePath);
        }
    }
    for (let i = 0; i < results.length; i++) {
        results[i] = results.replace(/\\/g, '/');
    }
    return results;
}

// Usage
const directoryPath = './assets'; // Replace with your directory path
try {
    const paths = getAllPathsSync(directoryPath);
    console.log('All file paths:', paths);
} catch (err) {
    console.error('Error reading directory:', err);
}
