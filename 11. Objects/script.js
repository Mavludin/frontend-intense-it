// Синтаксис

// const obj = {
//     num: 12,
//     str: 'Random string',
//     age: null,
//     key1: undefined,
//     user: {
//         name: 'random user name',
//     },
//     func: function() {
//         console.log('Some random code')
//     }
// }

// console.log(obj)

// // Конкретный пример

// const user = {
//     userName: 'random userName',
//     password: 'some password',
//     email: 'mail@mail.com',
//     age: 50,
// }

// // Чтение свойств

// console.log(user.userName); // random userName

// let name1 = user.userName; // random userName

// name1 = user.age; // 50

// const func = (value) => {
//     return value
// }

// func('string')
// func(50)
// func(name1)
// func(user.password)

// // Добавление свойств

// user.job = 'teacher'; // Добавили ключ - значение job: 'teacher'
// user.age = 30; // Перезапись значения свойства age (было 50 - стало 30)

// // Удаление свойств

// delete user.age

// console.log(user); // Все свойства кроме age

// // Изменение объекта - константы

// obj = 'Новое любое значение' // Ошибка

// const num1 = 12;
// const str1 = 'string';
// const nullValue = null;
// const undefinedValue = undefined;

// let randomObject = {
//     randomKey: '1231231'
// }

// randomObject = '13'
// randomObject = 50
// randomObject = null
// randomObject = () => {
//     console.log(123123)
// }

// Динамические 

// const car = {
//     model: 'audi',
//     color: 'red',
//     made: 2000,
// }

// console.log(car.model); // audi
// console.log(car['model']); // audi

// // Заранее известное свойство
// car.from = 'Germany'

// // Заранее неизвестное свойство

// let key = 'speed'

// car[key] = 200; // Добавили свойство speed: 200 => car.speed = 200 (Эквивалент)

// car.key = 200; // Добавили свосйтво key: 200 - Важно знать разницу

// const keyName = prompt('Введите название ключа');
// car[keyName] = 'string';

// console.log(car);

// Свойства (ключи) объекта являются строками

// const obj = {
//     0: 'value1', // '0'
//     123: 'value1', // '123'
//     222: 'value1', // '222'
//     userName: '', // 'userName'
// }

// obj['newKey'] = 'new value'; // Добавили новое свойство newKey: 'new value'
// obj.newKey = 'new value'; // Добавили новое свойство newKey: 'new value'

// Задача - createObject

// let keyName = 'age';
// let value = 50;

// const user = {
//     age: 50
// }

// const user = {
//     [keyName]: value
// }

// const createObject = (key, value = null) => {

//     // if (key === undefined && value === undefined) { // key/value = 0 || ''
//     //     return {}
//     // }

//     // // if (value === undefined) {
//     // //     value = null
//     // // }

//     // // Решение 1
//     // const obj = {
//     //     [key]: value
//     // }

//     // return obj

//     // // Решение 2 - короче
//     // return {
//     //     [key]: value
//     // }

//     // Окончательное решение

//     // if (key === undefined && value === undefined) { // key/value = 0 || ''
//     //     return {}
//     // }

//     return key === undefined
//     ? {}
//     : {
//         [key]: value
//     }
// }

// createObject('age', 50); // { age: 50 }
// createObject('name', 'James'); // { name: 'James' }
// createObject(50, 'random value'); // { 50: 'random value' }
// createObject('job'); // { job: null }
// console.log(createObject());

// Проверка свойства на существование

// const obj = {
//     age: 123
// }

// console.log(obj.job); // undefined - Такого свойства нет

// const obj = {
//     key: 'value'
// }

// if (obj.key) {
//     console.log('Свойство есть')
// }

// obj.key = ''
// obj.key = 0
// obj.key = undefined
// obj.key = null
// obj.key = NaN
// obj.key = false

// if (obj.key) {
//     console.log('Свойство есть')
// } else {
//     console.log('Свойства нет')
// }

// if (obj.key === undefined) {
//     console.log('Свойства нет')
// } else {
//     console.log('Свойство есть')
// }

// Решение через ключевое слово in

// if ('key' in obj) {
//     console.log('Свойство есть')
// } else {
//     console.log('Свойства нет')
// }

// Цикл for in

// const obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
// }

// Вывод всех ключей объекта
// for (let key in obj) {
//     console.log(key); // => key1, key2, key3, key4
// }

// // Вывод всех значений объекта
// for (let key in obj) {
//     console.log(obj[key]); // => value1, value2, value3, value4
// }

/*
Шаг 1 => console.log(obj[key1])
Шаг 2 => console.log(obj[key2])
Шаг 3 => console.log(obj[key3])
Шаг 4 => console.log(obj[key4])
*/

// // Название переменной ключа в цикле может быть любым
// for (let prop in obj) {
//     console.log(obj[prop]); // => value1, value2, value3, value4
// }

// // Обезаопасить себя через const prop
// for (const prop in obj) {
//     console.log(obj[prop]); // => value1, value2, value3, value4
// }

// Вывод ключей и значений
// for (const key in obj) {
//     console.log(key, obj[key]); // => key1 value1, key2 value2, key3 value3, key4 value4
// }
