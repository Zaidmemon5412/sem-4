const path = require("path");

// 1. __dirname (current folder path)
console.log("Current Directory:", __dirname);

// 2. __filename (current file path)
console.log("Current File:", __filename);

// 3. join() → path combine karta hai
const filePath = path.join(__dirname, "folder", "file.txt");
console.log("Joined Path:", filePath);

// 4. basename() → file name nikalta hai
console.log("Base Name:", path.basename(filePath));

// 5. dirname() → folder path nikalta hai
console.log("Dir Name:", path.dirname(filePath));

// 6. extname() → extension nikalta hai
console.log("Extension:", path.extname(filePath));

// 7. parse() → pura breakdown deta hai
const details = path.parse(filePath);
console.log("Parsed Object:", details);

// 8. format() → parse ka reverse
const newPath = path.format(details);
console.log("Formatted Path:", newPath);

// 9. isAbsolute() → check absolute path
console.log("Is Absolute:", path.isAbsolute(filePath));

// 10. normalize() → extra slashes fix karta hai
const weirdPath = "folder//subfolder///file.txt";
console.log("Normalized:", path.normalize(weirdPath));