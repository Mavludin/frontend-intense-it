// Function declaration

// Hoisting (Поднятие)
// Объявление function sayHi() {} идет наверх
// sayHi();

// function sayHi() {
//     console.log('Hello');
// }

// sayHi();

// var и Hoisting
// var a;
// a = 10;
// console.log(a); // undefined 
// var a = 10;
// console.log(a); // 10

// console.log(b);
// let b = 10;

// console.log(c);
// const c = 12;

// Function expression

// Можно использовать до объявления но undefined это не функция
// func1(); // var func1; === undefined()

// var func1 = function() {
//     console.log('Some code');
// }

// Так можно
// func1();

// Нельзя использовать до объявления
// func2();
// func3();

// const func2 = function() {
//     console.log('Some code');
// }

// let func3 = function() {
//     console.log('Some code');
// }

// Так можно
// func2();
// func3();

// Вызов функции и сама функция
// let num1 = 10; // 10
// let num2 = num1; // 10

// function foo() {
//     console.log('Какой-то код');
// }

// console.log(foo); // Сама функция
// console.log(foo()); // Значение, возвращаемое функцией

// const funcCopy = foo;
// funcCopy(); // Какой-то код
// foo(); // Какой-то код

// const funcValue = foo();
// console.log(funcValue); // undefined

// Коллбеки и анонимные функции

// const num = 10;

// let func; // undefined

// if (num > 0) {
// Функция без имени после "function" ==> анонимная
//     func = function () {
//         console.log('Положительное число');
//     }
// } else {
//     func = function () {
//         console.log('Отрицательное число');
//     }
// }

// func()

// коллбэки
// function foo() {
//     if (0 > 1) {
//         console.log('TRUE');
//     } else {
//         console.log('FALSE');
//     }
// }

// function foo(condition, callback1, callback2) {
//     if (condition) {
//         callback1();
//     } else {
//         callback2();
//     }
// }

// foo(
//     0 > 1,
//     function() { console.log('TRUE') },
//     function() { console.log('FALSE') },
// )

// function ifTrue () {
//     console.log('TRUE');
// }

// function ifFalse () {
//     console.log('TRUE');
// }

// let num = 10;

// foo(
//     num > 0,
//     ifTrue,
//     ifFalse,
// )

// const userInput = prompt('Введите что-то');

// foo(
//     userInput,
//     function () { console.log(userInput) },
//     function () { console.log('Введено что-то непонятное') }
// )

// Стрелочные функции
// const arrowFunc = () => {
//     // Какой-то код
// }

// Если одна строка кода, то return и {} не нужны
// const sum = (a, b) => a + b;

// const foo = () => console.log('Что-то');

// Если параметр только один, то скобки можно опустить
// const foo1 = a => console.log(a);

// До объявления такую функцию нельзя использовать!!!