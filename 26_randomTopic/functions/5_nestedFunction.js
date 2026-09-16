// function outer(){
//     console.log("outer");
//     function inner(){
//         console.log("inner")
//     }
//     inner();
// }
// outer();   

function greetUser(firstName, lastName) {
    // Outer function variable
    const greeting = "Hello";

    // Nested (inner) function
    function formatName() {
        // Has access to firstName, lastName, and greeting from the outer scope
        return `${greeting}, ${firstName} ${lastName}!`;
    }

    // // Executing the inner function inside the outer function
    return formatName();
}

console.log(greetUser("Soumay", "Choudhary")); // Output: Hello, John Doe!
