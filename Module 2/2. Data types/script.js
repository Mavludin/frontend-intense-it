// Числа - тип number
console.log(12); // целое число - integer
console.log(22.22); // вещественное число - float

// Строки (текстовая информация) - тип string
console.log("random string"); 
console.log('тоже текс');

// Нулевой тип - null (нюанс - тип является на самом деле object)
console.log(null); // - только одно значение

// Неопределенный тип - undefined
console.log(undefined);

// Логический - тип boolean
console.log(true); // Истино
console.log(false); // Ложь

// Большие числа - тип BigInt
console.log(BigInt(9007199254740991)); // Боль

// Символьный тип - Symbol

// Объект - object
console.log({ 
    age: 30,
    job: 'Teacher',
    city: 'Moscow',
    married: false,
})

// Оператор typeof

console.log(typeof 12); // 'number'
console.log(typeof typeof 12); // typeof 'number' === 'string'
console.log(typeof (typeof undefined)); // typeof 'undefined' === 'string'

// нюанс с null
console.log(typeof null); // 'object'
console.log(typeof true); // 'boolean'
console.log(typeof { name: 'James' }); // 'object'

// Переменные - var

var str;
console.log(str); // undefined

var PI = 3.14;
var message = 'Hello World';

console.log(PI);
console.log(message); // 'Hello World'

var message = 'New message'; // Переприсвоили
console.log(message); // 'New message'

var PI = 'blalbla'; // 
PI = 2222;

// Переменные - let

let str2;
console.log(str2); // undefined

let num = 50;
// let num = 30; // Ошибка - переприсвоение нельзя

num = 30; // Переопределение значения переменной

let flag = true;
let james = {
    age: 30,
    city: 'Moscow'
}

// Переменные - const

const someConstant; // Ошибка - константа без явного значения

const PI = 3.14; // Ошибка - выше через var уже объявлена
const NUMBER_PI = 3.14;

NUMBER_PI = 2222; // Ошибка - константу нельзя переприсвоить