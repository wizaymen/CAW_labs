// fileImport.js

// Import the mean function from notation.js
const { mean } = require('./notation');

// Example usage
const scores = [85, 90, 78, 92, 88];

// Calculate the mean using the imported function
const averageScore = mean(scores);

// Display the result
if (averageScore !== null) {
    console.log(`Average Score: ${averageScore}`);
}

