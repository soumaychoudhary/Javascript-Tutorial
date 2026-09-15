// rest parameter is something  that allows a function to accept any number of argument as an array .
// a function can have one  rest parameter and rest parameter must be the last parameter.

function collectThings(x,...y){
    console.log(x);
    console.log(y);
}
collectThings(1,2,3,4,5,6,7,8,9);