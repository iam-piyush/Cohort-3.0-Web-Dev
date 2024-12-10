// Write a function called canVote that returns true or false if the age of a user is > 18

function checkEligibility(age){
    let canVote = age >= 18;
    return canVote;
}

console.log(checkEligibility(12)); // false

console.log(checkEligibility(18)); // true