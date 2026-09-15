/* 

######################## typecasting ##################################

JavaScript Type Casting

Type casting (type conversion) means converting a value from one data type to another.

JavaScript has two main types:

Implicit Type Conversion (Type Coercion) — JavaScript converts the type automatically.
Explicit Type Conversion (Type Casting) — We convert the type manually.


Conversion	        Method	        Example	                Result
String → Number	        Number()	Number("10")	        10
String → Integer	parseInt()	parseInt("10.5")	10
String → Decimal	parseFloat()	parseFloat("10.5")	10.5
Number → String	        String()	String(10)	        "10"
Number → Boolean	Boolean()	Boolean(1)	        true
Boolean → Number	Number()	Number(true)	        1
String → Boolean	Boolean()	Boolean("")	        false



operators :--

JavaScript is a dynamic programming language, has various operators to perform operations on data and manipulate values. In this article,
we'll learn the diverse types of operators in JavaScript, exploring their functionalities and providing practical examples to enhance 
your understanding.

Types of operators
Understanding JavaScript operators is the most basic thing for writing efficient and expressive code. By mastering these operators, 
we'll gain the tools needed to manipulate data, make decisions, and create more dynamic and interactive applications.


####################### Arithmetic Operators #############################

   uinary operator
   binary operator

   Operator	  Description	     Example	          
        +	  Addition	      5 + 2	            
        -	  Subtraction	      5 - 2	        
        *	  Multiplication      5 * 2	    
        /	  Division	      5 / 2	        
        %	  Modulus             5 % 2	     
        **	  Exponentiation	  5 ** 2	    
        ++	  Increment	         let x = 5; x++	
        --	  Decrement	         let x = 5; x--	

######################## Assignment Operators #################################

Operator	     Description	                Example	       Equivalent To
        =	         Assigns a value	         x = 5	        x = 5
        +=	         Addition assignment	         x += 2	        x = x + 2
        -=	         Subtraction assignment	         x -= 2	        x = x - 2
        *=	         Multiplication assignment	 x *= 2	        x = x * 2
        /=	         Division assignment	         x /= 2	        x = x / 2
        %=	         Modulus assignment	         x %= 2	        x = x % 2
        **=             Exponentiation assignment	 x **= 2	x = x ** 2

##############################  Comparison Operators  ##############################

        Operator	    Description	                    Example	       Result
        ==	        Equal to (loose comparison)	        5 == "5"	 true
        ===	        Strict equal (type & value)	        5 === "5"	 false
        !=	        Not equal	                        5 != 2	         true
        !==	        Strict not equal	                5 !== "5"	 false
        >	        Greater than	                        5 > 2	         true
        <	        Less than	                        5 < 2	         false
        >=	        Greater than or equal to	        5 >= 5	         true
        <=	        Less than or equal to	                5 <= 2	         false

############################# Logical Operators ###################################

        Operator    Description	         Example	Result
            &&	    Logical AND	        true && false	false
            ||	    Logical OR          true || false	true
            !	    Logical NOT	         !true	        false

############################ Bitwise Operators  ###########################

      Operator	Description	          Example	    Result
        &	    Bitwise AND	           5 & 1	      1
        `	    Bitwise OR	      
        ^	    Bitwise XOR	           5 ^ 1	      4
        ~	    Bitwise NOT	            ~5	         -6
        <<	    Left shift	           5 << 1	      10
        >>	    Right shift	           5 >> 1	      2
        >>>	    Unsigned right shift   -5 >>> 1	     Large positive number

######################### Ternary Operators ################################

    Operator	  Description	                                       Example	                Result
     ? :	      Returns one of two values based on a condition	5 > 2 ? "Yes" : "No"	"Yes"

*/

// Conditionals :--

// let age=53;
// if(age>18){
//     console.log("can vote");
// }
// else{
//     console.log("cannot vote");
// }

// let age = 16;
// let country = "USA";
// let text = "You can Not drive!";

// if (country == "USA") {      //explain these using logical operator
//   if (age >= 16) {
//     text = "You can drive!";
//   }
// }


// if (condition1) {
//   // code to execute if condition1 is true
// }else if (condition2) {
//   // code to execute if the condition1 is false and condition2 is true
// } else {
//   // code to execute if the condition1 is false and condition2 is false
// }

// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 17) {
//   greeting = "Good Afternoon";
// } else {
//   greeting = "Good evening";
// }

// ternary conditional
// let age= 16;
// let text = (age < 18) ? "Minor" : "Adult";
// console.log(text);

// let isMember = true;
// let discount = isMember ? 0.2 : 0;
// console.log(discount)

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// let given_day_no=5;
// switch (given_day_no) {
//   case 0:
//     day = "Sunday";
//     console.log(day);
//     break;
//   case 1:
//     day = "Monday";
//     console.log(day);
//     break;
//   case 2:
//      day = "Tuesday";
//      console.log(day);
//     break;
//   case 3:
//     day = "Wednesday";
//     console.log(day);
//     break;
//   case 4:
//     day = "Thursday";
//     console.log(day);
//     break;
//   case 5:
//     day = "Friday";
//     console.log(day);
//     break;
//   case 6:
//     day = "Saturday";
//     console.log(day);
// }

// truthy falsy values

// 100 is true

// 3.14 is true

// -15 is true

// true is true

// "Hello" is true

// "false" is true

// (7 + 1 + 3.14) is true

// [ ] is true

// { } is true




// 0 is false

// "" is false

// undefined is false

// null is false

// NaN is false

// false is false


// let x = 5;
// console.log(++x);
// console.log(x);

 