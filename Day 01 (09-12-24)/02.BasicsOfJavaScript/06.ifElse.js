// if (condition is true){
//     do smomething
// }

// else if (condition is true){
//     do smomething
// }

// else {
//     do smomething
// }


function checkEligibility(age){
    if (age >= 18){
        return "Yes, you can cast a vote";
    }
    else {
        return "No, You can't cast a vote";
    }
}

console.log(checkEligibility(12));