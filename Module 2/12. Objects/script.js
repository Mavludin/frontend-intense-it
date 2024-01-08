// Синтаксис

const james = {
    firstname: "James", // поля/свойства/ключи: значение
    age: 20, // keys/properties: values
    job: null,
    married: false,
    city: 'New York',
    address: undefined,
    education: {
        university: 'Random university',
        major: 'Programming',
        year: 2
    },
    randomKey: 'value',
}

// // Чтение свойств объекта
// console.log(james.age); // 20

// // Добавление свойств объекта
// james.lastname = 'Johnson'

// console.log(james);

// // Удаление свойств объекта
// delete james.randomKey

// // Динамические свойства объекта
// console.log(james['education']);

// // Полезно, когда название свойства заранее неизвестно
// const userData = {};

// const key = prompt('Введите значение');
// const value = prompt('Введите значение');

// userData[key] = value;
// console.log(userData);

// // В таком случае создается явное свойство key
// userData.key = value; // { key: value }

/*
Задача - Написать функцию createObject(key, value)
- И вернуть объект, название свойства которого идет из key,
а значение из value
- Если key не передан, то вернуть пустой объект
createObject('name', 'James'); ===> {name: 'James'}

*/

// function createObject(key, value) {
//     // Решениe 1
//     // const obj = {};
//     // obj[key] = value;
//     // return obj;

//     // Решениe 2
//     // return {
//     //     [key]: value
//     // }

//     // Решение 3
//     // if (key === undefined) {
//     //     return {}
//     // }

//     // return {
//     //     [key]: value
//     // }

//     // Решение 4
//     return key === undefined
//         ? {}
//         : { [key]: value }
// }

// const john = createObject('name', 'John');
// console.log(john);

// const anna = createObject('name', 'Anna');
// console.log(anna);

// const obj = createObject('random', 1000);
// console.log(obj);

// const emptyObject = createObject();
// console.log(emptyObject);

// function makeLargeObject(key1, value1, key2, value2) {
//     return {
//         [key1]: value1,
//         [key2]: value2,
//     }
// }

// console.log(makeLargeObject('age', 20, 'city', 'Moscow'));
// console.log(makeLargeObject('job', { name: 'professor', salary: 5000 }, 'name'))

// const obj = {
//     age: 12,
//     nestedObj: {
//         name: 'randomName'
//     }
// }

// // Обращение к свойствам вложенного объекта
// console.log(obj.nestedObj.name);

// Свойство из переменной

// const john = {};
// const value = 'John';
// const key = 'age';

// john.name = value;
// john[key] = 25;

// console.log(john);

// const age = 25;
// const from = 'Moscow';

// const john = {
//     name: 'John',
//     // age: age,
//     age, // age: 25
//     // job Ошибка - такой переменной нет
//     city: from,
// }

// console.log(john);

// Все свойства - строки

// const obj = {
//     0: 'Zero',
//     50: 'Fifty',
// }

// console.log(obj['0'])

// Ограничение на имена свойств

// Такое лучше не делать. Будет путаница
// const obj = {
//     return: 123,
//     let: 555,
//     const: 1222,
//     for: 'value',
// }

// console.log(obj);

// Упорядочение свойств объекта

// const obj1 = {
//     name: 'name',
//     age: 12,
//     city: 'Moscow',
//     name: 'new Name',
// }

// console.log(obj1);

// const obj2 = {};
// obj2.name = 'name';
// obj2.age = 12;
// obj2.city = 'Moscow';

// console.log(obj2);

// const codes = {
//     "49": "Германия",
//     "41": "Швейцария",
//     '0b': 123,
//     "44": "Великобритания",
//     // ..,
//     "1": "США",
//     '6a': 222,
//     '5a': 222,
// };

// console.log(codes);

// В объекте свойства уникальны

// obj2.name = 'new name';
// Проверка на существование свойства

// Перебор объектов в цикле for..in

const stringObj = {}

for (const key in james) {
    // if (typeof james[key] === 'number') {
    //     console.log(key, '===>', james[key]);
    // }

    // if (key === 'firstname') {

    // }

    if (typeof james[key] === 'string') {
        stringObj[key] = james[key];
    }

}

console.log(stringObj);

// for (const key in obj1) {
//     console.log(key);
// }

// for (const key in codes) {
//     console.log(key);
// }

// Задача - удалить из объекта все ключи с ложными значениями
