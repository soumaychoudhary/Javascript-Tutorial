// closer is the function that can have free variable together with an environment that can run that variable.

function outer(x){
    function inner(y){
        return x+y;
    }
    return inner;
}
const outerReturn=outer(10);
console.log(outerReturn);
console.log(outerReturn(2));


// When outer() finishes, normally its local variables are no longer directly accessible

// A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();

counter();
counter();
counter();

/*
outer()
│
├── count = 0
│
└── inner()
      │
      └── remembers count
              ↓
          CLOSURE
              ↓
        counter()
              ↓
          count = 1
              ↓
        counter()
              ↓
          count = 2
*/