// // Домашка - удалить дубли и отсортировать
// const numbers = [1, 1, 1, 2, 0, 10, 15, 5, 20, 15, 30, 30];
// Результат - [0, 1, 2, 5, 10, 15, 20, 30]

// const numbers = [1, 1, 1, 2, 0, 10, 15, 5, 20, 15, 30, 30];
// const filteredNumbers = [];

// for (const num of numbers) {
//     if (!filteredNumbers.includes(num)) {
//         filteredNumbers.push(num)
//     }
// }

// console.log(filteredNumbers);

// const filteredNumbers = numbers.reduce((result, num) => {
//     if (!result.includes(num)) {
//         result.push(num)
//     }

//     return result
// }, [])

// const sortedNumbers = filteredNumbers.slice().sort((a, b) => a - b)

// Дома - решить через filter

// Решение через объект

// const obj = {}
// for (const num of numbers) {
//     obj[num] = num
// }
// console.log(obj);

// const filteredNumbers = [];
// for (const key in obj) {
//     filteredNumbers.push(key); // ['0', '1' ...]
//     filteredNumbers.push(obj[key]); // [0, 1 ...]
// }

// console.log(filteredNumbers)

// через reduce
// let obj = numbers.reduce((result, num) => {
//     result[num] = num

//     return result
// }, {})

// // массив значений свойст объекта
// const filteredNumbers = Object.values(obj);

// // Очищаем из памяти
// obj = null;
// console.log(filteredNumbers);

// Оператор spread
// const numbers = [1, 2, 3, 'str', { age: 123 }]

// // создается поверх. копия - объект не скопировался
// // const newArray = [...numbers];

// const numbers1 = [1, 2];
// const numbers2 = [3, 4];

// // порядок важен
// const numbers3 = [...numbers1, ...numbers2]; // [1, 2, 3, 4]
// const numbers4 = [...numbers2, ...numbers1]; // [3, 4, 1, 2]

// // можно указывать и обычные значения
// const numbers5 = [...numbers1, ...numbers2, 5, 6]; // [1, 2, 3, 4, 5, 6]

// при вызове функции
// const foo = (a, b, c) => {
//     console.log(a, b, c)
// }

// const nums1 = [1, 2, 3]

// foo(nums1[0], nums1[1], nums1[2]); // 1, 2, 3

// // c помощью spread
// foo(...nums1); // 1, 2, 3

// const nums2 = [1, 2];
// foo(1, 2); // 1, 2, undefined
// foo(...nums2); // 1, 2, undefined

// что здесь не так?
// map итак делает поверх. копию. spread не нужен
// const nums = [1, 2, 3];
// const newArray = [...nums].map((num) => num * 2);

// Оператор spread - объекты

// const obj = {
//     age: 12,
//     str: 'random string',
//     func() { console.log(this.age) },
//     arr: [1, 2, 3]
// }

// const newObj = {...obj}

// // Функция и массив не скопируются, т.к. это поверх. копирование
// console.log(newObj)

// порядок не важен при объявлении
// const james = {name: 'james', age: 12, job: 'student'}
// const john = {name: 'john', age: 20}

// // порядок важен, если в объектах одинаковые ключи
// const user = {...james, ...john}; // {}
// console.log(user)

// найти макс/мин число
// const numbers = [3, 2, 4, 1];
// console.log(Math.max(...numbers)) // 4
// console.log(Math.min(...numbers)) // 1

// const sortedNumbers = [...numbers].sort((a, b) => a - b)
// console.log(sortedNumbers[0]); // 1
// console.log(sortedNumbers[sortedNumbers.length - 1]); // 4
// console.log(sortedNumbers.at(-1)); // 4

// Псевдомассив arguments

// function foo(a, b, c, d, e) {
//     console.log(arguments);
//     // ошибка
//     // arguments.map((num) => console.log(num))

//     // Можно преобразовать в настоящий массив
//     console.log([...arguments]);

//     for (const arg of arguments) {
//         if (typeof arg === 'string') {
//             console.log(arg)
//         }
//     }
// }

// foo(1, 2);

// foo(1, 'hello world', {age: 12}, [1, 2, 3], null);

// Оператор rest - остаточные параметры

// const foo = (...rest) => {
//     console.log(rest)
// }

// foo();
// foo(1);
// foo(1, 2, 3);
// foo(1, 2, 3, { age: 12 }, null);

// const foo = (a, b, ...rest) => {
//     console.log(a, b); // 1, 2
//     console.log(rest); // [3, { age: 12 }, null]
// }

// foo(1, 2, 3, { age: 12 }, null);

// // Всегда надо указывать в конце - ошибка
// const foo = (a, ...rest, b) => {}

// Деструктуризация - массивы

// const names = ['James', 'John', 'Gabriel'];
// const james = names[0];
// const john = names[1];

// с помощью дестр.
// const [james, john, gabriel, alex] = names;

// console.log(james); // James
// console.log(john); // John
// console.log(gabriel); // Gabriel
// console.log(alex); // undefined

// const [james, john, gabriel, alex = 'Alex'] = names;

// // Записали значение по умолчанию
// console.log(alex); // Alex

// Деструктуризация - строки

// const string = 'Hello world';
// const [first, second] = string;
// console.log(first);
// console.log(second);

// Деструктуризация - объекты

// const obj = {
//     age: 30,
//     name: 'James',
//     job: 'Teacher',
//     address: {
//         street: 'Street',
//         city: 'Moscow'
//     }
// }

// const age = obj.age
// const name = obj.name

// с помощью дестр.
// const { age, name, city } = obj

// console.log(city); // undefined

// const { age, name, city = 'Moscow', foo = function() {} } = obj

// console.log(foo); // функция по умолчанию
// console.log(city); // Moscow по умолчанию

// взятие свойства через иное имя
// const { age: newName } = obj;
// console.log(newName);

// С вложенным объектом

// const { street } = obj.address

// И снаружи и вложенно

// const { age, address: { street } } = obj

// console.log(age);
// console.log(street);

// В функциях
// function foo(user) {
//     console.log(user.age);
//     console.log(user.name);
//     console.log(user.job);
//     console.log(user.city);
// }

// const james = {
//     age: 30,
//     name: 'James',
//     job: 'teacher',
//     city: 'moscow'
// }

// // через дестр.
// function foo({ age, name, job, city }) {
//     console.log(age, name, job, city);

// }

// foo(james)

// const foo = (strings) => {
//     console.log(strings[0]);
//     console.log(strings[1]);
//     console.log(strings[2]);
// }

// // через дестр.
// const foo = ([str1, str2, str3]) => {
//     console.log(str1, str2, str3);
// }

// foo(['str1', 'str2', 'str3']);

// Пример с map

// const arr = [
//     {
//         id: 1,
//         name: 'name1'
//     },
//     {
//         id: 2,
//         name: 'name2'
//     },
//     {
//         id: 3,
//         name: 'name3'
//     }
// ]

// arr.map((item) => {
//     console.log(item.name)
//     console.log(item.id)
// })

// arr.map(({ name, id }) => {
//     console.log(name)
//     console.log(id)
// })

// const newArr = arr.map((item, index) => {
//     return {
//         ...item,
//         name: `new Name ${index + 1}`
//     }
// })

// console.log(newArr);
