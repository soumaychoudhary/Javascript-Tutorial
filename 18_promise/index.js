/*
############################### promise ############################### 

    A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its 
    resulting value. Promises help avoid callback hell and make asynchronous code easier to manage .

     States of a Promise
         A Promise has three states:
             Pending – Initial state, neither fulfilled nor rejected.
             Fulfilled – The operation completed successfully.
             Rejected – The operation failed.

    syntax :--    new Promise((resolve,reject) => {});

*/

// let firstPromise = new Promise((resolve,reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("my name is soumay choudhary");
//     },10000);
// });



// let promise1 = new Promise((resolve,reject) => {
//     let success=false;
//     if(success){
//         resolve("promise fullfilled");
//     }
//     else {
//         reject("promise rejected");
//     }
// });

// promise1.then((message) =>{
//     console.log("then ka message is "+message);
// }).catch((error)=>{
//     console.log("error : "+ error);
// }).finally((message)=>{
//     console.log("main to finally hu ,chalunga pakka");
// })


