// any event that distrupt the normal flow of execution is known as error.
//types of error :---

     // compile time error


// syntax error
// console.log(1);


     // run time error

// reference error
// console.log(x);


// Handling

   // try-catch block
   // finally block :- these will run everytime


// try{
//     console.log("try block starts here");
//     console.log(x);
//     console.log("try block ends here");
// }
// catch(err){
//     // define krte h,error k sath aap kya karna chahte h
//     // retry logic
//     //fallback mechanism
//     //logging
//     //custom error
//     console.log("I am inside the catch block ");
//     console.log("your error is here : ",err)
// }
// finally{
//     console.log("I will run everytime as i am finally block");
// }


// throw keyword :--- You can manually throw errors using the throw keyword

// lets create a custom error
 

try{
    // reference error
    console.log(x);
}
catch(err){
    throw new Error("declare error first");
}


