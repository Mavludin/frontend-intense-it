// Условие if

// if () { // if (условие) { код }

// }

// фигурные скобки можно опустить
// if (true) console.log('Что-то сделали')

// const num = 10;

// if (num) { // true Boolean(num) => Boolean(10)
//     console.log('Команда 1!')
//     console.log('Команда 2!')
// }

// // '', 0, false, null, undefined, NaN

// if ('') { // Пустая строка это false
//     console.log('Не выполнится')
// }

// let num = 10;
// if (num > 15) {
//     num += 20
// }

// console.log(num); // 10, т.к. условие false

// num = 100;

// if (num > 15) {
//     num += 20
// }

// console.log(num); // 120, т.к. условие теперь true

// блок else (иначе сделай что-то другое)

// const str = 'Hello World!';

// if (str === '') {
//     console.log('Строка пустая');
// } else {
//     console.log('Строка не пустая'); // выполнится
// }

// const str = '';

// if (str === '') {
//     console.log('Строка пустая'); // выполнится
// } else {
//     console.log('Строка не пустая');
// }

// const userInput = prompt('Какое «официальное» название JavaScript?');

// if (userInput === 'ECMAScript') {

// } else {

// }

/*
Задача. Пользователь вводит число.
 - Проверить, является ли оно четным:
 - Если да, то вывести 'Число {число} - четное',
    иначе 'Число {число} - нечетное'
*/

// const userInput = prompt('Введите число');

// console.log(userInput);

// Условие можно хранить в переменной
// const isEven = userInput % 2 === 0;
// if (isEven) {
//     console.log(`Число ${userInput} - четное`)
// } else {
//     console.log(`Число ${userInput} - нечетное`)
// }

// Добавляем дополнительное условие для проверки на число
// if (
//     userInput !== null && 
//     userInput !== '' && 
//     Number(userInput)
// ) {
//     if (userInput % 2 === 0) {
//         console.log(`Число ${userInput} - четное`)
//     } else {
//         console.log(`Число ${userInput} - нечетное`)
//     }
// }

// Много условий else if

// if () { // Условие 1

// } else if () { // Условие 2 

// } else if () { // Условие 3

// } else { // Иначе - когда ни одно из этих условий не выполнилось

// }

// const num = 10;

// if (num > 0) {
//     console.log('Положительное')
// } else if (num < 0) {
//     console.log('Отрицательное')
// } else {
//     console.log('Ноль')
// }

// Тернарный оператор ? :

// const age = 20;
// let isAdult; // undefined

// if (age > 18) {
//     isAdult = true
// } else {
//     isAdult = false
// }

// Решение с помощью тернарного оператора
// const isAdult = age > 18 ? true : false

// Можно упростить
// const isAdult = age > 18

// console.log(isAdult);

// const message = age > 18 ? 'Взрослый' : 'Не взрослый'

// console.log(message);

// Тернарный оператор с многими условиями
// const num = 10;
// const isNotPositive = num < 0 ? 'Отрицательное' : 'Ноль'
// const result = num > 0 ? 'Положительное' : isNotPositive