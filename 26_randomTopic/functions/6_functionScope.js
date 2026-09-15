// a variable defined inside the function caannot be accessed anywhere outside the function.
// a function can access all  the variable inside the scope it is define .

var a=23;
const b=20;
let c=40;
function doSomething(){
    let x=10;
    const y=20;
    var z=30;
    console.log(x,y,z);
    console.log(a,b,c);
}

doSomething();