// Синтаксис

// const james = {
//     firstname: "James", // поля/свойства/ключи: значение
//     age: 20, // keys/properties: values
//     job: null,
//     married: false,
//     city: 'New York',
//     address: undefined,
//     education: {
//         university: 'Random university',
//         major: 'Programming',
//         year: 2
//     },
//     randomKey: 'value',
// }

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

function makeLargeObject(key1, value1, key2, value2) {
    return {
        [key1]: value1,
        [key2]: value2,
    }
}

console.log(makeLargeObject('age', 20, 'city', 'Moscow'));
console.log(makeLargeObject('job', { name: 'professor', salary: 5000 }, 'name'))

const obj = {
    age: 12,
    nestedObj: {
        name: 'randomName'
    }
}

// Обращение к свойствам вложенного объекта
console.log(obj.nestedObj.name);
