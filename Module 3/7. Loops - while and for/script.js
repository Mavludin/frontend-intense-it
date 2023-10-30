// Циклы

// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');

// while

// while (true) { // Всегда true - бесконечный цикл
//     console.log(1);
// }

// while ('       ') { // Всегда true - бесконечный цикл
//     console.log(1);
// }

// let i = 1;

// while (i < 6) { // 6 < 6 === false - Выход из цикла
//     console.log('hello world'); // Вывод 5 раз

//     i++;
// }

// Обратный цикл
// let i = 5;

// while (i > 0) {
//     console.log('hello world'); // Вывод 5 раз

//     i--; 
// }

// Задача - Вывести в консоль числа от 1 до 6 включительно

// let i = 1;

// while (i <= 6) {
//     console.log(i); // 1, 2, 3, 4, 5,  6

//     i++;
// }

// Задача - Вывод четных чисел от 0 до 10

// let i = 0;

// // первое решение
// while (i <= 10) {
//     if (i % 2 === 0) {
//         console.log(i); // 2, 4, 6, 8, 10
//     }

//     i++;
// }

// // второе решение
// while (i <= 10) {
//     console.log(i); // 2, 4, 6, 8, 10

//     i+=2;
// }

// Задача - Вычислить сумму чисел от 1 до 5;
// Вывести - 'Сумма чисел от 1 до 5 равна {сумма}'

// let sum = 0;
// let i = 1;

// while (i <= 5) {
//     sum += i; // 1, 3, 6, 10, 15

//     i++;
// }

// console.log(sum); // 15

// Цикл for

// for (let i = 1; i <= 5; i++) {
//     console.log(i); // 1, 2, 3, 4, 5
// }

// let i = 1;

// for (; i <= 5; i++) {
//     console.log(i); // 1, 2, 3, 4, 5
// }

// let i = 1;

// for (;;) { // Бесконечный цикл
//     console.log(i); // 1, 2, 3, 4, 5
// }

// Выход из цикла - break

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) break; // Выход из цикла

//     console.log(i); // 1, 2
// }

// let i = 1;

// for (;;i++) {
//     if (i > 5) break;

//     console.log(i); // 1, 2, 3, 4, 5
// }

// Пропуск итерации - continue

// let i = 1;
// while (i <= 10) {

//     console.log('код до условия')

//     if (i % 2 !== 0) {
//         i++; // увеличить шаг
//         continue;
//     }

//     console.log('код после условия')

//     if (i % 2 === 0) {
//         console.log(i); // 2, 4, 6, 8, 10
//     }

//     i++;
// }

// for (let i = 1; i <= 5; i++) {
//     if (i % 2 !== 0) continue;

//     console.log(i);
// }

// do while

// let i = 0;

// do {
//   console.log(i);  
// } while (i); // false

// while (i) { // false
//     console.log(i);
// }

// Задачи из learn.javascript.ru
// let i = 3;

// while (i) {
//   console.log(i--);
// }

// let i = 0;
// while (++ < 5) console.log( 3 );

// let num = +prompt('Введите число', '');

// while (num <= 100 && num) {
//     num = prompt('Введите число', '');

//     console.log(num);
// }

// console.log(num)

// let num;

// do {
//     num = prompt('Введите число', '');
// } while (num <= 100 && num)