// Локальные переменные
// console.log('Глобальная область видимости');

// while() {
//  // Локальная
// }

// for () {
//  // Локальная
// }

// if () {
//  // Локальная
// }

// function myFunc() {
//  // Локальная
// }

// function myFunc() {
//     let localVariable = 50;
// }

// console.log(localVariable); // Нет доступа к области функции

// Внешние переменные

// let globalVariable = 50;

// function myFunc() {
//     console.log(globalVariable);
// }

// myFunc(); // 50

// function myFunc() {
//     console.log(globalVariable);
// }

// myFunc(); // ошибка - переменная не объявлена

// Игнорирование глобальных переменных

// let num = 10;

// function myFunc() {
//     let num = 15;
//     console.log(num); 
// }

// let num = 10;
// function myFunc(num) {
//     let num = 0;
//     console.log(num);
// }

// myFunc(100); // 100

// myFunc(); // 15

// Переопределение значений

// let num = 10;

// function myFunc() {
//     num = 15;
//     console.log(num); 
// }

// myFunc(); // 15

// Вложенные локальные блоки

// console.log('Глобальная');

// let globalVariable = 'some data';

// function checkNumber(num) {
//     console.log('Локальная')

//     let globalVariable = '123';
//     console.log(globalVariable); // '123'
//     if (true) {
//         // Подлокальная
//         globalVariable = '222';

//         console.log(globalVariable); // '222'
//     } else if () {
//         // Подлокальная
//     console.log(globalVariable);

//     } else {
//         // Подлокальная
//     console.log(globalVariable);

//     }

//     console.log(globalVariable); // '222'
// }

// const dollarRate = 80;

// function dollarsToRoubles(dollars) {
//     console.log(dollars * dollarRate);
// }

// dollarsToRoubles(1); // 80
// dollarsToRoubles(2); // 160
// dollarsToRoubles(3); // 240
// dollarsToRoubles(100); // 8000

// Возврат значения

// function myFunc() {}

// console.log(myFunc()); // undefined

// function myFunc(a, b) {
//     console.log(a + b);
// }

// myFunc(1, 2); // 3
// console.log(myFunc(1, 2)); // 3 -  консоли и undefined

// const sum = myFunc(1, 2); // undefined

// function myFunc(a, b) {
//     return a + b
// }

// // console.log(myFunc(1, 2)); // 3

// const sum = myFunc(1, 2); // 3

// if (sum % 2 === 0) {
//     console.log('Сумма четная')
// }

// function myFunc() {
//     return 'какое-то значение'

//     console.log('код никогда не выполнится')
// }

// function myFunc() {
//     // неправильно
//     return
//     'какое-то значение'
// }

// if () {
//     let num = 10;
// }

// console.log(num)

// let num = 10;

// if () {
//     console.log(10)
// }

// function outputEvenAndOddNumbers(start, end) {

//     if (start >= end) { // true
//         // return 'Укажите правильный диапазон';

//         console.log('Укажите правильный диапазон');
//         return; // undefined и прекратит цикл
//     }

//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             console.log(`${i} - четное`);
//         } else {
//             console.log(`${i} - нечетное`);
//         }
//     }
// }

// outputEvenAndOddNumbers(1, 5);
// outputEvenAndOddNumbers(0, 10);
// outputEvenAndOddNumbers(-12, 10);
// outputEvenAndOddNumbers(15, 5);


// function checkNumber(num) {
//     // if (num > 0) {
//     //     console.log('пол')
//     // } else if (num < 0) {
//     //     console.log('отр')
//     // } else {
//     //     console.log('ноль')
//     // }

//     if (num > 0) {
//         return 'пол';
//     }
    
//     if (num < 0) {
//         return 'отр'
//     }
    
//     return 'ноль';
// }