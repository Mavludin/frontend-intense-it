// Преобразования в строку
// Неявное в строку
// alert(50); // '50'
// console.log(typeof true); // 'boolean'
// console.log('string' + undefined); // 'stringundefined'
// console.log('string' + 5 + true); // 'string5true'

// console.log('' + null); // 'null'
// let num1 = 100;
// let num2 = 2;
// console.log('' + (num1 / num2)); // '50'

// Явное в строку
// console.log(String(100)); // '100'
// console.log(String(null)); // 'null'
// console.log(String(undefined)); // 'undefined'
// console.log(String(true)); // 'true'
// console.log(String(false)); // 'false'
// console.log(String(num1 / num2)); // '50'

// Преобразование в число
// Неявное в число
// console.log('100' / '2'); // 50
// console.log('100' - '2'); // 98
// console.log('100' * '2'); // 200
// console.log('100' + '2'); // 1002
// console.log('   50    \n' - 100); // -50
// console.log(Number('100') + Number('2')); // 102
// console.log(+'100' + +'2'); // 102 - Унарный оператор преобразования в число
// console.log('abc' / 5); // NaN (Not a number)
// console.log('   a50    \n' - 100); // NaN
// console.log(typeof NaN); // 'number'
// console.log(true + false); // 1 + 0 === 1
// console.log(null + 50); // 0 + 50 === 50
// console.log(undefined + null); // NaN
// console.log(undefined + true); // NaN
// console.log(undefined + 100); // NaN

// Явное в число
// console.log(Number('100' + '2')); // Number('1002') === 1002
// console.log(Number(undefined));
// console.log(Number(null)); // 0
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(true + false)); // Number(1) - Number даже не нужен
// console.log(Number('')); // 0
// console.log(Number('        ')); // 0
// console.log(Number('   \n     ')); // 0
// console.log(Number('abcbcb121312')); // NaN

// Задача - есть userInput, преобразовать его в число и вывести в консоль

// const userInput = Number(prompt('Введите значение'));
// console.log(userInput);

// Преобразования в логическое значение
// Явное
// Только эти значения являются ложными
// console.log(Boolean('')); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(false)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(NaN)); // false

// console.log(Boolean(' ')); // true
// console.log(Boolean(100)); // true
// console.log(Boolean(-100)); // true
// console.log(Boolean('0')); // true

// console.log(Number(Boolean(' ')));
// Boolean(' ') === true
// Number(true) === 1

// console.log(Boolean(Number('0'))); // false
// Number('0') === 0
// Boolean(0) === false

console.log(12 / "  4 "); // 3
console.log(12 / "  4 \n"); //
console.log(5 * "10z"); //
console.log(5 * false); // 
console.log(5 * null); //
console.log(2 + true); //
console.log(2 + NaN); //
console.log(2 + undefined); //