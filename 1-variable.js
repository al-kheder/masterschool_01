
/** The scope of variables declared with var */

// global scope 
console.log('global scope');

// global variable 
var num1 = 50

function print1(){
    var sq = num1 * num1;
    console.log(sq);    
}

console.log(num1); // 50
print1();


// local scope 
function print2(){
    var num2 = 100;
    console.log(num2);
}

print2(); // 100
//console.log(num2); // ReferenceError: num2 is not defined


// re-declaring variables with var
var num3 = 200;
console.log(num3); // 200
var num3 = 300;
console.log(num3); // 300

