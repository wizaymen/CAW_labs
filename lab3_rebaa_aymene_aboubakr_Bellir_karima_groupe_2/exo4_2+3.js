const fs = require('fs');

// Get the filename and text from the command line arguments
const filename = process.argv[2];
const textToWrite = process.argv[3];

// Check if filename and text are provided
if (!filename || !textToWrite) {
    console.error('Please provide both a filename and text as command line arguments.');
    process.exit(1);
}

// Write the text to the specified file asynchronously
fs.writeFile(filename, textToWrite, 'utf8', (err) => {
    if (err) {
        console.error(`Error writing to the file: ${err.message}`);
        process.exit(1);
    }

    console.log('The file has been saved!');

    //read the file 
    fs.readFile(filename, 'utf8', (readErr, data) => {
        if (readErr) {
            console.error(`Error reading the file: ${readErr.message}`);
            process.exit(1);
        }

        console.log(`File Contents:\n${data}`);
    });
});
