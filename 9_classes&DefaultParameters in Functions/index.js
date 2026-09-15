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

//     constructor(newAge,newHeight,newWeight){
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
// }

// let obj=new Human(50,190,101);
// console.log(obj.age);
// obj.walking();

// obj.modifyWeight=34;
// console.log(obj.fetchWeight);



// default parameter :-- it allow us to use functions with default values.

// function sayName(myName="ultimate warrier"){
//     console.log("my name is : ",myName);
// }
// sayName("soumay choudhary")

// function character(value={age:23,wt:45,ht:189}){
//     console.log("soumay choudhary",value);
// }
// character();

// function getAge(){
//     return 190
// }
// function utility(name="soumay",age=getAge()){
//     console.log(name," ",age);
// }
// utility();
