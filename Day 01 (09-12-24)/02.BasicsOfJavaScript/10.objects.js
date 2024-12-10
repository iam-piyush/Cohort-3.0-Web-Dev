// Objecta are collection of key-value pairs.


let user = {
    firstName: "Piyush",
    lastName: "Kumar",
    greeting: function greet(){
        return "Hello, " + this.firstName + this.lastName;
    },
    academic: {
        semester: "7th",
        section: "A1",
        isFeePaid: true,
    }
}


console.log(`${user.greeting()} . Your semester is  ${user.academic.semester} and section is ${user.academic.section} . ${user.academic.isFeePaid == true ? "You have paid the fee" : "You have not paid the fee."}`);