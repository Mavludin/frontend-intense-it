// Удаление элементов в массиве

// const numbers = [1, 2, 3, 4, 5];
// const newArray = [];

// for (let i = 0; i < numbers.length; i++) {
//     // if (i >= 1 && i <= 3) continue
//     if (i < 1 || i > 3) {
//         newArray.push(numbers[i])
//     }
// }

// splice

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(1, 3); // [2, 3, 4]

// // модифицирует исходный массив
// console.log(numbers); // [1, 5] 

// const newNumbers = numbers.slice();
// newNumbers.splice(1, 3);

// // Иcходный массив не изменен
// console.log(numbers);
// console.log(newNumbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(0, 1); // удаление одного элемента - первого
// numbers.splice(2, 1); // удаление одного элемента - на 2 индексе
// numbers.splice(1); // удаление всех элементов с 1 индекса
// console.log(numbers)

// numbers.splice(2, 2, 10, 10);
// console.log(numbers);

// Concat
// const strings1 = ['Я', 'изучаю']
// const strings2 = ['JavaScript']

// console.log(strings1.concat(strings2));

// console.log(strings1.concat(strings2, ['blabla', 'blabla']));
// console.log(strings1.concat(strings2, 'blabla', 'blabla'));

// indexOf, lastIndexOf, includes

// const numbers = [2, 2, 1, 12, 1, 5, 10];

// console.log(numbers.indexOf(1)); // 2
// console.log(numbers.indexOf(100)); // -1
// console.log(numbers.lastIndexOf(1)); // 4
// console.log(numbers.includes(1)); // true
// console.log(numbers.includes(100)); // false

// const users = [
//     {id: 1},
//     {id: 2},
//     {id: 3},
// ]

// console.log(users.includes({id: 1})); // false
// console.log(users.lastIndexOf({id: 1})); // -1
// console.log(users.indexOf({id: 1})); // -1

// find

// const foundUser = users.find((user) => {
//     return user.id === 1
// })

// console.log(foundUser);

// const foundUser = users.find((user) => {
//     return user.id === 10
// })

// console.log(foundUser); // undefined

// const strings = ['string', 'str', 'b', 'blablablabla', 'a'];

// const str = strings.find((string) => {
//     // if (string.length === 1) return true

//     // return false

//     return string.length === 1
// })

// console.log(str);

// const firstIndexString = strings.find((string, index) => {
//     return index === 1
// })

// console.log(firstIndexString);

// findIndex

// const stringIndex = strings((string) => {
//     return string.length === 1
// })

// console.log(stringIndex);

// const numberArrays = [[1, 2], [1, 2], [3, 3, 3], [4, 4, 4]]

// const array = numberArrays.find((array) => {
//     return array.length === 3
// })

// console.log(array); // [3, 3, 3]

// const arrayIndex = numberArrays.findIndex((array) => {
//     return array.length === 3
// })

// console.log(arrayIndex); // 2

// filter

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((num) => {
//     return num % 2 === 0
// })

// console.log(evenNumbers);

// console.log([1, 2].filter(num => num > 2)); // []

// const numberArrays = [[1, 2], [1, 2], [3, 3, 3], [4, 4, 4]]

// const newArray = numberArrays.filter((array) => {
//     return array.includes(4)
// })

// console.log(newArray)

// forEach

// const numbers = [10, 10, 10, 10];
// const newArray = numbers.forEach((num) => {
//     console.log(num);

//     return num
// })

// console.log(newArray);

// const newArray = [];

// numbers.forEach((num) => {
//     newArray.push(num)
// })

// console.log(newArray); // [10, 10, 10, 10]

// map

// const numbers = [1, 2, 3];

// const newArray = numbers.map((num) => num * 2);
// const newArray = numbers.map((num) => {}); // [3 undefined]

// console.log(newArray);

// Комбинация методов массивов

// const numbers = [1, 2, 3, 4, 5];

// const numberDivisibleByEight = numbers
// .map((num) => num * 2) // [2, 4, 6, 8, 10]
// .filter((num) => num > 4) // [6, 8, 10]
// .find((num) => num % 8 === 0) // 8

// console.log(numberDivisibleByEight); // 8

// Задача - filter

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.filter((num) => {
//     return num % 2
// })

// sort

// const numbers = [0, -1, -10, 3, 2, 11, 12];
// По умолчанию как строки
// numbers.sort();
// console.log(numbers);

// numbers.sort((num1, num2) => {
//     if (num1 > num2) return 1
//     if (num1 < num2) return -1
//     return 0
// })

// numbers.sort((num1, num2) => num1 - num2)

// const sortedNumbers = numbers
// .sort((num1, num2) => num1 - num2);

// console.log(numbers);
// console.log(sortedNumbers);

// console.log(sortedNumbers === numbers); // true

// Копия и сортировка

// const sortedNumbers = numbers.slice()
// .sort((num1, num2) => num1 - num2);

// console.log(numbers);
// console.log(sortedNumbers);

// console.log(sortedNumbers === numbers); // false

// Отсортировать массив юзеров по возр. по id
// const users = [
//     {id: 3},
//     {id: 1},
//     {id: 4},
//     {id: 2},
//     {id: 5},
// ]

// const sortedUsers = users
// .slice()
// .sort((a, b) => a.id - b.id);

// // console.log(sortedUsers);
// // console.log(users);

// // объекты те же самые, но порядок поменялся
// users[0].id = 111111
// console.log(users);
// console.log(sortedUsers);