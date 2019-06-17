var person = new Object();

person['firstname'] = 'Tony';
person['lastname'] = 'Alicea';

console.log(person)
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = '111 Main St.';
person.address.city = 'Houston';
person.address.state = 'Texas';
console.log(person);