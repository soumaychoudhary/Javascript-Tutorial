// pure function is a function  that produces the same output for the same input.

function sayGreeting(name){
    return `hello ${name}` // pure function
}

const greet=sayGreeting("Soumay");
console.log(greet);