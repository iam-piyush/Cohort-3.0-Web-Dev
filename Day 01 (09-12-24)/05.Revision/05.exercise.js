console.log("Hello");

function greet_delay(){
    console.log("Hello, Thoda late");
}


function greeting(){
    console.log("Hello, Timing ka thoda her fer");
}

greeting();

setTimeout(greet_delay, 3000);

let ans = 0;

for (let i = 0; i <= 200; i++){
    ans = ans + (i  ** i);
}
console.log("The answer is: ", ans);

console.log("Hello there");


/*   Options are

   Hello                                           Hello
   Hello, Timing ka thoda her fer                  Hello, Timing ka thoda her fer
   The answer is:                                  Hello, Thoda late
   Hello there                                     The answer is:
   Hello, Thoda late                               Hello there

*/


// Even the setTimeout have to execute the greet_delay callback after 3 seonds, but our thread is busy in the loop, so even 3 second passed, first the ans will printed then the greet_delay executed. Means after 3 seconds the greet_delay() is pushed to the callback queue.

// When the ans get done, then the greet_delay() will be tranferred into the callstack by the eventloop.