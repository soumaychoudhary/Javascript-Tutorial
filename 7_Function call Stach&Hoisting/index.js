/*
########################  hoisting ########################### 
     Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before execution. 
     This means you can use functions and variables before declaring them.


sayMyName("babbar");
function sayMyName(finalName){
    console.log(finalName);
}

console.log(age);
var age=25;

let and const are hoisted but stay in a Temporal Dead Zone (TDZ) until assigned a value.
Unlike var, they do not get initialized with undefined.


function hoisting cannot be done using function expression

sayHello();
let sayHello=function(){
    console.log("hello jee,kaise ho aap sab")
}


5. Summary Table
        Feature	          Hoisted?	Initialized?	  Usable Before Declaration?
            var	             ✅ Yes	   ✅ undefined	  ✅ Yes (But undefined)
            let	             ✅ Yes	   ❌ No	          ❌ No (TDZ Error)
        const	             ✅ Yes	   ❌ No	          ❌ No (TDZ Error)
    Function Declaration     ✅ Yes	   ✅ Yes          ✅ Yes
    Function Expression	     ✅ Yes	   ❌ No	          ❌ No


class hoisting  is also not possible .

const object1=new Human();
class Human{

}





######################### function callstack #############################


   The call stack is a data structure that keeps track of function calls in JavaScript. 
   It follows the LIFO (Last In, First Out) principle, meaning:

            The last function that is called is the first to be executed.
            When a function finishes execution, it is removed from the stack


why functions is called first class citizion in javascript

        In JavaScript, functions are first-class citizens, meaning they can be:

                Assigned to variables
                Passed as arguments to other functions
                Returned from other functions
                Stored in data structures (like arrays, objects, etc.)

        This makes JavaScript a functional programming-friendly language.

*/


// assigned to variables
// let greet=function(){
//     console.log("greeting for the day")
// }
// greet();


// passed as arguments

// function greetMe(greet,fullName){
//     console.log("hello",fullName);
//     greet();
// }

// function greet(){
//     console.log("greeting for the day")
// }

// greetMe(greet,"soumay");


// Returned from other functions

function solve(number){
    return function(number){
        return number*number;
    }
}

// let ans=solve(5);
// let finalAns=ans(10);
// console.log(finalAns);


// Stored in data structures (like arrays, objects, etc.)

// const arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];

// let first=arr[0];
// let ans=first(5,10);
// console.log(ans);


// let obj={
//     age:25,
//     wt:36,
//     ht:100,
//     greet:()=>{
//         console.log("hello dunia");
//     }
// }

// console.log(obj.age);
// obj.greet();

