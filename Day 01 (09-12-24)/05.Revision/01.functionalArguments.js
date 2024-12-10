/*

=>>> Functional arguments means when a function is passed in another function as argument.

*/


// Example of functional argument.

function sum(a,b){
    return (a + b);
}

function subtract(a,b){
    return (a - b);
}

function multiply(a,b){
    return (a * b);
}

function divide(a,b){
    return (a / b);
}

function power(a,b){
    return (a ** b);
}

function do_some_operation(x,y,operation){
    return operation(x,y);
}

console.log(do_some_operation(10,9,sum));  // here are passing a function as an argument to another function. Not that here we are not invoking the sum function, we are just giving three arguments to the do_some_operatio() function as varible. sum is indeed a function. Here we can say that sum is a callback for the do_some_operation.

/*

When we pass the sum as argument is do_some_operation() function, then the structure of do_some_operation() is like

function do_some_operation(10,9,sum){
    return sum(10,9); here, we can see that the sum function is automatically invoked with the given arguments.
}

*/

console.log(do_some_operation(2312,839,subtract));
console.log(do_some_operation(233,785,divide));



// ************************************************** Another Example **************************************************

function first_name(x, y, z, operation){
    return operation(x, y, z, last_name);
}


function last_name(x, y, z, operation){
    return operation(x, y, z, age);
}


function age(x, y, z, operation){
    return operation(x, y, z, full_name_with_age);
}

function full_name_with_age(first_name, last_name, age){
    return `Hello, ${first_name} ${last_name}. Your age is ${age}`;
}


function construct_full_name_and_age(a, b, c, operation){
    return (operation(a, b, c, operation));
}

console.log(construct_full_name_and_age("Piyush", "Kumar", 21, last_name));