// declaration vs defination :-- they are same

function printMe(){
    console.log("printing...");
}
printMe();

// code

function printThis(param){
    console.log(param);
}
printThis('tapas');

//code

/*
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

const printMee =  function(){
    console.log("print");
}
printMee();

//code

const printPara = function(a,b){
    console.log(a,b);
}
printPara(10,20);

// code

function sum(a,b){
    return a+b;
}

// code



