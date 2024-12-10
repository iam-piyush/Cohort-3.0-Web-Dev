// Functions are block of codes, which is designed to perform a specific task.
// A function will only excutes, when it is invoked.

// Ways to invoke a function.

// 1. When an event occur(like when a user clicks a button)
// 2. Self Invoked (When a function is invoked automatically, like arrow functions)
// 3. Manually Invoked (When we call a function)

// Function name can start from a dollar sign, means all rules are like variable naming rules.

// A function can take any number of parameters(params), but we have to make sure that the arguements not exceed the paramater numbers. If number of arguments exceeded, then extra arguments are garbage values.


function $summation(a,b,c){
    return (a + b + c);
}

console.log($summation(2,3,4,5)); // 9, means 5 is become a garbage value


function anotherFunction(a,b,c,d){
    return (a+b+c+d);
}

console.log(anotherFunction(2,2,4)); // output will be NaN, because in a+b+c+d, the d is undefined


let aVaribaleFuntion = function myFuntion(a,b){
    return a + b;
}

// console.log(myFuntion(5,6)); // error, it says myFunction() is undefined

console.log(aVaribaleFuntion(5,6)); // 11, this will give the ouput, because we stored the myFunction() inside a variable.


// When a function reaches the return statement, then the function stops executing, and nothing will be executed after the return statement.