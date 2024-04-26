// Цикл событии

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// Promise

// let result = new Promise(function(resolve, reject) {
//   fetch('https://jsonplaceholder.typicode.com/tods/1')
//     .then(response => {
//       if (response.ok) {
//         resolve(response.json())
//       } else {
//         reject(response)
//       }
//     })
// }).catch((error) => {
//   console.log(error);
// })

// result.then(successResult, errorResult)

// function successResult(data) {
//   console.log(result) // fulfilled
//   console.log("Загрузилось")
//   console.log(data)
// }

// function errorResult(data) {
//   console.log(result) // rejected
//   console.log("Ошибка")
//   console.log(data)
// }

