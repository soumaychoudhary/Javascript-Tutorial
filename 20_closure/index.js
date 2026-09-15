// A closer is the combination of a function bundled together with references to its surrounding state . in other words , a closure 
// gives a function access to its outer scope . 

/**

🔹 What is a Closure?

    A closure is created when:

        - You have a function inside another function,

        - The inner function remembers variables from the outer function,

        - Even after the outer function has finished running.

    👉 In short: Closure = function + its surrounding variables (scope).

 */


function init(){
    let name = "soumay"
    function displayName(){
        console.log(name);
    }
    displayName();
}
init();