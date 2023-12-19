// DRY - Don't repeat yourself

// alert, prompt, console.log, confirm

// Синтаксис функции

// Объявление функции
// function sayHello() {
//     console.log('Hello!');
// }

// console.log('Hello!');
// console.log('Hello!');
// console.log('Hello!');

// Вызов функции
// sayHello(); // 'Hello'
// sayHello(); // 'Hello'
// sayHello(); // 'Hello'

// Функция с параметрами

// let num1 = 50;
// let num2 = 100;

// const sum1 = num1 + num2;

// let num3 = 2;
// let num4 = 2;

// const sum2 = num3 + num4;

// let num5 = 5;
// let num6 = 5;

// const sum3 = num5 + num6;

// function getSum(num1, num2) {
//     const sum = num1 + num2;

//     console.log(sum);
// }

// getSum(50, 100); // 150
// getSum(20, 10); // 30
// getSum(1, 1); // 2

// Глобальная область видимости
// let num = 10; // Переменная объявлена в глобальной об.в.

// function foo() {
//     // Локальная (блочная) область видимости
//     console.log(num);
// }

// foo(); // 10

// function foo1() {
//     // Локальная (блочная) область видимости
//     let num = 50;
//     console.log(num);
// }

// foo1(); // 50

// Вложенность может быть бесконечная
// let str = 'Hello!!!';

// function foo1() {
//     function foo2() {
//         let str = 'Hi!'
//         function foo3() {
//             function foo4() {
//                 console.log(str);
//             }
//             foo4()
//         }
//         foo3()
//     }
//     foo2()
// }

// foo1(); // 'Hello' ===> 'Hi!'

// Если нет переменной
// let num = 10;
// // console.log(num2); // num2 is not defined

// function foo() {
//     console.log(num2); // num2 is not defined
// }

// foo()

// Локальные данные не доступны извне

// Самая глобальная область

// function foo() {
//     let num = 10;
//     function foo1() {
//         console.log(num);
//     }
//     foo1()
// }

// console.log(num); // Ошибка. Локальная переменная тут недоступна

// Не только функции могут иметь лок. об. в.

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i); // Переменной нет за пределами цикла

// while () {
//     var a = 10
//     let b = 10
//     const c = 10
// }

// console.log(a)
// console.log(b)
// console.log(c)

// function foo() {
//     var pi = 3.14
// }

// console.log(pi); //

/*
Задача - написать функцию checkNumber(num)
Проверить знак числа и вывести соответственно:
- Число {num} отрицательное
- Число {num} положительное
- Число - ноль
*/

// function checkNumber(num) {
//     if (num > 0) {
//         console.log(`Число ${num} положительное`);
//     } else if (num < 0) {
//         console.log(`Число ${num} отрицательное`);
//     } else {
//         console.log(`Число - ноль`);
//     }
// }

// checkNumber(1); // Пол
// checkNumber(-5); // Отр
// checkNumber(0); // Ноль

// let num1 = 10;
// let num2 = 20;

// checkNumber(num1 - num2); // Отр

/*
Задача - написать функцию greeting(firstName, lastName),
которая принимает имя и фамилию пользователя и выводит
сообщение приветствия:
Пример:
greeting('Иван', 'Иванов');
'Добро пожаловать Иван Иванов!!!'
*/

// function greeting(firstName, lastName) {
//     console.log(`Добро пожаловать ${firstName} ${lastName}!!!`)
// }

// greeting('Иван', 'Иванов');
// greeting('Магомед', 'Магомедов');
// greeting('Alex', 'Johns');

// const firstName = prompt('Введите имя');
// const lastName = prompt('Введите фамилию');

// greeting(firstName, lastName);

// Глобальные переменные лучше не использовать часто
// let num1 = 10;
// let num2 = 10;

// function getSum() {
//     console.log(num1 + num2);
// }

// function getSum(num1, num2) {
//     console.log(num1 + num2);
// }

// getSum(1, 2); //
// getSum(2, 2); // 
// getSum(5, 2); // 

// const PI = 3.14;

// function foo1(num) {
//     console.log(PI * num);
// }

// function foo2(num) {
//     console.log(PI - num);
// }

// function foo3(num) {
//     console.log(PI / num);
// }

// foo1(1);
// foo2(5);
// foo3(10);

// ЧТо является локальным для функции
// function foo(num1, num2) {
//     let str = 'string';
//     const PI = 3.14;
// }

// Локально можно получить доступ редактировать то, что есть глобально
// let num = 10;

// function foo() {
//     num = 50;

//     console.log(num);
// }

// console.log(num);
// foo();

// 

// function foo(num) {
//     let num = 10;
// }

// let a = 10;
// // let a = 50;
// a = 50;

// Параметры по умолчанию
// function getSum(a = 0, b = 0) {

//     // Старые способы объявления параметров по умолчанию
//     // if (b === undefined) b = 0
//     // if (a === undefined) a = 0

//     // b = b || 0
//     // a = a || 0
//     // console.log(a + b);
// }

// getSum(1, 2); // 3
// getSum(1); // NaN (1 + undefined), т.к. b === undefined
// getSum(); // 

// Оператор return

// function getSum(a, b) {
//     // Просто выводим в консоль
//     // console.log(a + b); 

//     // Возвращаем значение суммы, которое затем можно использовать
//     return a + b;
// }

// console.log(getSum(1, 2)); // console.log(3)

// const sum1 = getSum(1, 2);
// const sum2 = getSum(-4, 2);
// const sum3 = getSum();

// function checkNumber(num) {
//     if (num > 0) {
//         console.log(`Число ${num} положительное`);
//     } else if (num < 0) {
//         console.log(`Число ${num} отрицательное`);
//     } else {
//         console.log(`Число - ноль`);
//     }
// }

// checkNumber(sum1);
// checkNumber(sum2);
// checkNumber(sum3);

// По умолчанию функция возвращает undefined
// function foo() {
//     // Какой-то код без return
//     // Пустой return тоже undefined
//     return
// }

// console.log(foo());

// Перевод строки после return может вызвать проблемы
// function foo() {
//     // Так не стоит делать - вернет undefined
//     // return
//     //     'Значение'

//     // Можно использовать скобки
//     return (
//         'Значение'
//     )

// }

// console.log(foo())
