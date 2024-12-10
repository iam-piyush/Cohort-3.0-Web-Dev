/*

=>>> setTimeout() is an async function, which is used to perform a task after a delay in miliseconds.

Syntax of setTimeout() function.

setTimeout(callback, delay_in_miliseconds);

*/

let variable_1 = "Hello";

let variable_2 = "Hiiiiiiiiiiii";

function greet_delay(){
    console.log("Namaskar");
}

setTimeout(greet_delay, 10000); // In this line the greet_delay is called after 10 seconds. Means we are telling the JavaScript Engine, wait for 10 seconds then call the greet_delay

// setTimeout(variable_2, 130000); // This will give error, that callback argument must a function.