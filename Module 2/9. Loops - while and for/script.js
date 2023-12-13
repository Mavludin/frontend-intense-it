// Циклы

// console.log('Повторяющаяся операция');
// console.log('Повторяющаяся операция');
// console.log('Повторяющаяся операция');
// console.log('Повторяющаяся операция');
// console.log('Повторяющаяся операция');

// while
// while (true) {
//     // бесконечный цикл
// }

// while (0) {
//     // Цилк никогда не начнется
// }

// let i = 0; // Шаг цикла

// while (i < 5) {
//     console.log(i); // 

//     i++;
// }

// let i = 1; // Шаг цикла

// while (i < 2) {
//     console.log(i); // 

//     i += 0.2;
// }

// let i = 0;

// while (i < 5) {
//     console.log('Повторяющаяся операция');
//     i++;
// }

// Вычислить сумму от 1 до определенного числа
// let start = 1;
// const end = prompt('Введите число', 0);
// let sum = 0;

// while (start <= end) {
//     sum += start;

//     start++;
// }

// console.log(sum);

// Вывести четные числа от 1 до определенного числа
// let start = 0;
// const end = prompt('Введите число', 0);
// while (start <= end) {
//     // if (start % 2 === 0) {
//     //     console.log(start);
//     // }
//     // start++;

//     // Другое решение - уменьшаем количество итераций
//     // console.log(start);
//     // start += 2;
// }

// do while

// do {
//     console.log('Выполнится хотя бы 1 раз');
// } while (false)

// let i = 0;

// do {
//     if (i === 5) {
//         i = 0
//     } else {
//         console.log(i);

//         i++
//     }
// } while (i)

// цикл for

// for (let i = 0; i < 5; i++) {
//     console.log(i); // Повторяем 5 раз
// }

// let sum = 0;

// for (let i = 0; i <= 5; i++) {
//     sum += i;
// }

// console.log(sum);

// let i = 0;
// for (; i < 5; i++) {

// }

// // Бесконечный цикл - так лучше не делать
// for (;;) {
// }

// let i = 3;

// while (i) {
//   console.log( i-- );
// }

// let i = 0;
// while (++i < 5) console.log( i );

// let i = 0;
// while (i++ < 5) console.log( i );

// for (let i = 0; i < 5; ++i) console.log( i );
// for (let i = 0; i < 5; i++) console.log( i );

// break

// for (let i = 0; i < 5; i++) {
//     // console.log(i);
//     if (i === 2) break;

//     console.log(i);
// }

// continue

// for (let i = 0; i < 5; i++) {
//     // if (i % 2 === 0) {
//     //     console.log(i);
//     // }

//     if (i % 2 !== 0) continue;

//     console.log(i);
// }

// Задача - Замените for на while
// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//     console.log( `number ${i}!` );

//     i++;
// }

// Задача - Повторять цикл, пока ввод неверен
let userInput = '';

while (userInput <= 100) {
    if (userInput === null) break;

    userInput = prompt('Введите число, большее 100');
}

console.log(userInput);

// 1, 2, 3, 4, 5, 6
// 6 [5, 4, 3] === число 6 надо пропустить