// Synchronous

/*  console.log('One');
    console.log('Two');
    console.log('Three');
    window.alert('Four');
    console.log('Five');
 */

// Asynchronous

/* console.log('One');
setTimeout(() => {
    console.log('Two');
}, 0);
console.log('Three');
console.log('Four');
 */

//call stack
//web api


console.log('one'); // 1
setTimeout(() => {
    console.log('two'); // 3
}, 1000);
setTimeout(() => {
    console.log('four'); // 5
}, 0);
console.log('three'); // 2