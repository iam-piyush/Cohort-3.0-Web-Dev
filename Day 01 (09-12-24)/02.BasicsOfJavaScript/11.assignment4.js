
let user = {
    name: "Piyush Kumar",
    gender: "Male",
    age: 21
}

function greetingWithObject(user){
    let title;
    if (user.gender == "Male"){
        title = "Mr"
    }
    else {
        title = "Ms"
    }

    return `Hello, ${title} ${user.name}. Your age is ${user.age}. ${user.age >= 18 ? "You can cast a vote." : "You can't cast a vote."}`;
}


console.log(greetingWithObject(user));