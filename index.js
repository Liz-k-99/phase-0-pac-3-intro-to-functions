// Follow along with the examples here
function sayHello () {
    console.log("Hello");
};
//sayHello();

function sayHelloGuadalupe () {
    console.log('Hello Guadalupe');
};
//sayHelloGuadalupe();

const sayHelloLiz = () => {
    console.log('Hello Liz');
};
//sayHelloLiz();

const sayHelloToSam = () => {
    return 'Hello Sam!';
};
//console.log(sayHelloToSam());
//sayHelloGuadalupe;
//sayHelloLiz;

function sayHelloAnyone (firstName) {
    return `Hello ${firstName}, how are you today?`;
};
//console.log(sayHelloAnyone('Tom'));

const sayHi = (fName, age) => {
    return `My name is ${fName} and I am ${age}`;
};
//console.log(sayHi('Liz', 24));

function introduce (name, age, fact){
    console.log(`Hello my name is ${name}, I am ${age} years old. ${fact}`);
}
//introduce('Julius', 35, 'I transformed Rome from a republic to an empire, grabbing power through ambitious political reforms');

const isNumEven = (num) => {
    if (num % 2 === 0) {
        return 'Number is even'
    } else if (num % 2 === 1){
        return 'Number not even';
    } else {
        return 'Please enter a valid nuber';
    }
};
//console.log(isNumEven(100));

function add (x, y) {
    return x + y;
};
console.log(add(5, 8));

