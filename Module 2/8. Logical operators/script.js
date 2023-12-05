// ИЛИ (||), И (&&), НЕ (!), ??

// ИЛИ (||)
// Таблица истинности
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// Как ведет себя оператор || с значениями
// console.log(1 || 0); // 1
// console.log(undefined || null); // null
// console.log('' || '0'); // '0'
// console.log(undefined || null || 15 || ''); // 15
// console.log('123' || null || 15 || ''); // '123'

// let num = 10;
// if (num > 10 || num < 5) {
//     console.log('Число больше 10 либо меньше 5');
// } else {
//     console.log('Неверное число');
// }

// const message = (num > 10 || num < 5) 
//     ? 'Число больше 10 либо меньше 5'
//     : 'Неверное число'

// console.log(message);

// И (&&)
// Таблица истинности
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// // Как ведет себя оператор && с значениями
// console.log(1 && 0); // 0
// console.log(0 && 1); // 0
// console.log('123' && 15); // 15
// console.log(100 && ' ' && undefined && null); // undefined

// let num = 10;
// if (num >= 1 && num <= 20) {
//     console.log('Число находится в рамках диапазона 1 - 20');
// } else {
//     console.log('Неверное число');
// }

// const userInput = prompt('Введите любое число');

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

// НЕ (!)
// console.log(!0); // true
// console.log(!'123'); // false

// let num1 = 10;
// let num2 = 12;

// if (num1 !== num2) {

// } else {

// }

// Можно и так, но лучше написать, как выше
// if (!(num1 === num2)) {

// } else {
    
// }

// let num = 10;

// if (num >= 1 && num <= 20) {

// } else {

// }

// const inRange = num >= 1 && num <= 20;

// if (!inRange) {
//     console.log('Число 10 не в диапазоне');
// }

// Двойное отрицание (!!)
// console.log(!!5); // true
// console.log(!!''); // false

// Альтернатива
// console.log(Boolean('')); // false

// Оператор ИЛИ - когда что-то может пойти не так (edge cases)
// Задаем значение по умолчанию
// const userInput = Number(prompt('Введите любое число')) || 0

// if (userInput % 2 === 0) {
//     console.log(`Число ${userInput} - четное`);
// } else {
//     console.log(`Число ${userInput} - нечетное`);
// }

// Приоритет
console.log(1 || 0 && null); // 1 || 0 === 1

// Меняем приоритет
console.log((1 || 0) && null); // 1 && null === null

// Сокращения
let value = NaN;

value &&= 10; // value && 10 === NaN
value ||= 20; // value || 20 === 20
value &&= 30; // value && 30 === NaN
value ||= 40; // value || 40 === 40

