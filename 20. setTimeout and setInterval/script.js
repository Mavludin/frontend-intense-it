// Синхронный код
// console.log(1);
// console.log(2);
// console.log(3);

// Долгая операция
// console.log(1);

// for (let i = 0; i <= 10_000_000_000; i++) {}

// console.log(2);

// setTimeout

// setTimeout(() => {
//   console.log('Операция выполнится через 1 секунду');
// }, 1000);

// console.log(1);

// const func1 = () => {
//   console.log('Выполнится последней');
// }

// const func2 = () => {
//   console.log('Выполнится последней');
// }

// setTimeout(func1, 1000);
// setTimeout(func2, 2000);

// console.log(2);

// Откладываем сложную операцию

// console.log(1);

// setTimeout(() => {
//   for (let i = 0; i <= 10_000_000_000; i++) {}

//   console.log(3);
// }, 1000)

// console.log(2);

// нулевой timeout
// console.log(1);

// setTimeout(() => {
//   console.log(3); // все равно выполнится после, но без задержек
// }, 0)

// setTimeout(() => {
//   console.log(4); // запустится через 1 секунду
// }, 1000)

// console.log(2);

// clearTimeout
// const timerId = setTimeout(() => {
//   console.log('Не выполнится')
// }, 1000)

// clearTimeout(timerId);

// Задача 1

// const userInput = +prompt('Введите значение');

// setTimeout(() => {
//   if (isNaN(userInput)) {
//     console.log('Вы ввели не число!');

//     return;
//   }

//   console.log(userInput)
// }, 1000)

// const timerId = setTimeout(() => {
//   console.log(userInput)
// }, 1000)

// if (isNaN(userInput)) {
//   clearTimeout(timerId)
// }

// setInterval
// setInterval(() => {
//   console.log('Выполнится бесконечно каждую секунду')
// }, 1000);

// Задача 2

// неправильно - время статичное
// const date = new Date();
// setInterval(() => {
//   console.log(date.toLocaleTimeString());
// }, 1000);

// правильно - актуальное время
// setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// clearInterval

// const timerId = setInterval(() => {
//   console.log('Не выполнится');
// }, 1000)

// clearInterval(timerId);

// Задача 3

// let count = 1;

// const timerId = setInterval(() => {
//   console.log(count);

//   if (count === 5) {
//     clearInterval(timerId)
//   }
//   count++

//   // if (count > 5) {
//   //   clearInterval(timerId)
//   // }
// }, 1000)

// for (let i = 1; i <= 5; i++) {
//   setInterval(() => {
//     console.log(i)
//   }, 1000)

//   // setTimeout(() => {
//   //   console.log(i)
//   // }, 1000 * i)
// }

// Понять что здесь происходит
// for (let i = 1; i <= 5; i++) {
//   setInterval(() => {
//     console.log(i)
//   }, 1000 * i)
// }