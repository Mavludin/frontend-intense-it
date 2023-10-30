// колбэк (callback)

// На примере setTimeout
// setTimeout(() => {
//     console.log('callback отработал после 1 секунды')
// }, 1000);

// // Колбэк в качестве параметра функции
// const foo = (condition, callback) => {
//     if (condition) {
//         callback()
//     }
// }

// foo(0 > 1, () => {
//     console.log('Callback отработал при достижении условия')
// })

// foo(1 > 0, () => {
//     console.log('Callback отработал при достижении условия')
// })

// Callback hell

// setTimeout(() => {
//     console.log('Асинхронная операция 1');

//     setTimeout(() => {
//         console.log('Асинхронная операция 2');

//         setTimeout(() => {
//             console.log('Асинхронная операция 3');
//         }, 1000)
//     }, 1000)
// }, 1000)

// Промисы - Базовый синтаксис

// const promise = new Promise((resolve, reject) => {
//     resolve('Промис успешно отработал');
//     // reject('Промис выполнился с ошибкой');
// })

// // console.log(promise);

// // const doAlways = () => {
// //     console.log('Выполним всегда');
// // }

// promise
//     .then((data) => {
//         console.log(data);

//         // doAlways();
//     })
//     .catch((error) => {
//         console.error(error);

//         // doAlways();
//     })
//     .finally(() => {
//         console.log('finally всегда сработает');

//         // doAlways(); // Выполняем 1 раз вместо then и catch
//     })

// статус pending 
// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(222)
//     }, 5000)
// })

// console.log(promise)

// Пример Promise и setTimeout

// let posts = [];

// // отработает раньше промиса
// console.log('111');

// const promise = new Promise((resolve, reject) => {
//     let isAllOkay = true;
//     // иммитация запроса на сервер
//     setTimeout(() => {
//         if (isAllOkay) {
//             posts = ['post1', 'post2']

//             resolve(posts);
//             return
//         }

//         reject(new Error('Ошибка при получении данных о постах'));
//     }, 2000)
// })

// promise
//     .then((data) => {
//         console.log(data);

//         console.log('333');
//     })
//     .catch((error) => {
//         console.error(error);
//     })

// // отработает раньше промиса
// console.log('222');

// Решение callback hell при помощи промисов

// const promise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(1)
//     }, 1000)
// })

// const promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(2)
//     }, 1000)
// })

// const promise3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(3)
//     }, 1000)
// })

// // Все setTimeout выполнятся одновременно через 1 секунду
// promise1
//     .then((data) => {
//         console.log(data);

//         return promise2
//     })
//     .then((data) => {
//         console.log(data);

//         return promise3
//     })
//     .then((data) => {
//         console.log(data);
//     })

// Решение через функции

// const promise1 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(1)
//         }, 1000)
//     })
// }

// const promise2 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(2)
//         }, 1000)
//     })
// }

// const promise3 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(3)
//         }, 1000)
//     })
// }

// Каждый след. setTimeout выполнится через +1 секунду
// promise1()
//     .then((data) => {
//         console.log(data);

//         return promise2()
//     })
//     .then((data) => {
//         console.log(data);

//         return promise3()
//     })
//     .then((data) => {
//         console.log(data);
//     })

// Задача 1 - Можно ли перевыполнить resolve?

// const promise = new Promise(function(resolve, reject) {
//     resolve(1);

//     setTimeout(() => resolve(2), 1000);
// });

// promise
//     .then(console.log);

// Задача 2 - Функция delay

// const delay = (ms) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(`Выполнилось через ${ms / 1000} секунды`);
//         }, ms)
//     })
// }

// delay(4000).then((data) => console.log(data))

// delay(2000).then(console.log)

// delay(1000).then(console.log)

