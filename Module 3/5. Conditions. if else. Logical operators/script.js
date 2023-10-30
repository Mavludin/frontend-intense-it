// Оператор ИЛИ (||)

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true
// console.log(false || false); // false

// console.log(1 || 0); // 1
// console.log(0 || 1 || ''); // 1
// console.log(null || '' || undefined); // undefined
// console.log(NaN || undefined || 8); // 8

// let num = 11;

// if (num > 0 || num % 2 === 0) { // true
//     console.log()
// }

// let num1 = 10;
// let num2 = '';
// let num3;

// let result = num1 || num2 || num3; // 10

// if (num1) {
//     result = num1
// } else if (num2) {
//     result = num2
// } else {
//     result = num3
// }

// let num = prompt('Введите число', '') || 0;

// if (num === '') {
//     num = 0;
// }

// Оператор И (&&)

// console.log(1 && 0) // 0
// console.log(1 && 0 && '123') // 0
// console.log(1 && 2 && 3) // 3

// console.log(1 && 2 || '') // 1 && 2 => 2 || '' => 2

// let num = 10;

// if (num > 0 && num % 2 === 0) {

// }

// let str = '';

// if (str) { // если true

// }

// if (!str) { // если false (пусто)

// }

// console.log(!!'string') // true
// console.log(Boolean('string')) // true

// console.log(1 && (2 || '')) // 2
// console.log(1 && 2 || '') // 2