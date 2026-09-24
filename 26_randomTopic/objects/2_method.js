/**
/////////////////// What are Object Methods? ////////////////////////
  Methods are actions that can be performed on objects.
  Methods are functions stored as property values.
*/

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

/**
The this Keyword
In an object method, this refers to the object.
 */

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   getId: function() {
//     return this.id;
//   }
// };

// let number = person.getId();


/**
////////////////// Accessing Object Methods ///////////////////
  To call an object method, add parentheses ():
  Without parentheses you get the function itself.

  syntax:---- objectName.methodName()

  If you call a method without parentheses, it will return the function definition:
    name = person.fullName;
 */


// Assign person.name to a function
// person.name = function () {
//   return this.firstName + " " + this.lastName;
// };


// person.name = function () {
//   return (this.firstName + " " + this.lastName).toUpperCase();
// };


/**
Summary
Methods are functions stored as object properties
Call a method with parentheses: person.fullName()
In methods, this refers to the object
You can add methods to objects by assigning a function to a property
 */