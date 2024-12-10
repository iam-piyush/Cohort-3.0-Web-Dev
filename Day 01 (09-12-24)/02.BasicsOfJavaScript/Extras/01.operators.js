// Arithmetic Operators

console.log(2 + 3); // 5
console.log(2 - 3); // -1
console.log(2 / 3); // 0.666666....
console.log(3 % 2); // 1, remainder or modulo operator
console.log(3 ** 2); // 9, exponent operator

// Unary Operators (means when operand is one)

let a = 5;
let b = a++; // post increment
console.log(b); // 5, means first a = 5 is asigned to b, and then a is incremented by one

let c = ++a; // pre increment
console.log(c); // 7, means first a is incremented, and then assigned to c.

let d = a--; // post decrement
console.log(d) // 7, means first a is assigned to d then decremented.

let e = --a;
console.log(e); // 5, means first a is decremented then assigned to e


// Comparison Operators, these operators will give true or false output.

console.log( 2 >= 3 ); // false
console.log( 2 <= 3 ); // true
console.log( 2 == "2" ); // true
console.log ( 2 === "2" ) // false
console.log("Hello" + 5); // Hello5
console.log(5 + "Hello"); // 5Hello
console.log(5 + "Hello5"); // 5Hello5
console.log(5 + 6 + "Cards"); // 11Cards , JavaScript Evaluates expression, from left to right.
console.log("Cards" + 5 + 2); // Cards52
console.log(5 * "Hello"); // NaN, means now we have arithematic opearator other than +, so here concatination will not happen

// If we are adding two strings, one string one number, one string and all other number, etc. In all these cases the output will be string only.


// Logical Operators

console.log( 2 > 3 || 3 > 2); // true, || means logical or, means either one condition is true, then it will become true.
console.log(2 > 3 && 3 > 2); // false, && means logical and, means all the condition must have to be true, so that the output becomes true.
console.log(!true); // false, ! means logical not, it will invert the output


// typeof Operator

console.log(typeof(2)); // number, typeof() operator, or we can say the typeof() function will return the data type of the argument given to it.
console.log(typeof(true)); // boolean
console.log(typeof("Hello")); // string
console.log(typeof([2, "H", "E", "L", "L", "O", true, 2.3, {name: "Piyush"}])); // not array, the output will be object, because in JavaScript, the arrays are treated like objects.
// an array is an object which has a sequential keys, start from 0.

console.log(typeof(a = undefined)) // undefined
console.log(typeof(a = "")); // string,  not undefined, we have defined it but not gave any value to it.
console.log(typeof(a = null)); // object, it is a fault in JavaScript, because in early days the binary of null is 000, so it is treated like an object.

