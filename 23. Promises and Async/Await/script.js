// Макрозадачи и микрозадачи

// Решение домашней работы

/*
- Задача 1

Написать функцию job, которая возвращает промис. Функция должна выполнить промис спустя
2 секунды и вернуть строку "Hello world", которую затем можно вывести в консоль

*/

// const job = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res('Hello World');
//         }, 2000)
//     })
// }

// job()
//     .then((data) => {
//         console.log(data);
//     })
// Запись покороче
// .then(console.log)


/*
- Задача 2
В каком порядке выполнятся console.log операции
*/

// console.log('start');

// const promise = new Promise((resolve, reject) => {
//   console.log(1)
// })

// console.log('end');

/* - Задача 3
В каком порядке выполнятся console.log операции?
*/

// console.log('start'); // 1

// const promise = new Promise((resolve, reject) => {
//   console.log(1) // 2
//   resolve(2)
// })

// setTimeout(() => {
//   console.log(3) // 6 - Макрозадача
// }, 500)

// promise.then(res => {
//   console.log(res) // 4 - Микрозадача
// })

// console.log('end'); // 3

// setTimeout(() => {
//   console.log(4) // 5 - Макрозадача
// }, 0)

/*
- Задача 4
Что выведет код ниже?
*/

// const promise = new Promise((resolve, reject) => {
//   reject(new Error('Какая-то ошибка'));
// })

// Каждый вызов catch сработает
// promise.catch(error => console.log(error.message)); // Какая-то ошибка
// promise.catch(error => console.log(error.message)); // Какая-то ошибка

// Тут уже сработает только первый catch
// promise
//     .catch(error => console.log(error.message)) // Какая-то ошибка
//     .catch(error => console.log(error.message))

/*
- Задача 6
Что выведет код ниже?
*/

// const promise = new Promise(res => res(2));

// promise
//     .then(v => {
//         console.log(v); // 2
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v); // 4
//         return v * 2;
//     })
//     .finally(v => {
//         console.log(v); // undefined
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v); // 8
//     });

/*

- Задача 7
Есть такой callback hell:

*/

// function sum(a, b, callback) {
//   setTimeout(() => callback(a + b), 1000);
// }

// function multiply(a, b, callback) {
//   setTimeout(() => callback(a * b), 1000);
// }

// function divide(a, b, callback) {
//   setTimeout(() => callback(a / b), 1000);
// }

// function run() {
//   // 2+3 == 5, 5*6 == 30, 30/3 == 10
//   sum(2, 3, (sum) => {
//     console.log(sum)
//     multiply(sum, 6, (product) => {
//       console.log(product);
//       divide(product, 3, (result) => console.log(result));

//     });

//   });
// }

// run();

// Перепишем на промисы

// function sum(a, b) {
//     return new Promise((res) => {
//         setTimeout(() => res(a + b), 1000);
//     })
// }

// function multiply(a, b) {
//     return new Promise((res) => {
//         setTimeout(() => res(a * b), 1000);
//     })
// }

// function divide(a, b) {
//     return new Promise((res) => {
//         setTimeout(() => res(a / b), 1000);
//     })
// }

// sum(2, 3)
//     .then((sumResult) => {
//         console.log(sumResult); // 5

//         return multiply(sumResult, 6)
//     })
//     .then((multiplyResult) => {
//         console.log(multiplyResult); // 30

//         return divide(multiplyResult, 3)
//     })
//     .then((divisionResult) => {
//         console.log(divisionResult); // 10
//     })

// Единственный catch

// const promise1 = new Promise((res, rej) => {
//     // res(1)
//     rej('Ошибка')
// })

// const promise2 = new Promise((res, rej) => {
//     res(2)
//     // rej('Ошибка')
// })

// const promise3 = new Promise((res) => {
//     res(3)
// })

// promise1
//     .then((data) => {
//         console.log(data); // 1

//         return promise2
//     })
//     .then((data) => {
//         console.log(data); // 2

//         return promise3
//     })
//     .then((data) => {
//         console.log(data); // 3
//     })
//     .catch(console.error); // одного catch хватает для перехвата ошибки на любом then

// Синтаксис async/await

// async function foo() {
//     return 1
// }

// console.log(foo());

// // Альтернативно через явное написание промисов
// function promise() {
//     return new Promise(res => {
//         res(1)
//     })
// }

// console.log(promise())

// Пример с await

// const promise1 = new Promise((res) => res(1));
// const promise2 = new Promise((res) => res(2));

// const runPromises = async () => {
//     const data1 = await promise1;
//     const data2 = await promise2;

//     console.log(data1, data2);

//     return data1 + data2
// }

// runPromises()
//     .then(console.log)

// const foo = async () => {
//     const result = await runPromises();
//     console.log(result)
// }

// foo();

// Как вернуть ошибку из асинхронной функции?

// const foo = async () => {
//     // throw 'Ошибка'
//     throw new Error('Ошибка'); // возвращается объект {message: 'Ошибка'}
//     return 'Значение'
// }

// foo()
//     .then(console.log)
//     // .catch(console.error)
//     // .catch((error) => {
//     //     console.error(error.message); // если пробросили через класс Error
//     // })

// await записывается только перед промисом

// const promise = new Promise((res) => {
//     setTimeout(() => {
//         res('Выполнилось через 5 секунд');
//     }, 5000)
// })

// const foo = async () => {
//     // Так не работает
//     // await setTimeout(() => {
//     //     console.log('Выполнилось через 5 секунд');
//     // }, 5000)

//     const result = await promise;

//     console.log(result);
//     console.log(1);
// }

// foo()

// Переписываем домашку на async/await

// // Тут все равно нужен синтаксис явных промисов
// const job = async () => {
//     setTimeout(() => {
//         return 2
//     }, 2000)
// }

// console.log(job());

// const promise = new Promise(res => res(2));

// const runPromises = async () => {
//     const result1 = await promise; // 2
//     const result2 = result1 * 2; // 4
//     const result3 = result2 * 2; // 8

//     // console.log(result3);

//     return result3; // resolve(result3)
// }

// runPromises()
//     .then(console.log)
//     .catch(console.error)


function sum(a, b) {
    return new Promise((res) => {
        setTimeout(() => res(a + b), 1000);
    })
}

function multiply(a, b) {
    return new Promise((res) => {
        setTimeout(() => res(a * b), 1000);
    })
}

function divide(a, b) {
    return new Promise((res) => {
        setTimeout(() => res(a / b), 1000);
    })
}

const run = async () => {
    const resultSum = await sum(2, 3); // 5
    console.log(resultSum);

    const resultMultiply = await multiply(resultSum, 6); // 30
    console.log(resultMultiply);

    const resultDivision = await divide(resultMultiply, 3); // 10
    console.log(resultDivision);
}

run()