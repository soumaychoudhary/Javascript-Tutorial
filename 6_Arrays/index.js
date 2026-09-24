/*
An array in JavaScript is a special variable that can hold multiple values in a single variable. it is collection of items.
Arrays are zero-indexed, meaning the first element has an index of 0.

objects :- collection of key value pairs.

     syntax :--    let obj = {
                        name : "love",
                        age : 25,
                        weight : 85,
                        iseligible : True,
                        walk : function(){
                         console.log("walking");
                        }
                    };

*/

// let obj ={
//     name:"love",
//     "full name":"love babbar",
//     age:25,
//     weight:85,
//     height:"6th 1in",
//     greet: function(){
//         console.log("hello jee keso ho sare");
//     }
// };

// console.log(obj);
// obj.greet();
// let Greet = obj.greet();
// console.log(Greet);
// let Name = obj.name;
// console.log(Name);

// console.log(typeof(obj));

// let obj2=obj;

// array :--

// let arr=[1,2,3,4,5];
// console.log(arr);

////////// ACCESSING ARRAY ELEMENT //////////////////
// arr[0]=10;
// console.log(arr[4]);

////////////////////////  array constructor  /////////////////////
// let brr=new Array('love',1,true);
// console.log(brr);

/*
####################### Array Elements Can Be Objects ####################
JavaScript variables can be objects. Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.
You can have objects in an Array. You can have functions in an Array.


                 JavaScript Values
                       |
              -------------------
              |                 |
          Primitives          Objects(non-primative)
              |                 |
       String, Number,       Object, Array,
       Boolean, etc.         Function, etc.
                                  |
                             Callable
                               object

*/
// A mixed-type JavaScript array
// const mixedArray = [
//   42,                                       // 1. Number
//   "Hello, world!",                         // 2. String
//   {                                        // 3. Object
//     name: "Alice",
//     role: "Developer",
//     marks:[
//         12,13,14,15
//     ]
//   },
//   function() {                      // 4. Function
//     console.log("Hello");
//   }
// ];

// // --- How to access and use each element ---

// // 1. Access the number
// console.log(mixedArray[0]);
// // Output: 42

// // 2. Access the string
// console.log(mixedArray[1]);
// // Output: Hello, world!

// // 3. Access a property inside the object
// console.log(mixedArray[2].marks[0]);   // 12
// // Output: Alice

// // 4. Invoke the function and pass an argument
// console.log(mixedArray[3]());
// // Output: Hi, from inside the array!

// // built - in method :---- push,pop,shift,unshift,slice,splice,map,filter,reduce,sort,indexof,find
// let brr=new Array('love',1,true);
// console.log(brr);
///////////////////////// PUSH AND POP METHOD  /////////////////////
// brr.push("babbar");
// console.log(brr);
// brr.pop();
// console.log(brr);

//////////////////////// SHIFT VS UNSHIFT METHOD ////////////////

// brr.shift();         // DELETE FROM FIRST
// console.log(brr);
// brr.unshift("love babbar");    // INSERT FROM FIRST
// brr.push(20);
// brr.push(40);
// brr.push(70);
// console.log(brr);

////////////////////////// Slice method ///////////////////
// let brr=new Array('love',10,true,23);
// console.log(brr);
// let ans=brr.slice(1,3);  //  start end-1    it returns section of copy of array
// console.log(ans);

////////////////////////splice method ///////////////////////
// let brr=new Array('love',10,true,23);
// console.log(brr);
// brr.splice(0,3,"kunal");    // start countnumbertodelete  insertingvalue
// console.log(brr);

// brr.splice(0,3);    // start countnumbertodelete  insertingvalue
// console.log(brr);

////////////////// toString method ///////////
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruitsstring = fruits.toString();
// console.log(fruitsstring);

//////////////////////  Length property ///////////
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(length);

////////////////////// sort method and toSorted //////////////////

// const numbers=[23,45,1,3,67];
// let ordered = numbers.sort();

// console.log(ordered);   // [1, 23, 3, 45, 67]
/**
 The reason you are getting [1, 23, 3, 45, 67] is because, by default, JavaScript's .sort() method converts elements into strings and compares their UTF-16 code unit values (alphabetical order).In alphabetical sorting, "23" comes before "3" because "2" is smaller than "3", just like "Apple" comes before "Banana".
 */

