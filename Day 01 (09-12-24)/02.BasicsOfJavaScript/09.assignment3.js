function findSum(number){
    let sum = 0;

    for (let i = 1; i <= number; i++){
        sum = sum + i;
    }

    return sum;
}


console.log(findSum(5555));