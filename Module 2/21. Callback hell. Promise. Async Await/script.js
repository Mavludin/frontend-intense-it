// Как писали первые асинхронные callback функции

// function pageLoader(callback) {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => callback(json))
// }

// function getAjax(data) {
//     console.log("Послан запрос")
//     console.log("Данные получены")
//     console.log(data)
// }

// pageLoader(getAjax)

// Callback hell

// function pageLoader() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => 
//             fetch('https://jsonplaceholder.typicode.com/users/' + json.userId)
//                 .then(response => response.json())
//                 .then(json => console.log(json))
//         )
// }

// pageLoader()

// Переписал callback function на промис

// function pageLoader(url) {
//     return new Promise(function(resolve, reject) {
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//             .catch(error => reject(error))
//     })
// }

// pageLoader('https://jsonplaceh/todos/1')
//     .then(data => pageLoader('https://jsonplaceholder.typicode.com/users/' + data.userId))

// Переписали вариант с промисом на async/await

// function request(url) {
//     return new Promise(function(resolve, reject) {
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//             .catch(error => reject(error))
//     })
// }

// async function getDetail() {
//     try {
//         const { userId } = await request('https://jsonplaceholder.typicode.com/todos/1')
//         const user = await request('https://jsonplaceholder.typicode.com/users/' + userId)

//         console.log(user)

//     } catch(error) {
//         console.log(error)
//     }
// }

// getDetail()

// Задача на знание event loop

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);