/* 

=>>> In synchronous code, the interpreter will excute the code line by line, means thread excecute the line 1, then goes to line 2, etc. But suppose we have loop in 4th line, then the complete loop will be executed first then the interpreter will go to the next lines, untill the code below the loop is untouched, this is called synchronous JavaScript code execution.

=>>> JavaScript is indeed a synchrounous language, means we have only one thread, and it can perform one task at a time. But there are some ways to make our JavaScript asynchronous. In ansynchronous code execution, the thread will not wait for a perticular to done, then go to next next task. Nope, in asynchronous execution, the interpreter start the async task, and go to next lines.

=>>> Suppose, we have three tasks, first is boiling water, second is doing some laundry, and third one is sending a parcel to the padosi ghar. 

    =>> Now there are three ways to do this,

    ************************************************** Way No. 1 **************************************************

    1. First of all, I put the bowl filled with water on the gas, and wait untill the job gets done, means untill the water boils.
    2. After boiling water go to laundry, and put the clothes inside the washing machine and wait untill the job gets done.
    3. Then I will go to delivery the parcel to the padosi ghar.

    =>> Now, we can see that the task one(boiling water) and second (doing laundry) is not CPU bounded tasks, means one they are initiated they does not require CPU continously, in simple word when we put the bowl on the gas or put the clothes inside the washing machine, then the job is depended on the another external hardware(like gas, and washing machine), so we can see that waiting untill the job gets is a waste of time. This is called as synchronous execution.
    
    ==> In synchrounous execution, the next task will wait untill the prevoious task gets done.

    ***************************************************************************************************************


    ************************************************** Way No. 2 **************************************************

    1. First I put the bowl on the gas(turn on the gas)
    2. Then I go to laundry and put the clothes in the washing machine(turn on the washing machine).
    3. Then I will go to deliver the parcel.

    =>> Now, I can make context switching between them, like parcel is delivered(this task is CPU bounded, means we have to it, because we have to walk continously). Then go and check the water condition, then go and check the clothes condition, etc.

    ***************************************************************************************************************


    ************************************************** Way No. 3 **************************************************

    I will start all the task simulteneously, then the one which gets done first will be entertained first. Means I will not wait to do the next task, before the previoss get done. This is called asynchronous code execution. This is the most effective way.

    ***************************************************************************************************************



=>>> There are some I/O (Input-Output) bounded tasks like, reading a file from the disk, server, database, etc. These requires significant amount of time, so we have to make then async, because we will no wait for them to be done, we will keep execution our next cline of code.

=>>> To read a file externally(means out of the code file) we require a module "fs" which stands for Node JS File System module. It is an inbuilt module in the Node JS.


*/


// Lets make an example.txt with some random text and try to read it, and print the output on the console.

const fs = require("fs");

let contents_in_example_file = fs.readFileSync("example.txt", "utf-8");

console.log(contents_in_example_file);

// Here have used a method(a function insside the fs object) called readFileSync(), which means read the file asynchronously. This method takes two arguments, one is the file path, and second one is encoding. File path is mendatory, but if do not set the encoding then the output is not readable by human.


// Lets make an another example2.txt file with some random text, and try to read the content and print on the console.

fs.readFile("example2.txt", "utf-8", after_reading_file);

function after_reading_file(err, data){
    console.log((!err) ? data : err);
}


// Here we have used another method readFile(), this is an async method of reading file, it takes three arguments, first is the filepath, second is the encoding, and third one is after reading the file what to do(this is called as callback), if we do not give the what to do argument then nothing gets printed, means we can say that when the job gets done, we have to entertain it, in simple words if water is boiled then we have to turn off the gas and remove the bowl from the gas.

// readFile() function return two things, first one is err (error, means is there any error while reading this file, like any error, filepath not correct, etc). And the second thing is the data (It is the actual data read from the file).

// If there is err, then data is undefined
// If there is data, then err is null
// The typeof(data) is String
// the typeof(err) is object
// The default flag of readFile() funtion is 'r'

// err, data is passed an arguments to the after_reading_file function.
// after_reading_file() is an error first function.

// ******** In JavaScript callback argument must a function **********

