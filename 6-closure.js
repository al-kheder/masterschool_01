/* closure  
a closure is a functhion that has access to its outer function scope even after the outer function has finished executing.
A closure is a function having access to the parent scope, even after the parent function has closed.
A closure is a function that has access to variables in its parent scope, even when the parent function has returned or closed.
*/


// Example 1
function outerFunction() {
    let outerVariable = 'I am outside!';
    function innerFunction() {
        console.log(outerVariable); // I am outside!
    }
    console.dir(innerFunction);
   innerFunction();
}
 const test = outerFunction();


// Example 2
function counter() {
    let count = 0;
    return function () {
        return ++count;
    }
}

const count1 = counter();
console.log(count1()); // 1
console.log(count1()); // 2

const count2 = counter();
console.log(count2()); // 1
console.log(count2()); // 2
console.log(count2()); // 3


 
