// clunky old gross way of instantiating empty object
// let person = new Object();

// instantiating an object using object literal notation
let person = {
    firstName: "Louie"
};
console.log(person);

// the bracket and dot operators of course still work the same
person.lastName = "Williford";
person["address"] = {};
person.address.street = "123 Main St.";
person.address.city = "Colorado Springs";
console.log(person);