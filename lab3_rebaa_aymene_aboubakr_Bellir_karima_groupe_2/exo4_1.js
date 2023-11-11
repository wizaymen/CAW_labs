//1-Create a file and add text to it

const fs = require('fs');


// Get the text from the command line arguments
const textToWrite = process.argv[2];

// Check if text is provided
if (!textToWrite) {
    console.error('Please provide the text as a command line argument.');
    process.exit(1);
}

// Write the text to a file asynchronously
fs.writeFile('f.txt', textToWrite, 'utf8', (err) => {
    if (err) {
        console.error(`Error writing to the file: ${err.message}`);
        process.exit(1);
    }

    console.log('The file has been saved!');
});





