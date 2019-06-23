// var person = new Object();

// person['firstname'] = 'Tony';
// person['lastname'] = 'Alicea';

// console.log(person)
// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = '111 Main St.';
// person.address.city = 'Houston';
// person.address.state = 'Texas';
// console.log(person);


// // same as new Object()!
// var Tony = {
//     firstName: 'Tony',
//     lastName: 'Alicea',
//     address: {
//         street: '111 Main St',
//         city: 'Houston',
//         state: 'Texas'
//     }
// };
// console.log(Tony);


// BY REFERENCE vs BY VALUE

// by value!
//var a = 1; // assigned to a place in memory
//var b = a; // assigned to its own place in memory, then a copy of a's primitive value is made to the 
// new memory address

// // by reference!
// var a = {
//     object: true
// }
// var b = a; // no new object or copy is created! 'b' just references the same place in memory as 'a'
// // all objects pass by reference in javascript!


// OBJECTS, FUNCTIONS AND 'THIS'

// functions are objects!
// function invoked -> new execution context created and put on execution stack
// a new 'this' is assigned

// 'this' is the Window object
console.log(this);


// 'this' is still the Window object
function a() {
    console.log(this);
    this.newVariable = 'hello'; // attaches newVariable to global object!
}
a();

// 'this' is still the Window object!
var b = function () {
    console.log(this);
    console.log(newVariable);
}
b();

console.log(newVariable);




var c = {
    name: 'The c object',
    log: function (updatedName) {
        this.name = updatedName;
        console.log(this);
    }
};

c.log('Updated c object'); // 'this' is reassigned to be the object the method is called on


// THIS IS WEIRD!
var d = {
    name: 'The d object',
    log: function () {
        // assign a var that points to the current 'this'
        // let self = this;

        console.log(this);

        // does NOT reassign the d objects name property!
        var setName = function (updatedName) {
            // this.name refers to the global object!!
            // d's name property is never reassigned
            this.name = updatedName;
            console.log(this);

            // THIS WORKS
            // self.name = updatedName
            // console.og(self);
        }
        setName('Updated d object!');
        console.log(this);
    }
};

d.log('Updated d object'); // 'this' is reassigned to be the object the method is called on

