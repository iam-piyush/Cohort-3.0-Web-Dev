const fs = require("fs"); // fs stands for node file system module

let contents = fs.readFileSync("example.txt", "utf-8");

let anotheContents = fs.readFileSync("anotherExample.txt", "utf-8");

console.log(contents);
console.log(anotheContents);