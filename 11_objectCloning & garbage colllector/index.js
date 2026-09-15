/* Object(datatype) Cloning in JavaScript

    // Object cloning refers to creating a duplicate copy of an object with the same properties and values. 
    // JavaScript provides several ways to clone objects.

*/
// let obj={
//     age:12,
//     wt:68,
//     ht:180,
// };

// console.log(obj);
// obj.color="white";
// console.log(obj);

// object cloning :--
   


   // using spread operator

// let src={
//     age:12,
//     wt:68,
//     ht:180,
// };
// let dest={...src};

// src.age=90;
// console.log("src : ",src);
// console.log("dest : ",dest);

   // using assign method

// let src={
//     age:12,
//     wt:68,
//     ht:180,
// };
// let dest=Object.assign({},src);
// src.age=90;
// console.log("src : ",src);
// console.log("dest : ",dest);

  // using iteration

//   let src={
//     age:12,
//     wt:68,
//     ht:180,
// };
// let dest={};
// for(let key in src){
//     let newKey=key;
//     let newValue=src[key];
//     // insert newkey and value in dest and create a clone
//     dest[newKey]=newValue;
// }
// console.log("src : ",src);
// console.log("dest : ",dest);



// Garbage collector :---

    // Garbage Collection (GC) is an automatic memory management process in JavaScript that removes objects from memory 
    // when they are no longer needed.

    // 👉 JavaScript uses a garbage collector to free up memory automatically, so developers don’t need to manually 
    // allocate and deallocate memory (like in C or C++)