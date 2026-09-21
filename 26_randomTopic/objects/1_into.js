/**
What are JavaScript Objects?
---Objects are variables that can store both values and functions.
---Values are stored as key:value pairs called properties.
---Functions are stored as key:function() pairs called methods.
 */

// Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// console.log(person)

// Create an Object
// const person = {};

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// Create an Object
// const person = new Object({
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// });
// console.log(person)


/**
Object Properties
You can access object properties in two ways:
    Dot notation
    Bracket notation
*/

// person["firstName"]='rahul'
// console.log(person)


// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   age      : 50,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

/**
In an object method, this refers to the object.
In the example above, this refers to the person object.
*/

/**
###############  In JavaScript, Objects are King ##########################
If you Understand Objects, you Understand JavaScript.
In JavaScript, almost "everything" is an object:
  Objects are objects
  Maths are objects
  Dates are objects
  Arrays are objects
  Maps are objects
  Sets are objects
  RegExp are Objects
  Errors are Objects
All JavaScript values, except primitives, are objects.
 */


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
// };

// delete person.age;   // by using delete keyword we can delete object properties


////////////////////// Nested Objects //////////////////
// myObj = {
//   name:"John",
//   age:30,
//   myCars: {
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"
//   }
// }
// console.log(myObj);