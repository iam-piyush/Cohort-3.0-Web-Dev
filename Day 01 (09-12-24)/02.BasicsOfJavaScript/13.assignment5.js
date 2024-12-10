/* Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male */


let users = [ {name: "Piyush Kumar", gender: "M", age: 21}, {name: "Ritika Bhatia", gender: "F", age: 21}, {name: "Abhinav Raj", gender: "M", age: 18}];

function filtering(users){
    let filteredUsers = [];

    for (let i = 0; i < users.length; i++){

        if (users[i].gender == "M" && users[i].age > 18){
            filteredUsers.push(users[i].name);
        }
        
    }

    return filteredUsers;
}

console.log(filtering(users));