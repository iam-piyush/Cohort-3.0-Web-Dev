console.log("I am here instantly");

function greet(){
    console.log("I am here after 10 seconds.");
}

setTimeout(greet, 10000);

console.log("I am second one");


console.log("/*************** Another Exmaple ***************/");

function anotherGreet(){
    console.log("Namaste");
}

setTimeout(anotherGreet, 2000);

let sum = 0;

for (let i = 0; i <= 100000; i++){
    sum += i;
}

console.log("The heavy sum is calculated", sum);


// outputs are

// I am here instantly
// I am second one
// /*************** Another Exmaple ***************/
// The heavy sum is calculated 5000050000
// Namaste
// I am here after 10 seconds.



// Remember that JavaScript is single threaded, and the thread is busy in the loop, even if the setTimeout is completed, first the output of the loop will printed then the setTimeout output will printed.
