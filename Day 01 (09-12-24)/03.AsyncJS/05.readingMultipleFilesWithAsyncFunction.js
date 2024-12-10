const fs = require("fs");

function printOuput(err, data){
    return !err ? console.log(data) : console.log("File not found");
}

fs.readFile("example.txt", "utf-8", printOuput); // here printOuput is an funtional argument, passed in the readFile funtion. Means when the readFile function is done with the reading the file, then readFile function will call back the printOutput function, and pass some arguments like err, data to printOutput funtion.

fs.readFile("anotherExample.txt", "utf-8", printOuput);

console.log("Done!");