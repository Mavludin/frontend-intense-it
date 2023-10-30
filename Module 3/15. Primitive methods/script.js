// Math max, min, random

// console.log(Math.max(1, 2, 3)); // 3
// console.log(Math.min(1, 2, 3)); // 1

// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()));

// Задача - бесконечный цикл

// let i = 0;
// while (i != 10) {
//   i = Number((i + 0.2).toFixed(1));

// //   if (i >= 11) {
// //     break
// //   }

//   console.log(i);
// }

// Задача - decimals

// const decimals = (num, digits) => {
//     if (typeof num === 'number') {
//         return num.toFixed(digits);
//     }
    
//     return 'Не число'
// }

// Задача - степень двойки

// const isInteger = (num) => parseInt(num) === num

// const powerOf2 = (num) => {
//     const result = Math.sqrt(num);
//     // return isInteger(result);

//     return Number.isInteger(result);
// }

// charAt и at

// const str = 'string';

// console.log(str.charAt(0)); // 's'
// console.log(str.at(0)); // 's'

// console.log(str.charAt(-1)); // ''
// console.log(str.at(-1)); // 'g'

// console.log(str.at(10)); // undefined
// console.log(str.charAt(10)); // ''

// Примитивы не модифицируемы (иммутабельны)
// let num = 10.55;
// num.toFixed(1);

// console.log(num); // 10.55

// num = +num.toFixed(1);

// console.log(num); // 10.6

// Получение подстроки

// const greeting = 'Hello World';
// console.log(greeting.slice()); // 'Hello World'
// console.log(greeting.slice(1)); // 'ello World'
// console.log(greeting.slice(0, 5)); // 'Hello'
// console.log(greeting.slice(-1)); // 'd'
// console.log(greeting.slice(-5)); // 'd'
// console.log(greeting.slice(-5, -1)); //

// indexOf, lastIndexOf

// const greeting = 'Hello World World';

// console.log(greeting.indexOf('World')); // 6
// console.log(greeting.indexOf('o')); // 4

// console.log(greeting.lastIndexOf('World')); // 12
// console.log(greeting.lastIndexOf('o')); // 13

// Задача - поиск гласных букв

// const str1 = 'Hello World'; // 3
// const str2 = 'random string'; // 3
// const str3 = 'birth day'; // 3
// const str4 = 'some random string'; // 5
// const str5 = 'STRING'; // 1

/* 
console.log(amountOfVowels(str1)) // 3
console.log(amountOfVowels(str2)) // 3
console.log(amountOfVowels(str3)) // 3
console.log(amountOfVowels(str4)) // 5
console.log(amountOfVowels(str5)) // 1
*/

// const amountOfVowels = (str) => {
//     let count = 0;

//     // Решение 1
//     // for (const char of str.toLowerCase()) {
//     //     if (
//     //         char === 'a' ||
//     //         char === 'e' ||
//     //         char === 'i' ||
//     //         char === 'o' ||
//     //         char === 'y' ||
//     //         char === 'u'
//     //     ) {
//     //         count++
//     //     }
//     // }

//     const vowels = 'aeioyu';

//     for (const char of str.toLowerCase()) {

//         // Решение 2
//         // if (vowels.indexOf(char) !== -1) {
//         //     count++
//         // }

//         // Решение 3
//         if (vowels.includes(char)) {
//             count++
//         }
//     }

//     return count
// }

// const str = 'random string'

// console.log(str.startsWith('o')); // false
// console.log(str.startsWith('random')); // true
// console.log(str.startsWith('r')); // true

// console.log(str.endsWith('a')); // false
// console.log(str.startsWith('string')); // true
// console.log(str.startsWith('ing')); // true

// null и undefined - ошибки

// console.log(null.slice()); // Ошибка
// console.log(undefined.length); // Ошибка
