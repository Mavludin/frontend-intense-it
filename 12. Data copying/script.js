// const obj = {
//   age: 12,
//   name: 'James'
// };

// for (const key in obj) {
//   // console.log(obj[key]); //obj[key] => значение
//   // console.log(key); //key => свойства
// }


// const logObjectData = (obj) => {
  
//   let result = '';
  
//   for (const key in obj) {
//     // if (result !== '') {
//     //   result = `${result}, ${key} => ${obj[key]}`
//     // } else {
//     //   result = `${key} => ${obj[key]}`
//     // }

//     // result = `${result}${result !== '' ? ',' : ''} ${key} => ${obj[key]}`

//     const comma = result !== '' ? ',' : '';

//     result = `${result}${comma} ${key} => ${obj[key]}`;

//   }
  
//   return result
  
// }

// const colors = {
//   red: '#ff0000',
//   green: '#008000',
//   white: '#fff',
//   black: '#000',
// }

// console.log(logObjectData(colors))

// Проверка объекта на пустоту
// const isEmpty = (obj) => {
//     for (const key in obj) {
//         return false
//     }

//     return true
// }

// const user = {key: 'something'};
// const colors = {
//     black: '#000'
// }

// console.log(isEmpty(user)); // true
// console.log(isEmpty(colors)); // false

// if (isEmpty(user)) {
//     user.james = {
//         age: 20,
//         job: 'teacher'
//     }
// }

// console.log(user);

// Складываеи числа в объекте

// const salaries = {
//     john: 50,
//     james: 100,
//     gabriel: 150,
//     mark: 70,
// }

// let sum = 0;

// salaries.michael = 80
// salaries['tom'] = 50 // salaries.tom = 50

// for (const key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum); // сумма

// const getSalary = (obj) => {

//     let sum = 0;

//     for (const key in obj) {
//         sum += obj[key];
//     }

//     return sum;
// }

// console.log(getSalary(salaries)); // сумма

// const salariesSum = getSalary(salaries);

// console.log(salariesSum); // сумма в переменной

// // typeof что-то === 'number'

// Копирование примитивов

// let num1 = 50; // Создание переменной num1

// // Создание переменной num2 и чтение num1
// let num2 = num1; // копирование значения 50 из num1 в num2

// console.log(num1, num2); // 50, 50
// console.log(num1 === num2); // 50 === 50 === true

// let str1 = 'some string';
// let str2 = str1; // 'some string'

// console.log(str1 === str2); // true

// Копирование объектов

// Создание объекта
// const obj1 = {
//     str: 'random value'
// };

// // Чтение объекта и вывод
// // console.log(obj1);

// // Копирование ссылки на объект
// const obj2 = obj1; // { str: 'random value' }; => ссылка на один и тот же объект
// const obj3 = obj2; // { str: 'random value' }; => ссылка на один и тот же объект

// obj2.str = 'new value';

// console.log(obj1); // 
// console.log(obj2); // 

// const obj1 = {
//     key1: 'value1',
//     key2: 'value2',
// };
// const obj2 = obj1;

// console.log(obj1 === obj2); // true
// console.log(obj1 == obj2); // true

// console.log({} === {}); // false

// const obj3 = {
//     age: 12
// }

// const obj4 = {
//     age: 12
// }

// console.log(obj3 === obj4); // false

// Скопировать объект obj1 в obj2

// const obj1 = {
//     key1: 'value1',
//     key2: 'value2',
// }

// const obj2 = {}; // Новая ссылка в памяти

// obj2.key1 = obj1.key1
// obj2.key2 = obj1.key2

// // console.log(obj2); // { key1: 'value1', key2: 'value2' }
// // console.log(obj1 === obj2); // false

// obj2.key1 = 'new Value';

// // console.log(obj1);
// // console.log(obj2);

// const obj3 = obj1; // Ссылка на объект obj1

// obj3.key2 = 'new Value';

// // console.log(obj1);
// // console.log(obj3);

// const obj4 = obj3; // Ссылка на объект obj1

// obj4.key1 = 'new string'

// console.log(obj1);
// console.log(obj3);
// console.log(obj4);

// const obj1 = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//     key5: 'value5',
// }

// const obj2 = {};

// for (const key in obj1) {
//     obj2[key] = obj1[key]; // key1 = value1 и так далее
// }

// console.log(obj2);

// console.log(obj1 === obj2); // false

// const obj = {
//     key1: 'value1'
// }

// obj.key1 = 'value2';

// console.log(obj); // => { key1: 'value1' }

// const obj = {
//     key1: 'value1',
//     key1: 'value2'
// }

// console.log(obj); // { key1: 'value2' }

// Клонирование через Object.assign()

// const obj1 = {
//     key1: 'value1',
//     key2: 'value2',
// }

// const obj2 = Object.assign({}, obj1);

// console.log(obj2);
// console.log(obj1 === obj2); // false => Разные объекты

// Не пустой объек

const obj1 = {
    key1: 'value1',
    key2: 'value2',
}

const obj2 = {
    randomKey1: 'value3',
    randomKey2: 'value4',
}

const obj3 = {
    key3: 'new Value',
    key4: 'new Value',
    randomKey1: 'new Value',
}

// Object.assign(obj1, obj2, obj3);
Object.assign(obj1, obj3, obj2);

// obj1.key3 = obj2.key3
// obj1.key4 = obj2.key4
console.log(obj1);
