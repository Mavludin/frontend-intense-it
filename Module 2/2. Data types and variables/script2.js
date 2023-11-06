// Типы данных - 8
// Оператор typeof

// console.log(typeof 15); // 'number'
// console.log(typeof 15 + 'random string' + 20); // 
// console.log(typeof (15 + 'random string' + 20)); // string

// Переменные

// var
// var str; // undefined
// var num = 10;

// function foo() {
//     console.log(num);
// }

// foo();

// var num = 'Some text';

// var num; - Поднимается
// console.log(num); // HOISTING (Поднятие) - undefined
// var num = 10; // num = 10;
// console.log(num); // 10

// console.log(num); // 'Some text'

// let
// let num; // undefined
// let str = 'string';
// let str = 'new string'; // Ошибка
// str = 'new string'; // Правильный вариант - присвоение нового значения

// let num; Поднимается тоже, но без значения undefined
// console.log(num); // Ошибка
// let num = 10;

// const
// const PI = 3.14;
// PI = 3.15; // Ошибка

// const SOME_CONST = 'random const';
// const RANDOM_CONST; // Ошибка - надо указывать значение

// Наименование переменных
// Буквы, цифры и символы _ и $

// const знач = 123; // Так лучше не именовывать
// console.log(знач);

// Нотации по именованию переменных
// 1. Camel case - Вербльюжья нотация 
// const newMessage = 'Some message';
// 2. Snake case - змеиная нотация
// const new_message = 'Some message';
// 3. Pascal case - паскалевый подход
// const NewMessage = 'Some message';

// Регистр имеет значение
// let abc = '';
// let ABC = '';
// let aBC = '';

// Именование констант
// const initialString = 'string 1231231312';
// const PI = 3.14;

// const numbers = [1, 2, 3, 4];
// const WEEK_NUMBERS = [1, 2, 3, 4];
