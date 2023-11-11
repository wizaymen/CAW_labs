const fs = require('fs');

// Get the filename from the command line arguments
const filename = process.argv[2];

// Check if a filename is provided
if (!filename) {
    console.error('Please provide a filename as a command line argument.');
    process.exit(1);
}

// Read the file asynchronously
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err.message}`);
        process.exit(1);
    }

    // Display the file contents
    console.log(data);
});
