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


// FUNCTIONS, CONTEXT, AND THE EXECUTION STACK
function b() {
  console.log('IN B')
}

function a() {
  b();
  console.log('IN A');
  b();
}

a();
