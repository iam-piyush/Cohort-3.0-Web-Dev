// objects are real life things like car, hourse, bike, house, etc.

// objects have some properties and some methods(methods are function definitions stored in an object as a key value.)

// objects are created by 3 different ways

/*

1. Using the object literal {}
2. Using new keyword.
3. Using Object() constructor.

*/

// It is a good practice to use const keyword with object variables, because when we are using const keyword then we can can't assign that variable to another object, means that variable always refer to the assigned object only.

const person = {
    firstName: "Piyush",
    lastName: "Kumar",
    age: 21,
    dob: "19-09-2003",
    castVote: function check() {
        return ( (this.age >= 18) ? true : false )
    }
}

console.log(`Hi, ${person.firstName} ${person.lastName}. ${ (person.castVote() === true) ? "You can Cast a vote." : "You can't cast a vote."}`) ;
// In the above example we made an object using object literal {}.


/****************************************************************************************************************************************************************************/

const anotherPerson = new Object();

let keys = ["firstName", "lastName", "age", "dob", "castVote"];
let values = ["Ritika", "Bhatia", "22", "27-06-2002", function check(){return ((this.age >= 18)? true : false)}];

for(let i = 0; i < keys.length; i++){
    let key = keys[i]; // here we have the value firstName, lastName, etc.
    // anotherPerson.key = values[i]; // now here it will not be like anotherPerson.firstName, etc. Nope          it will be anotherPerson.key = ...     means it will not put the value of key (dunamically), it will assign key as key.

    anotherPerson[key] = values[i]; // This will work, now anotherPerson taking key as expression, not property name.
    
    /************************** Remember when we are dealing with dynamic keys, etc in object then do not use . dot notation, use [] there **************************/

    // thats why all keys of the anotherObject will be key. And there are ovewritten every time, if we console.log(anotherPerson.key) then the output will be [Funtion: check].
}

// console.log(`Hi, ${anotherPerson.firstName} ${anotherPerson.lastName}. Your age is ${anotherPerson.age}. And ${(anotherPerson.castVote() === true) ? "You can cast a vote." : "You can't cast vote."}`);
console.log(anotherPerson.key);
// output will be Hi, undefined undefined. Your age is undefined. And You can't cast vote.

/****************************************************************************************************************************************************************************/


const oneAnotherPerson = new Object();

oneAnotherPerson.firstName = "Ritika";
oneAnotherPerson.lastName = "Bhatia";
oneAnotherPerson.age = 22;
oneAnotherPerson.dob = "27-06-2002";
oneAnotherPerson.castVote = function check() {return (this.age >= 18) ? true : false}; // here castVote is a method

console.log(`Hi ${oneAnotherPerson.firstName} ${oneAnotherPerson.lastName}. Your age is ${oneAnotherPerson.age}. And ${(oneAnotherPerson.castVote() === true) ? "You can cast a vote." : "You cannot cast a vote."}`);


// Arrays are objects with a sequential key values.

console.log(oneAnotherPerson.firstName);
console.log(oneAnotherPerson["firstName"]); // means [] square brackets are not only used for arrays. The . dot notation, and [] square brackets searches for same memory location. But we have to give key in [] square bracktes as string.
console.log(oneAnotherPerson["castVote()"]); // undefined
// console.log(oneAnotherPerson[castVote]); // error
// console.log(oneAnotherPerson[castVote()]); // error
console.log(oneAnotherPerson.castVote());



// Objects are call by reference, not by value. Means shallow copy is made, not the deep copy.

// here an car object is created
const car = {
    company: "Ford",
    name: "Mustang",
    color: "Black",
    year: 2023
}

const x = car; // here x is same as car, means the memory location of x and car is same. Every change done in x will also reflect car.

x.name = "Raptor";
x.color = "White";
x.sound = function horn(){return "piiiiiiiiiiiii"};

console.log(car.company, car.name, car.color); // Ford Raptop White


// delete keyword is used to delete any property from an object. It will delete the property completely, means key and value both, and after deleting we can not use that property again ones it is created again.

delete x.year;

console.log(x.year); // undefined


// accessing methods from object
console.log(x.sound()); // piiiiiiiiiiii
// console.log(x.horn()); // error, not defined
console.log(x.sound); // here we are accessing the method without paranthesis, so the it will return the function definition.