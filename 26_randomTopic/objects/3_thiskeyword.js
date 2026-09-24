/**
Why Use this?
  The this keyword makes it possible to use the same method with different objects.
 */

// const person1 = {
//   name: "John",
//   hello: function() {
//     return "Hello " + this.name;
//   }
// };

// const person2 = {
//   name: "Anna",
//   hello: function() {
//     return "Hello " + this.name;
//   }
// };


/**
///////////////// this Alone /////////////////////////
When used alone, this refers to the global object.
In a browser, the global object is the window object.
 */

// let x = this;
// console.log(x);

/**
this in a Function
In a regular function, this also refers to the global object.
*/

// function myFunction() {
//   return this;
// }
// console.log(myFunction())

/*
//////////////// Arrow functions don't have their own this. /////////////
*/
// const person = {
//     name: "Rahul",

//     greet: () => {
//         console.log(this.name);
//     }
// };

// person.greet();

/**
Because the arrow function doesn't create its own this.
It takes this from its surrounding lexical scope.

    user.greet()
        ↓
    Does arrow function create its own this?
        ↓
        NO
        ↓
    Look outside for this
        ↓
    Use surrounding this

 */


///////////////  compare with Normal function //////////////

// const user = {
//     name: "Rahul",

//     greet: function() {
//         console.log(this.name);
//     }
// };

// user.greet();

/**
    user.greet()
        ↓
    user is calling the function
        ↓
    this = user
        ↓
    this.name = "Rahul"
 */


//////////////////////////// in depth example /////////////////////////
// const user = {
//     name: "Rahul",

//     greet: function() {
//         console.log(this.name);
//         setTimeout(function() {
//             console.log(this.name);
//         }, 1000);
//     }
// };

// user.greet();


// const user = {
//     name: "Rahul",

//     greet: function() {
//         console.log(this.name);

//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000);
//     }
// };

// user.greet();


/**
              user.greet()
                  │
                  ↓
            ┌─────────────────────────────┐
            │ greet()                     │
            │                             │
            │ this = user                 │
            │                             │
            │     setTimeout(() => {      │
            │         console.log(this)   │
            │     })                      │
            │              ↑              │
            │              │              │
            │        arrow function       │
            │        has NO own this      │
            │              │              │
            │              └──────────────┤
            │                takes this   │
            │                from greet   │
            └─────────────────────────────┘
 */


////////////////// one more example ////////////////

// const student = {
//     name: "Rahul",
//     marks: [80, 90, 95],

//     showMarks: function() {
//         this.marks.map(function(mark) {
//             console.log(this.name, mark);
//         });
//     }
// };

// student.showMarks();


// const student = {
//     name: "Rahul",
//     marks: [80, 90, 95],

//     showMarks: function() {
//         this.marks.map((mark) => {
//             console.log(this.name, mark);
//         });
//     }
// };

// student.showMarks();


/**
////////////////// One rule you should teach students //////////////////////////

Put this on your board:
    Normal function
      this → determined by how the function is called
    Arrow function
      this → inherited from where the function was created
      This distinction is extremely important.
 */


/**
                            `this`
                       │
          ┌────────────┴────────────┐
          │                         │
    Normal Function            Arrow Function
          │                         │
    Own `this`                No own `this`
          │                         │
          │                  Inherits `this`
          │                         │
          ↓                         ↓
   call / apply / bind       call/apply/bind
      can control it         cannot override it
 */


////////////////  CALL , APPLY , BIND ////////////////////

// They allow us to control what this refers to when a function runs.

// const person1 = {
//     name: "Rahul"
// };

// const person2 = {
//     name: "Amit"
// };

// function greet() {
//     console.log("Hello " + this.name);
// }


// CALL , APPLY

// greet.call(person1);


// BIND
// const person = {
//     name: "Rahul"
// };

// function greet() {
//     console.log("Hello " + this.name);
// }

// const greetRahul = greet.bind(person);
// greetRahul();



/**
      Method	    Executes immediately?	            Arguments
      call()	        ✅ Yes	                        Individual
      apply()	        ✅ Yes	                          Array
      bind()	        ❌ No	                         Individual
      bind() result	  ✅ When called	                    —
 */