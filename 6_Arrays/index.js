/*
An array in JavaScript is a special variable that can hold multiple values in a single variable. it is collection of items.
Arrays are zero-indexed, meaning the first element has an index of 0.

objects :- collection of key value pairs.

     syntax :--    let obj = {
                        name : "love",
                        age : 25,
                        weight : 85,
                        walk(){}
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

// console.log(typeof(obj));

// let obj2=obj;



// array :--

// let arr=[1,2,3,4,5];
// console.log(arr);

// // array constructor
// let brr=new Array('love',1,true);
// console.log(brr);

// // built - in method :---- push,pop,shift,unshift,slice,splice,map,filter,reduce,sort,indexof,find

// brr.push("babbar");
// console.log(brr);
// brr.pop();
// console.log(brr);

// brr.shift();
// console.log(brr);
// brr.unshift("love babbar")
// brr.push(20);
// brr.push(40);
// brr.push(70);
// console.log(brr);
// brr.slice(1,3);
// console.log(brr);

// brr.splice(1,2,"kunal");
// console.log(brr);


// map filter and reduce

// map :-- 
// let arr=[10,20,30];

// let ansArray=arr.map((number) =>{
//     return number*number;
// })

// console.log(ansArray);

// arr.map((number,index) =>{
//     console.log(number,index);
// })

//filter :--

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

// reduce :---

// let arr=[10,20,30,40];
// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0)

// console.log(ans);

// for - each

// let arr=[10,20,30];
// arr.forEach((value,index)=>{
//     console.log("number: ",value,"index: ",index);
// })

// for-in

// for(let key in obj){
//     console.log(key);
// }

// for-of

// let fullName="babbar";
// for(let val of fullName){
//     console.log(val);
// }


// arrays in function

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


