/*
JavaScript classes (class) provide a way to create reusable object blueprints, making object-oriented programming (OOP) easier. 
They were introduced in ES6 (ECMAScript 2015) and are syntactical sugar over JavaScript’s existing prototype-based inheritance .

class :- A class is a blueprint or template for creating objects. 
         It defines properties (variables) and methods (functions) that the objects will have .

object :- An object is an instance of a class. It contains specific values (properties) and behaviors (methods) defined by the class.
*/
// class Human{
//     //properties
//     age=13;    // public
//     #wt=80;     // private
//     ht=180;

//     constructor(newAge,newHeight,newWeight){         // Runs automatically when an object is created.
//         this.age=newAge;
//         this.ht=newHeight;
//         this.#wt=newWeight;
//     }


//     // behaviour

//     walking(){
//         console.log("i am walking",this.#wt);
//     }

//     running(){
//         console.log("i am running")
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(val){
//         this.#wt=val;
//     }

//     #privateFunction() {
//         console.log("This is a private function");
//     }
// }

// let obj=new Human(50,190,101);
// console.log(obj.age);
// obj.walking();
// // obj.privateFunction();
// console.log(obj.fetchWeight);
// obj.modifyWeight=34;
// console.log(obj.fetchWeight);


/**
Imagine we have 100 students. Each student has:
name
roll number
marks
methods like study(), attendClass()
 */


/**
OOP is a programming approach where we organize data and behavior together using objects.
*/


/*

################################## ENCAPLUSATION //////////////////////////////////
Encapsulation means keeping data and the operations that work on that data together, while controlling access to internal data.
Simple definition

Encapsulation means wrapping data and the methods that work on that data inside one unit (object/class), and controlling how that data can be accessed or changed.

Think of it as:

"Keep the important data protected and provide controlled ways to use it."
*/

// class BankAccount {

//     #balance = 0;
//     deposit(amount) {
//         this.#balance += amount;
//     }
//     getBalance() {
//         return this.#balance;
//     }
// }

// const soumay = new BankAccount();

// soumay.deposit(500);

// console.log(soumay.getBalance());


/////////////////////////////  getter and setter //////////////////////////////////////
// class Student {

//     constructor(name, marks) {
//         this.name = name;
//         this.marks = marks;
//     }

//     get result() {
//         return this.marks >= 40 ? "Pass" : "Fail";
//     }

//     set studentMarks(value) {
//         if (value >= 0 && value <= 100) {
//             this.marks = value;
//         }
//     }
// } 

// const student = new Student("Rahul", 80);

// console.log(student.result);

// student.studentMarks = 90;


 
