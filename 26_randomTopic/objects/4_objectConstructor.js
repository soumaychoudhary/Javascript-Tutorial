/**
////////////////// Object Constructor Functions ////////////////////
Sometimes we need to create many objects of the same type.
To create an object type we use an object constructor function.
It is considered good practice to name constructor functions with an upper-case first letter.
 */

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");

// const mySelf = new Person("Johnny", "Rally", 22, "green");

// class Person {
//   constructor(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   getFirstName(){
//     return this.firstName;
//   }
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");

// const mySelf = new Person("Johnny", "Rally", 22, "green");
// console.log(mySelf.eyeColor);
// console.log(mySelf.getFirstName())


//Built-in JavaScript Constructors

// new Object()   // A new Object object
// new Array()    // A new Array object
// new Map()      // A new Map object
// new Set()      // A new Set object
// new Date()     // A new Date object
// new RegExp()   // A new RegExp object
// new Function() // A new Function object

// The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math

/*
The JavaScript Math object allows you to perform mathematical tasks.
The Math object is static.
All methods and properties can be used without creating a Math object first.
*/

/**
MATH PROPERTIES
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

// these math property used rarely 
*/

/**
 ////////////////////////////  MATH METHOD //////////////////////
Math.round(x)	Returns x rounded to its nearest integer    5.6     6             5.4    5
Math.ceil(x)	Returns x rounded up to its nearest integer    5.4  6
Math.floor(x)	Returns x rounded down to its nearest integer  5.9  5
Math.trunc(x)	Returns the integer part of x (new in ES6)    5.78879789   5
*/

// let power =Math.pow(8, 2);
// console.log(power);
//  console.log( Math.sign(-4));
//  console.log( Math.sign(0));
//  console.log( Math.sign(4));

// Math.sqrt(64);     //8

// console.log(Math.abs(-4.7));     

// Math.min(0, 150, 30, 20, -8, -200);

// Math.max(0, 150, 30, 20, -8, -200);

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
// console.log(Math.random());

// function generateOTP() {
//     // Generates a random number between 100000 and 999999
//     return Math.floor(100000 + Math.random() * 900000).toString();
// }

// console.log(generateOTP()); // Example output: "482015"

////////////////////////// DATE OBJECT /////////////////////////////

// let date = new Date()
// console.log(date);
// // new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

/////////////// displaying dates ///////////////////
// const d = new Date();
// d.toString();

// const d = new Date();
// d.toDateString();

// const d = new Date();
// console.log(d.toUTCString());

// const d = new Date();
// console.log(d.toISOString());
// console.log(d.getFullYear());
// console.log(d.getDay());
// d.setFullYear(2025);
// console.log(d.toISOString());

/**
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
 */

/**
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (yyyy)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
 */

// let text = "";
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);

// if (someday > today) {
//   console.log(text = "Today is before January 14, 2100.");
// } else {
//   console.log(text = "Today is after January 14, 2100.");
// }
