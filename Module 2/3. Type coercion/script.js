// alert, prompt, console.log, [confirm]

// alert
// alert(15);
// alert(true);
// alert(undefined);
// alert(null);
// alert('какой-то текст');

// console.log
// console.log(15);
// console.log(true);
// console.log(undefined);
// console.log(null);
// console.log('какой-то текст');

// let greeting = 'Hello World';
// let num = 50;
// alert(greeting);
// console.log(greeting);

// alert(num);
// console.log(num);

// let hello = 'Hello';
// let world = 'World';

// const greeting = hello + ' ' + world;
// const greeting = hello + ' ' + world + '!';
// console.log(greeting);

// шаблонные строка - в обратных кавычках ``
// const greeting = `${hello} ${world}!`
// console.log(greeting);

// prompt
// const userInput = prompt('Введите что-нибудь', 0);
// console.log(userInput); // строка или null

// const userInput1 = prompt('Введите значение 1');
// const userInput2 = prompt('Введите значение 2');

/* Задача 1
- Прочитать 2 значения, введенные пользователем
- Вывести их в консоли в таком формате: 
Значение 1 - [значение 1], значение 2 - [значение 2]
*/

// console.log(
//     'Значение 1' + ' - ' + userInput1 + ' значение 2' + ' - ' + userInput2
// );

// const string1 = `Значение 1 - ${userInput1}`;
// const string2 = `Значение 2 - ${userInput2}`;

// console.log(`Значение 1 - ${userInput1}, значение 2 - ${userInput2}`);

// console.log(`${string1}, ${string2}`);

// работаем с числами
// console.log(50 + 100);

// let num1 = 50;
// let num2 = 100;

// console.log(num1 + num2);
// console.log(num1 + num2 / 2);
// console.log((num1 + num2) / 2);

// console.log('Результат:', num1 + num2);

// Неявное преобразование в строку
// console.log('Результат:' + num1 + num2);
// console.log('Результат: ' + (num1 + num2));

// Неявное преобразование в число
// console.log('10' / '2'); // 5
// console.log('10' * '2'); // 20
// console.log('10' - '2'); // 8
// console.log('10' + '2'); // 102

// Явное преобразование к числу
// console.log(Number('10') + Number('2')); // 12

