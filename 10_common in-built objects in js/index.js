
// Built-in Object	             Purpose
//     Math	             Mathematical operations
//     Date	             Handling dates & times
//     String	             String manipulation
//     Number	             Number handling
//     Array	             List of values
//     Object	             Custom key-value data
//     JSON	             Convert data to/from JSON
//     Set	                 Collection of unique values
//     Map	                 Key-value pairs with any key type


// math

console.log(Math.PI);
console.log(Math.max(60,30,24,567,5543,678));
console.log(Math.min(60,30,24,567,5543,678));
console.log(Math.round(1.4));
console.log(Math.floor(1.9));
console.log(Math.ceil(1.9));
console.log(Math.abs(-5));
console.log(Math.random());
console.log(Math.sqrt(1.9));
console.log(Math.pow(2,9));

// date

let curr=new Date();

let date=new Date('June 20 1998 07:15')

let newDate=new Date(1998,6,20,7)
console.log(newDate);
newDate.setFullYear(2004);
console.log(newDate);