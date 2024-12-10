/************************** Remember when we are dealing with dynamic keys, etc in object then do not use . dot notation, use [] there **************************/

// Object.values(objectName);   This mehtod will create an array of values inside the objectName object.

const user = {
    firstName: "Piyush",
    lastname: "Kumar",
    age: 21,
    dob: "19-09-2203"
}

let valueArray = Object.values(user);

console.log(valueArray);


// A question had asked to me in SanDisk interview, the question is we have to remove the lastname from the values.

const anotherUsers = {
    user1: "Piyush Kumar",
    user2: "Ritika Bhatia",
}

// Now the question is remove surname. Note that there is a space also.

for (let x in anotherUsers) {
    anotherUsers[x] = (anotherUsers[x]).split(" ")[0]; // means split() witll create an array, and we want the first element. Also read line number 1
    // anotherUsers.x this is will error, because there is no key named x in the anotherUsers object.
}

console.log(anotherUsers);


/************************** Remember when we are dealing with dynamic keys, etc in object then do not use . dot notation, use [] there **************************/

let singer = ["Sidhu Moosewala", "Diljit Dosanjh", "Karan Aujla", "Mankirat Aulakh"];
let favouriteSongs = ["So High", "Born to Shine", "Admirin You", "Jail 2"];

const playlist = new Object();

for (let i = 0; i < singer.length; i++){
    playlist[singer[i]] = favouriteSongs[i]; // read line number 1.
    // playlist.singer[i] = favouriteSongs[i]; here we have usd . dot notation, so it will not check the singer[i] value dynamically, and it will give an error.
}

console.log(playlist);


/************************** JSON.stringify() **************************/

// This method will convert JavaScript object into a string using JSON method. It is supported by all major browsers.

console.log(JSON.stringify(playlist));