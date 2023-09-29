// this

// function getAge() {
//     console.log(this.age)
// }

// const user = {
//     age: 12,
//     getAge,
// }

// const user2 = {
//     age: 15,
//     getAge,
// }

// const user3 = {
//     name: 'James',
//     getAge,
// }

// user.getAge(); // 12
// user2.getAge(); // 15
// user3.getAge(); // undefined

// const user4 = {
//     age: 15,
//     foo1() {
//         console.log(this.age)
//     },
//     foo2: function() {
//         console.log(this.age)
//     },
//     foo3: () => {
//         console.log(this.age)
//     },
//     foo4: function() {
//         // this берется отсюда === user
//         const func = () => {
//             console.log(this.age)
//         }

//         func()
//     }
// }

// console.log(this.name); // window.name

// user4.foo1(); // 15
// user4.foo2(); // 15
// user4.foo3(); // window.name
// user4.foo4(); // user.name

// const group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList() {
//         this.students.forEach(function(student) {
//             // Error: Cannot read property 'title' of undefined
//             console.log(this.title + ': ' + student);
//         });
//     }
// };

// group.showList();
// Задача про часы
// const date = new Date();

// class Clock {

//     constructor({ template }) {
//         // this.timer = число (Создается на ходу из start())
//         this.template = template
//     }

//     render() {
//         const date = new Date();

//         const hours = date.getHours();
//         const minutes = date.getMinutes();
//         const seconds = date.getSeconds();

//         const time = this.template
//             .replace('h', hours) // 1:m:s
//             .replace('m', minutes) // 1:5:s
//             .replace('s', seconds) // 1:5:12

//         console.log(time);
//     }

//     start() {
//         this.timer = setInterval(() => {
//             this.render()
//         }, 1000)
//     }

//     stop() {
//         clearInterval(this.timer)
//     }
// }

// const clock = new Clock({ template: 'h:m:s' });

// clock.start();

// Методы массивов

const numbers = [1, 2, 3, 4, 5];

// forEach

// numbers.forEach((num) => {
//     console.log(num)
// })

// const newNumbers = numbers.forEach((num) => {
//     return num
// })

// console.log(newNumbers); // forEach ничего не возвращает (точнее undefined)

// map

// const newNumbers = numbers.map((num) => {
//     return num
// })

// console.log(newNumbers); // map возвращает массив с длиной равной numbers

// const modifiedNumbers = numbers.map((num) => {
//     return num * 2
// })

// console.log(modifiedNumbers); // [2, 4, 6, 8, 10]

// const arrayWithUndefined = numbers.map((num) => {
//     if (num % 2 === 0) {
//         return num
//     }
// })

// // Всегда возращаем массив такой же длины через map
// console.log(arrayWithUndefined); // [und.., 2, und.., 4, ..und]

// filter

// const allNumbers = numbers.filter((num) => {
//     return num
// })

// console.log(allNumbers); // Массив такой же длины, т.к. все числа === true

// const evenNumbers = numbers.filter((num) => {
//     return num % 2 === 0
// })

// console.log(evenNumbers); // [2, 4]

// // find
// const firstOddNumber = numbers.find((num) => num % 2);
// console.log(firstOddNumber); // 1

// // findLast
// const lastOddNumber = numbers.findLast((num) => num % 2);
// console.log(lastOddNumber); // 5

// // findIndex
// const firstOddNumberIndex = numbers.findIndex((num) => num % 2);
// console.log(firstOddNumberIndex); // 0

// // findLastIndex
// const lastOddNumberIndex = numbers.findLastIndex((num) => num % 2);
// console.log(lastOddNumberIndex); // 4

// some
// const oddNumberExists = numbers.some((num) => num % 2);
// console.log(oddNumberExists); // true

// // every
// const allNumbersOdd = numbers.every((num) => num % 2);
// console.log(allNumbersOdd); // false

// reduce

// const sum = numbers.reduce((result, num) => {
//     // let result = 0;

//     result += num
//     return result
// }, 0)

// console.log(sum); // 15

// const randomObj = {
//     oddNumbers: [],
//     evenNumbers: [],
// }

// const oddAndEvenNumbers = numbers.reduce((obj, num) => {
//     if (num % 2 === 0) {
//         obj.evenNumbers.push(num)
//     } else {
//         obj.oddNumbers.push(num)
//     }

//     return obj
// }, {
//     oddNumbers: [],
//     evenNumbers: [], 
// })

// console.log(oddAndEvenNumbers);
// console.log(randomObj);

// includes

// console.log(numbers.includes(1)); // true
// console.log(numbers.includes(15)); // false

// const users = [
//     {
//         id: 15
//     },
//     {
//         id: 20
//     },
// ]

// console.log(users.includes({ id: 15 })); // false

// const userExists = users.some((user) => {
//     return user.id === 15
// });

// console.log(userExists); // true
