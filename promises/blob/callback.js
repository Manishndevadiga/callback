console.log("Connected Successfully");

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(a, b, callback) {
    return callback(a, b);
}

console.log(calculate(10, 2, add));

console.log(calculate(20, 4, function (a, b) {
    return a / b;
}));


const x = a =>console.log(a);

x(10);


//array calback function 

const a=[1,2,3,4,5,-3,-4,2];

function isnegative(n) {
    return n<0
}

const z=a.find(isnegative);

console.log(z);