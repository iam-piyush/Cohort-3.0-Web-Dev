const fs = require("fs");

fs.readFile("example.txt", "utf-8", contents_of_example);

fs.readFile("example2.txt", "utf-8", contents_of_example2);

function contents_of_example(err, data){
    console.log((!err) ? data : err);
}

function contents_of_example2(err, data){
    console.log((!err) ? data : err);
}

// console.log(contents_of_example()); here the output will be undefined, because we are invoking the function directly, and in JavaScript the code will executed how it is called, not how it is written, thats why the function contents_of_example() directly invoked and err, data params are undefined.