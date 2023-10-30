// Синтаксис

// const arr = [
//     1,
//     2,
//     'string',
//     null,
//     undefined,
//     true,
//     false,
//     () => {console.log(1)},
//     function () {console.log(2)},
//     { id: 1 },
//     [1, 2, 3, { key: 'value' }]
// ]

// console.log(typeof arr); // object

// // Доступ к элементам массива
// console.log(arr[0]); // 1
// console.log(arr[10]); // [1, 2, 3, { key: 'value' }]
// console.log(arr[arr.length - 1]); // [1, 2, 3, { key: 'value' }]

// arr[7](); // 1
// arr[8](); // 2

// // Изменение элементов массива

// arr[0] = 50
// arr[9].id = 30
// arr[arr.length - 1] = 'new Value'

// console.log(arr);

// // Элемент по середене
// console.log(arr[5]); // true
// console.log(arr[parseInt(arr.length / 2)]); // true
// arr[parseInt(arr.length / 2)] = 123

// console.log(arr);

// Добавление в конец
// const numbers = [1, 2, 3];

// console.log(numbers[numbers.length]); // undefined

// numbers[numbers.length] = 4
// console.log(numbers);

// numbers.push(5);
// numbers.push(6, 7, 8);

// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(numbers.push(9)); // 9
// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Добавление в начало
// const letters = ['b', 'c', 'd']
// letters.unshift('a');

// console.log(letters); // ['a', 'b', 'c', 'd']

// Удаление с конца
// const randomValues = [null, undefined, true, false]

// randomValues.pop();
// console.log(randomValues); // [null, undefined, true]

// console.log(randomValues.pop()); // true
// console.log(randomValues); // [null, undefined]

// // Удаление с начала

// randomValues.shift();
// console.log(randomValues); // [undefined]

// Копирование массива
// const numbers1 = [1, 2, 3]
// const numbers2 = numbers1

// numbers1.push(4);
// console.log(numbers1); // [1, 2, 3, 4]
// console.log(numbers2); // [1, 2, 3, 4]

// console.log(numbers1 === numbers2); // true
// console.log([] === []); // false

// // slice и копия массива
// const numbers3 = numbers1.slice()
// numbers3.push(5)

// console.log(numbers1); // [1, 2, 3, 4]
// console.log(numbers3); // [1, 2, 3, 4, 5]

// console.log(numbers1 === numbers3); // false

// Проблема с вложенным копированием
// const arr1 = [1, 2, 'string', { id: 2 }]
// const arr2 = arr1.slice()

// arr2[3].id = 5
// arr2[0] = 10

// console.log(arr1); // [1, 2, 'string', { id: 5 }]
// console.log(arr2); // [10, 2, 'string', { id: 5 }]

// arr2[3] = {
//     id: 10
// }

// console.log(arr1); // [1, 2, 'string', { id: 5 }]
// console.log(arr2); // [10, 2, 'string', { id: 10 }]

// Подводные камни
// const numbers = [1, 2, 3]
// numbers[10] = 10

// console.log(numbers); // [1, 2, 3, ...undefined, 10]
// console.log(numbers[3]); // undefined

// numbers.length = 2
// console.log(numbers); // [1, 2]

// numbers.length += 2; // не сработает

// const numbers2 = numbers.slice(0, 1); // [1, 2]

// Перебор массива

// const numbers = [1, 2, 3];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]); // 1, 2, 3
// }

// for (const num of numbers) {
//     console.log(num); // 1, 2, 3
// }

// const numbers = [-3 , 0, 1, 2, 10, 1];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 1) console.log(i);

//     // if (numbers[i] === 1) console.log(numbers[i]);
// }

// for (const num of numbers) {
//     if (num === 1) console.log(num)
// }

/* Задача - 1
Написать функцию getSum, 
которая принимает массив чисел и возвращает их сумму

Если в массиве 1 или 2 числа - то цикл не запускать
Если в массиве нет элементов, вернуть 0
*/

const getSum = (numbers) => {
    if (numbers.length === 0) return 0
    if (numbers.length === 1) return numbers[0]
    if (numbers.length === 2) {
        return numbers[0] + numbers[1]
    }

    let sum = 0;
    for (const num of numbers) {
        sum += num
    }
    return sum
}

getSum([1, 2, 3])

// const obj = {age: 12}

// for (const key in obj) {
//     console.log(obj[key]); // 12
//     console.log(key); // 'age'
// }

// Задача 2
// const styles = ['Джаз', 'Блюз']
// styles.push('Рок-н-ролл')
// styles[parseInt(styles.length / 2)] = 'Классика'
// console.log(styles.shift())
// styles.unshift('Рэп', 'Регги')

// Матрицы

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// matrix[0]; // [1, 2, 3]
// matrix[1]; // [4, 5, 6]
// matrix[2]; // [7, 8, 9]

// matrix[0][0]; // 1
// matrix[2][1]; // 8

// for (let i = 0; i < matrix.length; i++) {
//     // console.log(matrix[i]); // 3 массива

//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]); 
//     }
// }

// const arr = ["a", "b"];

// arr.push(function() {
//   console.log(this);
// });

// arr[2](); // arr

// const obj = {
//     age: 12,
//     getAge() {
//         console.log(this.age)
//     }
// }

// obj.getAge(); // 12
// obj['getAge'](); // this - obj ==> 12
