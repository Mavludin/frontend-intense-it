// DRY - don't repeat yourself

// Функции - синтаксис

// // без параметров
// function randomFunction() {
//     console.log('какой-то код');
// }

// randomFunction(); // 'какой-то код'

// С одним параметром
// function greet(userName) {
//     console.log(`Добро пожаловать ${userName}`);
// }

// greet('user 1'); // `Добро пожаловать user 1`
// greet('user 2'); // `Добро пожаловать user 2`

// С несколькими параметрами
// function getSum(a, b) {
//     console.log(a + b);
// }

// getSum(1, 2); // 3
// getSum(2, -10); // -8

// let num1 = 5;
// let num2 = 10;

// getSum(num1 - num2, num1 / num2); // 3
// getSum(num1 * num2, 10); // -8
// getSum(10, num1 / num2); // 3
// getSum(num1 * num2, num1 / num2); // -8

// const num1 = prompt('Введите значение 1');
// const num2 = prompt('Введите значение 2');
// getSum(num2, num2);

// 

/*

Задача - Дано число num. Написать функцию checkNumber, 
которая проверят знак этого числа и 
выводит соответствующее сообщение:
a. Число ${num} положительное
b. Число ${num} отрицательное
c. Число ${num} - ноль
d. Если num не число, вывести:
Укажите число!

*/

// Решение:
// function checkNumber(num) {
//     if (num > 0) {
//         console.log(`Число ${num} положительное`);
//     } else if (num < 0) {
//         console.log(`Число ${num} отрицательное`);
//     } else if (num === 0) {
//         console.log(`Число равно нулю`);
//     } else {
//         console.log('Укажите число');
//     }
// }

// checkNumber(-1);
// checkNumber(5);
// checkNumber(50);
// checkNumber(5 - 5);
// checkNumber(0);

// Объявили параметр, но не передали значение

// function getDiff(a, b) {
//     console.log(a - b);
// }

// getDiff(1); // a = 1, b = undefined => NaN
// getDiff(); // a = undefined, b = undefined => NaN

// Значения по умолчанию

// let num = 0;
// let num2 = num || 5; // 5

// let str = '';
// let str2 = str ?? 'пустая строка';

// Проверка параметров
// function getDiff(a, b) {

//     if (a === undefined || b === undefined) {
//         console.log('Укажите числа верно');
//     } else {
//         console.log(a - b);
//     }
    
// }

// function getDiff(a, b) {

//     if (a === undefined) {
//         a = 0;
//     } else if (b === undefined) {
//         b = 0;
//     } else {
//         console.log(a - b);
//     }
    
// }

// function getDiff(a, b) {
//     a = a ?? 0;
//     b = b ?? 0;

//     console.log(a - b);
// }

// function getDiff(a = 0, b = 0) {
//     console.log(a - b);
// }

/* 
Задача - Написать функцию getSum, которая принимает диапазон чисел
от start до end и выводит в консоль эту сумму

Если диапазон указан не верно, вывести:
Укажите диапазон чисел верно
*/

// function getSum(start, end) {
//     if (end > start) {
//         let sum = 0;

//         for (let i = start; i <= end; i++) {
//             sum += i;
//         }
        
//         console.log(sum);
//     } else {
//         console.log('Укажите диапазон чисел верно')
//     }

// }

// getSum(1, 10);
// getSum(5, 15);

// Примеры встроенных функций

// alert(); // 
// alert('123123'); // 
// console.log('');
// console.log('123');

// const num = prompt('Введите число');

// Number(), String(), Boolean()