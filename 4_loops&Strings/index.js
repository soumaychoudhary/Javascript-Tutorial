// Loops :--
        // when you have to execute the same set of tasks repeatedly then we use loops.

// 1. for loop
// The for statement creates a loop with 3 optional expressions:

//     for(initilization , condition , updation){ loop logic }



// for(let i=1;i<=10000;i++){
//     console.log(i);
// } 

// for(let i=5;i>=1;i--){
//     console.log(i);
// }

// for(let i=1;i<=6;i++){
//     if(i==4) break;
//     else console.log(i);
// }

// for(let i=1;i<=6;i++){
//     if(i==4) continue;
//     else console.log(i);
// }

/*
2. while
    The while loop loops through a block of code as long as a specified condition is true.
    syntex :-     initialization
                  while(cond){
                    loopLogic;
                    operation;
                    updation;
                  }
*/

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let i=1;
// while(i<5){
//     console.log("inside the loop");
//     if(i==3){
//         i++;
//         continue;
//     }
//     else{
//         console.log("hi");
//     }
//     i++;
// }


// function isdigit(){
//   return true;
// }
// while(isdigit()){
//   console.log("Yes it is digit")
// }


/*
| **For Loop**                                    | **While Loop**                                         |
| ----------------------------------------------- | ------------------------------------------------------ |
| Used when iterations are **known**              | Used when iterations are **unknown**                   |
| Best for **sequences/ranges**                   | Best for **conditions**                                |
| Initialization & update are usually in the loop | Initialization & update are usually written separately |
| Less chance of infinite loop                    | Higher chance of infinite loop                         |
| Example: `for i in range(5)`                    | Example: `while i < 5`                                 |


*/

/*
 3. do-while loop
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
      syntax:--   initialization
                  do{
                    logic;
                    operation;
                  }while(cond);
*/
// let i=1;
// do{
//     console.log("babbar")
//     i++
// }while(i>10)

/*

                 LOOPING
                    |
        -------------------------
        |           |           |
      for...in    for...of    forEach()
        |           |           |
       INDEX       VALUE       VALUE
*/

///////////////////////  Strings :--- /////////////////////////////////

   // sequence of characters 


// let firatName="Love";
// let lastName='babbar';

// let name=`love babbar
//  the cult of 
//  personality`;

// console.log(name)

// let firstName=new String("babbar")
// console.log(firstName)

/////////////////////////// string operations :--- ////////////////////

// 1. Concatination

// let op1='english';
// let op2='hindi ';
// let ans = op1 + op2;
// console.log(ans[0]='r');
// console.log(ans);

// 2.Template literals

// let op1='english ';
// let op2='hindi ';
// let finalAns=`${op1} and ${op2}`;
// console.log(finalAns);

/////////////////////// 3.string method (Most Important) /////////////////////

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);

// let op1='english ';
// let op2='hindi ';
// console.log(op2.length);
// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());


// let text = "Apple, Banana, kivi";
// let part = text.slice(1,4);   //end position not included
// console.log(part);

// let str="babbar"
// console.log(str.substring(2));
// console.log(str.substring(2,4));  // same as slice but negative position is not allowed


// let sentence="look in my eyes what do you see";
// let words=sentence.split(' ');
// console.log(words);


// let text = "HELLO WORLD";
// let char = text.charAt(6);
// console.log(char)

// const name = "W3Schools";
// let letter = name.at(-2);  // negative index allowed
// console.log(letter);

// const name = "W3Schools";
// let letter = name[2];


// let text1 = "      Hello World!      ";
// // let text2 = text1.trim();
// console.log(text1);

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

// let text=`There are a lot of Cats.These cats are very skilled because when they get 
// opportunity they come in the house and drink all the milk thats why cats are considered
// as an ultimate opportunist.`
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// console.log(text);


// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// console.log(index);


// let text = "Please locate where 'locate' occurs!";
// let ans=text.search("located");    // returns position
// console.log(ans);


// let text = "Hello world, welcome to the universe.";
// const ans = text.includes("world");          // return boolean

// console.log(ans);



/*

🔁 Loops — Practice Questions
Write a JavaScript program using a for loop to print numbers from 1 to 10.
Write a program using a loop to print all even numbers from 1 to 20.
Write a program to calculate the sum of numbers from 1 to 50 using a loop.
Take a number from the user and print its multiplication table from 1 to 10.
Take a number from the user and use a loop to count how many digits it contains.


🔤 Strings — Practice Questions
Take a string and use a loop to print each character on a separate line.
Write a program to find the length of a string.
Write a program to count the number of vowels in a string.
Write a program to reverse a string using a loop.
Write a program to check whether a string is a palindrome or not.
   
*/

// var s="soumay choudhary"
// var countv=0;
// var countc=0;
// for(let i=0;i<s.length;i++){
//   if(s[i]==='a' || s[i]==='e' || s[i]==='i' || s[i]==='o' || s[i]==='u'){
//     countv++;
//   }else{
//     countc++
//   }
// }
// console.log(countv);
// console.log(countc);

// var s="soumay choudhary"
// let i=0;
// let j=s.length-1;

// while(i<=j){
//   let temp=s[i];
//   s[i]=s[j];
//   s[j]=temp;
//   i++;
//   j--;
// }
// console.log(s);


// var s = "soumay";

// let i = 0;
// let j = s.length - 1;

// let arr = s.split("");

// while (i <= j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;

//     i++;
//     j--;
// }

// s = arr.join("");

// console.log(s);


var s ='racecar';
var i =0;
var j = s.length-1;
while(i<=j)
{
  if(s[i]!==s[j]){
    console.log("not palindrome");
    break;
  }
}
console.log("palindrome");
 


