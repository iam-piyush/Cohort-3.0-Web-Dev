

function sumFuntion(a, b){ // here a, b are called parameter or we can say params.
    let sum = a + b;
    return sum;
    console.log("Hello"); // any code written after the return statement will never be executed.
}

console.log(sumFuntion(20, 87)); // here 20, 87 are called as arguments

console.log(sumFuntion(29)); // output would be NaN (Not a Number) because we only passed argument to a, which is 29, but b is undefined


let helloFn = function greet(name){ // here we have declared a function in a variable.
    return "Hello " + name;
}

console.log(helloFn("Piyush"));

// console.log(greet("Piyush"));  // this will give error