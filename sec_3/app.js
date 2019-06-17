function greet(name) {
    name = name || '<Your name here>';
    console.log(`Hello ${name}`);
}

greet('Logan');
greet(); // doesnt throw an error!