// not the best way to instantiate an object but bear with me
let person = new Object();

// * adding properties and methods

person["firstName"] = "Louie";
// the person object now has a key called firstName 
// which points to the primitive stored in memory
person["lastName"] = "Williford";

// you can use the string to now access this key's value
// ...kinda clunky but works
let firstNameProperty = "firstName";
console.log(person[firstNameProperty]);

// you can also use the dot operator to access an objects properties
console.log(person.firstName);

person.address = new Object();
// you can also use the dot operator to create properties and methods 
// it works the same way as the [] operator above
person.address.street = "123 Main St.";
person.address.city = "Colorado Springs";
person.address.state = "CO";