// // Ascending Order (Smallest to Largest)
// let orderedAsc = numbers.sort((a, b) => a - b);
// console.log(orderedAsc);
// // Output: [ 1, 3, 23, 45, 67 ]

// // Descending Order (Largest to Smallest)
// let orderedDesc = numbers.sort((a, b) => b - a);
// console.log(orderedDesc);
// // Output: [ 67, 45, 23, 3, 1 ]

////////////////////////// at method //////////////////////
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit);

//////////////////////   join method  /////////////////////
/*
The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruitstr=fruits.join(",");
// console.log(fruitstr);

//////////////////////// concat method //////////////////////
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);
// console.log(myGirls);

///////////////////////// reverse and toReversed ////////////////////
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const reversed = months.toReversed();
// console.log(reversed);
// console.log(months);
// const numbers=[23,45,1,4,67];
// console.log(numbers.reverse());
// console.log(numbers);

//////////////////// Array.from()//////////////////////
// let text = "ABCDEFG";
// let textarray=Array.from(text);
// console.log(textarray);

/////////////////// type of array ///////////////////////

// const fruits = ["Banana", "Orange", "Apple"];
// let type = typeof fruits;
// console.log(type);

// const isarray = Array.isArray(fruits);
// console.log(isarray);

//////////////////////////////  Array Searching //////////////////

// 1. include method

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("Mango"); // is true

// 2. find method (important)
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);  //Returns the value of the first element in the array where predicate is true, and undefined otherwise.

// function myFunction(value,index,array) {
//   return value > 18;
// }
// console.log(first);

// let first =numbers.find((value,index,array)=>{
//     return value > 18;
// })
// console.log(first);

///////////////////////////  Some higher order functions ///////////////////

// 1. map :--  it is higher order function which is used to perform transformation in array .

// let arr=[10,20,30];

// let ansArray=arr.map((number) =>{
//     return number*number;
// })

// console.log(ansArray);

// arr.map((number,index) =>{
//     console.log(number,index);
// })

// 2. filter :-- it is used t filter elements based on condition .

// let arr=[10,20,30,11,21,44,51];
// let evenArray=arr.filter((number) =>{
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(evenArray);

// 3. reduce :--- it used perform mathematical operation on the array. it always return a single value unlike other higher order function .

// let arr=[10,20,30,40];
// let ans=arr.reduce((acc,curr)=>{    // here acc is accumulator as well as it is a new parameter and curr is current element
//     return acc+curr;
// },0)

// console.log(ans);

// 4. every :---
// const numbers = [45, 40, 19, 169, 25];
// let allOver18 = numbers.every(myFunction);    // it always return boolean value

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(allOver18);

////////////////////// Some special loops in array //////////////////

// for - each

// let arr=[10,20,30];
// arr.forEach((value,index)=>{
//     console.log("number: ",value,"index: ",index);
// })

// for-in      // return index of array also know as keys
// let obj=[1,2,3,4]
// for(let key in obj){
//     console.log(key);
// }

// for-of  // return values of array

// let fullName="babbar";
// for(let val of fullName){
//     console.log(val);
// }

//////////////////////////   arrays in function  ///////////////////////////

// let arr=[10,20,30,40,50];
// function getSum(arr){
//     let len=arr.length;
//     let sum=0;
//     for(let index=0;index<len;index++){
//         sum=sum+arr[index];
//     }
//     return sum;
// }

// let totalSum=getSum(arr);
// console.log(totalSum);

////////////////////// ADVANCE OPERATORS ////////////////////
/*
javaScript Array Spread (...)
The ... operator expands an array into individual elements.

This can be used join arrays:
*/
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1,4];    // copying
// console.log(arr2);
// console.log(arr1);

/**
JavaScript Array Rest (...)
The rest operator (...) allows us to destruct an array and collect the leftovers:
 */

// let a, rest;
// const arr1 = [1,2,3,4,5,6,7,8];

// [a,b, ...rest] = arr1;    
// console.log(a);
// console.log(b);
// console.log(rest);

// const arr2 = [
//   "soumay",
//   {
//     age: 20,
//     gender: "male",
//   },
//   23
// ];

// const [Name, details,number] = arr2;    // also know as destructuring
// console.log(Name);
// details.phone="874657398";
// console.log(details);

// arr2[1].phone="63479038205";
// console.log(arr2[1]);
