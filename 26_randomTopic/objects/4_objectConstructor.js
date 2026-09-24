/**
////////////////// Object Constructor Functions ////////////////////
Sometimes we need to create many objects of the same type.
To create an object type we use an object constructor function.
It is considered good practice to name constructor functions with an upper-case first letter.
 */


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");


//Built-in JavaScript Constructors

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object


// he Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math 