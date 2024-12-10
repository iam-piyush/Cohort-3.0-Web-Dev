// Functional Arguments means passing a function as an argument to another function.

function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}


function perform(a, b, action){
   return action(a, b);
}

console.log(perform(5, 90, sum));  // here action(a, b) become sum(a, b)

console.log(perform(5, 90, subtract)); // here action(a, b) become subtract(a, b)

console.log(perform(5, 90, divide)); // here action(a, b) become divide(a, b)

console.log(perform(5, 90, multiply)); // here action(a, b) become multiply(a, b)
