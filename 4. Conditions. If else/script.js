// >, <, >=, <=, ==, ===, !=, !==

// // Сравнение чисел
// console.log(1 > 0) // true
// console.log(1 < 0) // false
// console.log(1 >= 0) // true
// console.log(1 <= 0) // false
// console.log(1 != 0) // true

// // Сравнение разных типов значений
// console.log('1' == 1) // true
// console.log('1' === 1) // false
// console.log('1' === '1') // true
// console.log(1 === 1) // true
// console.log('1' != 1) // false
// console.log('1' !== 1) // true
// console.log('2' > 1) // true
// console.log('2' == '2') // true
// console.log('2' === '2') // true

// // Сравнение строк
// console.log('string' == 'string') // true
// console.log('string' === 'string') // true
// console.log('strinG' === 'string') // false
// console.log('strinG' < 'string') // true
// console.log('str' < 'stri') // true
// console.log('abc' > 'bbc') // false
// console.log('abc' < 'bbc') // true

// // Исключение с null и undefined
// console.log(null == undefined) // true
// console.log(null == 0) // false
// console.log(undefined == 'string') // NaN == NaN => false
// console.log(Number(undefined)) // NaN
// console.log(Number('string')) // NaN

// Условия if
// let numberList = null;

// 0, undefined, NaN, null, ''

// let num; // undefined

// if ('') { // false == true => false
//     console.log('TRUE')
// }

// if (!'') { // true == true => true
//     console.log('FALSE')
// }

// if (!(1 > 0)) {
//     console.log('Не выполнится')
// }

// if ('string') { // true
//     // ...
// }

// if ('') {
//     console.log('TRUE')
// } else {
//     console.log('FALSE')
// }

// if (1) console.log('TRUE')

// let num = 1;

// if (num > 0) {
//     console.log('Positive')
// } else if (num < 0) {
//     console.log('Negative')
// } else {
//     console.log('Zero')
// }

// let num; // undefined
// // если num равен undefined присвоить 1 иначе 0

// if (num === undefined) {
//     num = 1
// } else {
//     num = 0
// }

// let num1 = 1;
// let num2 = 2;
// let condition = num1 > num2;

// let num = null;

// if (condition) {
//     num = 1
// } else {
//     num = 0
// }

// let num;
// num = num > 0 ? 1 : 0;

// if (num > 0) {
//     num = 1
// } else {
//     num = 0
// }

let num = 1;

let output = num > 0 ? 'Positive' : 
    (num < 0 ? 'Negative' : 'Zero')

// Вынос второго условия в отдельную переменную
// let ifNotPositive = num < 0 ? 'Negative' : 'Zero';
// let output = num > 0 ? 'Positive' : ifNotPositive;

if (num > 0) {
    console.log('Positive')
} else if (num < 0) {
    console.log('Negative')
} else {
    console.log('Zero')
}
