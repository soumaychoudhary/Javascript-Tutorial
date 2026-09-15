// we can pass function as a parameter


function greet(name) {
    console.log("Hello " + name);
}

function execute(fn) {
    fn("Rahul");
}

execute(greet);    // "Give the greet function to execute."
execute(greet());  // Execute greet first and give its returned value to execute.

//Since a function can be passed to another function, JavaScript allows us to build something called a callback function.

// A callback is a function that is passed to another function as an argument and is called later by that function.

/*

greet
  ↓
passed to
  ↓
execute()
  ↓
execute calls greet()

*/


console.log("Start");

setTimeout(function () {
    console.log("Hello after 2 seconds");
}, 2000);

console.log("End");

/**
The callback basically means:
    "When you're finished, execute this function."
This is a very good bridge to asynchronous JavaScript.
 */




// function foo(bar){
//     bar(); // callback
// }

// foo(function(){  // anonimus function :-- it dosent have a name.
//     console.log("bar");
// })

// function named(){
//     console.log("bar");
// }

// foo(named);


// function fo(bar){
//     if(itsNight){
//         bar();
//     }

//     if(isDay){
//         bar();
//     }
// }