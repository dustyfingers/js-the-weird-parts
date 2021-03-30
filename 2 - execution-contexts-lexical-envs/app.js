// HOISTING AND UNDEFINED
// function b() {
//   console.log('Called b!');
// }
//
// b();
//
// // a === undefined
// let a;
// console.log(a);
//
// if (a === undefined) console.log('a is undefined');
//
// // memory block for a is assigned to string value
// a = 'Hello World!';
//
// console.log(a);


// // FUNCTIONS, CONTEXT, AND THE EXECUTION STACK
// function b() {
//   console.log('IN B');
// }

// function a() {
//   b();
//   console.log('IN A');
//   b();
// }

// a();


// THE SCOPE CHAIN
// function b() {
//   console.log('====================================');
//   console.log(myVar); // returns 1!! not 2 or undefined
//   console.log('====================================');
// }
// function a() {
//   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();
// 
// ==>put function b inside function a, change lexical environment
// function a() {
//   function b() {
//     console.log('====================================');
//     console.log(myVar); // returns 2 
//     console.log('====================================');
//   }
//   var myVar = 2;
//   b();
// }
// var myVar = 1;
// a();


// SCOPE, LET AND ES6
// Scope => where a variable is available in your code
// let => new keyword for creating variables in JS (ES6)
// let is BLOCK SCOPED & is only available in the block 
// in which it was declared...even in loops!


// ASYNC CALLBACKS
// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
