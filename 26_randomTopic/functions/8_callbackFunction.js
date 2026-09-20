// we can pass function as a parameter


// function greet(name) {
//     console.log("Hello " + name);
// }

// function execute(fn) {          
//     fn("Rahul");      
// }                         

// execute(greet);    // "Give the greet function to execute."
// execute(greet("rahul"));  // Execute greet first and give its returned value to execute.

//Since a function can be passed to another function, JavaScript allows us to build something called a callback function.

// A callback is a function that is passed to another function as an argument and is called later by that function.

function showAddition(sum) {
    if(sum>50) console.log("greater than 50");
    else console.log("Less than 50");
    console.log("The Addition is : " + sum);
}
function add(x,y,fn) {  
    let add=x+y;       
    fn(add);      
}  

add(12,23,showAddition);
/*

greet
  ↓
passed to
  ↓
execute()
  ↓
execute calls greet()

*/


// console.log("Start");

// setTimeout(function () {
//     console.log("Hello after 2 seconds");
// }, 2000);

// console.log("End");

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


/*
role: Consider your self as a technical professional teacher.

action: your task is to teach me callback function and closers in javascript with example 
so that i can get a good understanding of it.

context: Nowadays, I am learning a javascript language so i am beginner in it so consider these in mind.

expectation: i expect from you is that your response will give me a good understanding of these topic so that in industry i can use it very well . 

tone: Kindly maintain the professional yet easy tone so that i dont face any issue while reading your response.
*/