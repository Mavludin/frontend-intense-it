// Объект

// Синтаксис объявления - литерал объекта
// const cat = {
//     color: 'black',
//     age: 10,
//     // 'birth day': '05.05.2005',
//     birthDay: '05.05.2005'
// }

// Чтение, изменение, создание, удаление
// console.log(cat.color); // 'black'

// cat.color = 'white';
// console.log(cat.color); // 'white'

// cat.newKey = 'newValue'

// delete cat.age; // Удаление ключа age

// Динамические ключи - квадратные скобки

// const user = {};

// const newKey = prompt(''); // age
// const newValue = +prompt(''); // 50

// user[newKey] = newValue; // { age: 50 }

// const createObject = (key, value) => {
//     return {
//         [key]: value
//     }
// }

// const newObj = createObject('key1', 'random value');
// console.log(newObj); // { key1: 'random value' }

// Проверка ключа на существование в объекте
// const user = {
//     age: undefined,
// }

// if (user.age) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if (user.age === undefined) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// console.log(user.name); // undefined

// if ('age' in user) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Цикл for..in

// const user = {
//     age: 30,
//     name: 'John',
//     job: 'Teacher',
//     from: 'USA',
// }

// for (const key in user) {
//     console.log(key, user[key]);
// }

/* 
Удалить из объекта все ключи с строковыми значениями
Написать функцию - deleteStringValues(obj) => obj без строковых значений
*/

// const deleteStringValues = (obj) => {
//     for (const key in obj) {
//         if (typeof obj[key] === 'string') {
//             delete obj[key]
//         }
//     }
// }

// deleteStringValues(user);

// console.log(user);

// Копирование
// Примитивы - string, number, null, undefined, boolean, bigInt, symbol

// const num1 = 50; // 50
// const num2 = num1; // 50

// const num3 = 100;
// const num4 = 100;

// console.log(num1 === num2); // true
// console.log(num3 === num4); // true

// Объекты (ссылочные данные)

// const func1 = () => {}; // Ссылка на функцию в памяти
// const func2 = () => {};

// console.log(func1 === func2); // false

// const func1 = () => {};
// const func2 = func1; // Ссылка на ту же функцию

// console.log(func1 === func2); // true

// const obj1 = {
//     age: 15,
//     name: 'James'
// }

// const obj2 = obj1 // Один и тот же объект

// const obj2 = {};

// for (const key in obj1) {
//     obj2[key] = obj1[key]
// }

// const obj2 = Object.assign({}, obj1);

// console.log(obj1 === obj2); // false

// Глубокое (вложенное) и поверхностное копирование

// const user1 = {
//     age: 15,
//     name: 'James',
//     sayHi: function() {

//     },
//     nestedObject: {
//         num: 12,
//     }
// }

// const user2 = {};

// for (const key in user1) {
//     user2[key] = user2[key]
// }

// console.log(user1.sayHi === user2.sayHi); // true
// console.log(user1.nestedObject === user2.nestedObject); // true

// user2.sayHi = function() {}
// user2.nestedObject = {
//     num: 12,
// }

// console.log(user1.sayHi === user2.sayHi); // false
// console.log(user1.nestedObject === user2.nestedObject); // false

// Написать код, который проверяет равны ли объекты по структуре

// const obj1 = {
//     name: 'James',
//     age: 15,
// }

// const obj2 = {
//     age: 15,
//     name: 'James',
//     job: 'Teacher',
// }

// const objLength = (obj) => {
//     let length = 0;

//     for (const key in obj) {
//         length++
//     }

//     return length
// }

// let isEqual = true;

// if (objLength(obj1) !== objLength(obj2)) {
//     isEqual = false
// } else {
//     for (const key in obj1) {
//         if (obj1[key] !== obj2[key]) {
//             isEqual = false;
//             break;
//         }
//     }
// }

// for (const key in obj2) {
//     if (obj1[key] !== obj2[key]) {
//         isEqual = false;
//         break;
//     }
// }

// console.log(isEqual);

// Домашка - написать функцию из задачи выше

// Оператор this

// const user = {
//     age: 12,
//     name: 'James',
//     lastname: 'Johnson',
//     sayHi() {
//         console.log('Hi!')
//     },
//     getFullName: function() {
//         console.log(`${this.name} ${this.lastname}`)
//     }
// }

// user.sayHi(); // 'Hi!'
// user.getFullName(); // 'James Johnson'
// user['getFullName'](); // 'James Johnson'

// function func() {
//     console.log(this);
// }

// func(); // window

// const obj = {
//     func,
// }

// obj.func(); // obj

// Стрелочные функции и this

// function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this
//       }
//     };
// }
  
// let user = makeUser();
  
// console.log(user.ref().name); // 'John'

const user = {
    age: 50,
    // getAge: () => {
    //     console.log(this.age)
    // },
    getAge() {

        // Ищем this тут
        const readAge = () => {
            this.age
        }

        console.log(readAge())
    }
}

user.getAge(); // window.age === undefined

