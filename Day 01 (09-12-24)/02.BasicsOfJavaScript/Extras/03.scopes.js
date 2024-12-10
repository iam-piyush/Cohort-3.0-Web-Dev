// block scope

// suppose a variable is defiend inside a block

/*

     {

     let aVariable;
     
     // here anyone can access this variable, inside this block only.

     }

*/


// Example

function marryChristmas(number){
    let name = "Ritika Bhatia"; // here we can also say that the name variable is a local varible for marryChristmas() function. We can also say it as in functional scope.
    for(let i = 1; i <= number; i++){
        console.log(`Marry Christmas ${name}`);
    }
}

// console.log(name); // error, name is not defined, because name variable is in functional scope.

marryChristmas(20);  // this will print 20 times Marry Christmas Ritika Bhaita. Here undefined is not printed because we are just invoking the funtion.

console.log(marryChristmas(20)); /* this will print 20 times Marry Christmas Ritika Bhaita, and then undefined is printed, 
because we are also console.log() the function which return something, in this case we have not used any return keyword, or if 
we only write return; then also it will return undefined. Note that here the function is only invoked once not 20 times, 20 times the loop will run. */


// If we not use any keyword with a varible, then that variable is always in the global scope, and it can be accessed in the whole code.

// When we use var keyword with a varibale, then that varibale is always in the global scope.