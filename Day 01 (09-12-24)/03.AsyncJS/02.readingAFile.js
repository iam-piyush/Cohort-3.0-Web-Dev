const fs = require("fs"); // here we have imported a library called fs, in which the code is written to read a file, and we are just using that code.

console.log(fs);

let contents = fs.readFileSync("example.txt", "utf-8"); // readFileSync() is a method defined in fs object,  readFileSync means, read the file synchronously. utf-8, means encoding

console.log(contents)