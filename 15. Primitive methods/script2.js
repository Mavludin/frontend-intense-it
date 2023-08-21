// Методы примитивов

// const str = 'string';
// console.log(str.length); // 6
// console.log(str.toUpperCase()); // 'STRING'
// console.log(str.toLowerCase()); // 'string'

// let num = 12.5;
// console.log(num.toFixed(5)); // '12.50000'
// console.log(num); // 12.5

// num = num.toFixed(5);
// console.log(num); // '12.50000'
// console.log(+num); // 12.5

// const num2 = 55.35; => 55.3499999999999
// console.log(num2.toFixed(1)); // '55.3'

// const num3 = 55.33;
// console.log(num2.toFixed(1)); // '55.3'

// console.log(0.1 + 0.2 === 0.3); // false

// +, Number, parseFloat, parseInt

// console.log(Number('123')); // 123
// console.log(Number('123a')); // NaN
// console.log(Number(null)); // 0
// console.log(Number(false)); // 0
// console.log(Number(true)); // 1
// console.log(Number(undefined)); // NaN
// console.log(Number(Infinity)); // Infinity
// console.log(Number(-Infinity)); // -Infinity
// console.log(Number(12.5)); // 12.5
// console.log(Number('12.5')); // 12.5

// console.log(parseInt('123a')); // 123
// console.log(parseInt('123a1231231')); // 123
// console.log(parseInt('a123')); // NaN
// console.log(parseInt(12.5)); // 12
// console.log(parseInt('12.5')); // 12

// console.log(parseFloat('12.5')); // 12.5
// console.log(parseFloat(12.5)); // 12.5

// toString
// const num = 12;
// console.log(num.toString()); // '12'
// console.log(12..toString()); // '12'

// Math

// const num = 12.5;

// console.log('round', Math.round(num)); // 
// console.log('floor', Math.floor(num)); //
// console.log('ceil', Math.ceil(num)); //

// Задача - isNatural

// const isInteger = num => parseInt(num) === num

// const isNatural = num => {
//     if (typeof num === 'number') {
//         return num > 0 && isInteger(num)
//     }

//     return false
// }

// isNatural(50); // parseInt(50) => 50 === 50
// isNatural(50.5); // parseInt(50.5) => 50 === 50.5

// isNaN и isFinite

// console.log(typeof NaN); // 'number'

// const value = '12a';
// console.log(Number(value) === NaN); // false
// console.log(NaN === NaN); // false
// console.log(isNaN(value)); // true

// console.log(isFinite('12a'));
// console.log(isFinite('12'));
// console.log(isFinite(12));
// console.log(isFinite(NaN));
// console.log(isFinite(''));
// console.log(isFinite(Infinity));
// console.log(isFinite(-Infinity));

// Методы строк

// const str1 = 'string';
// const str2 = "string";
// const str3 = `string`;
// const str4 = `
// row1
// row2
// row3
// `;

// const str5 = 'row1 \n row2 \n row3';
// console.log(str5.length); //

// // Экранирование

// const str6 = 'I\'m a teacher'; // I'm a teacher
// const str7 = "I'm a teacher"; // I'm a teacher
// const str8 = 'backshlash \\'; // backshlash \

// Длина строки - результат число

// console.log(''.length); // 0
// console.log(' '.length); // 1
// console.log('\n '.length); // 2
// console.log('123'.length); // 3

// // Доступ к символам

// const greeting = 'Hello World';

// console.log(greeting[0]); 'H'
// console.log(greeting[1]); // 'e'
// console.log(greeting[-1]); // undefined
// console.log(greeting[greeting.length - 1]); // 'd'
// console.log(greeting.at(-1)); // 'd'

// Перебор строки

// let str = 'string';

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// for (const item of str) {
//     console.log(item);
// }

// let str2 = '';

// for (let item of str) {
//     // Не модифицируется
//     console.log(item + 'b')
//     item += 'b'

//     // Новая строка с ожидаемым значением
//     str2 += item + 'b'
// }

// console.log(str2);

// let str = 'string'
// str = 'H' + str.slice(1); // Htring

// console.log(str); // string

// str = 'Htring';

// console.log(str); // Htring

// Примитивы не модифицируются