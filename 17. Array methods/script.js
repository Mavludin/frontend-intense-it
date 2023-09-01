/*
Написать функцию, которая меняет 
первую букву в строке на большую и возвращает строку измененную

capitalize('') // ''
capitalize('a') // 'A'
capitalize('apple') // 'Apple'
*/

// const capitalize = (string) => {
//     if (string === '') return ''

//     if (string.legth === 1) return string[0].toUpperCase();

//     // return string[0].toUpperCase() + string.slice(1)
//     return `${string[0].toUpperCase()}${string.slice(1)}`
// }

// capitalize('apple'); // 'Apple'
// capitalize('a'); // 'Apple'
// capitalize(''); // 'Apple'
// capitalize('javascript'); // 'Javascript'

/*
Написать функцию, которая удалят из массива
ложные (falsy) значения и возвращает новый массив

removeFalsy([false, '', ' ', 1, ]) // [' ', 1]
removeFalsy([]) // []
removeFalsy([undefined, null, NaN, 0]) // []
*/

// const removeFalsy = (array) => {
//     if (array.length === 0) return array

//     // const newArray = [];

//     // for (const item of array) {
//     //     if (item) {
//     //         newArray.push(item) 
//     //     }
//     // }

//     // return newArray

//     return array.filter((item) => item);
// }

// console.log(removeFalsy([false, '', ' ', 1, ]));
// console.log(removeFalsy([undefined, null, NaN, 0]));
// console.log(removeFalsy([]));
// console.log(removeFalsy([{age: 12,}, {}, [], [1, 2], null, '', 1, 0, 12]));

// всегда true
// if ([]) {}

// if ({}) {}

// if (() => {}) {}

// Обычно проверяем на пустоту

// const arr = [1, 2, 3];

// if (arr.length > 0) {

// } else {

// }

// let obj = null;
// let arr = null;

// if (arr) {

// }

// if (obj) {
    
// }

// arr = [];
// obj = {};

// if (arr) {

// }

// if (obj) {
    
// }

// split

// let str = 'hello world'; 
// console.log(str.split()); // ['hello world']
// console.log(str.split('')); // ['h', 'e',... 'd']
// console.log(str.split(' ')); // ['hello', 'world']

// str = 'hello, world string1 string2'

// console.log(str.split(', ')); // ['hello', 'world string1 string2']

// str = 'hello, world string1, string2'

// console.log(str.split(', ')); // ['hello', 'world string1', 'string2']

// join
// let array = ['hello', 'world', 'string2'];

// console.log(array.join());
// console.log(array.join(''));
// console.log(array.join(' '));

/*
Написать функцию, которая возводит первую букву
всех слов в строке в верхний регистр и возвращает изм. строку

capitalizeWords('Я изучаю javascript на learn.js')
'Я Изучаю Javascript На Learn.js'
*/

// const capitalizeWords = (string) => {
//     // Решение 1
//     // const words = string.split(' ');

//     // const result = [];

//     // for (const word of words) {
//     //     result.push(`${word[0].toUpperCase()}${word.slice(1)}`)
//     // }

//     // return result.join(' ');

//     // Решение 2 - более современное
//     return string.split(' ')
//     .map((word) => {
//         return `${word[0].toUpperCase()}${word.slice(1)}`
//     })
//     .join(' ')
// }

// console.log(capitalizeWords('Я, изучаю, javascript. на learn.js'))

// reduce

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(
//     (acc, num) => {
//         acc += num
//         console.log(acc)
//         return acc
//     },
//     0 // 0 - исходное значение для acc
// )

// исходное значение acc === 1
// цикл начнется с 2 элемента
// const sum = numbers.reduce(
//     (acc, num) => {
//         acc += num
//         console.log(acc)
//         return acc
//     }
// )

// Решение короче
// const sum = numbers.reduce((acc, num) => acc += num)

// console.log(sum);

/* 
Задача - получить объект из массива

const numbers = [0, 1, 2, 3, 4, 5];

Результат

{
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5
}

*/

const numbers = [0, 1, 2, 3, 4, 5];

// Решение 1
// const obj = {};

// for (const num of numbers) {
//     obj[num] = num
// }

// console.log(obj);

// Решение 2
// const obj = numbers.reduce((result, item) => {
//     result[item] = item;
//     return result
// }, {})

// Решение короче
// const obj = numbers.reduce((result, item) => 
// (result[item] = item, result), {})

// console.log(obj);

// // Домашка - удалить дубли и отсортировать
// const numbers = [1, 1, 1, 2, 0, 10, 15, 5, 20, 15, 30, 30];
// Результат - [0, 1, 2, 5, 10, 15, 20, 30]
