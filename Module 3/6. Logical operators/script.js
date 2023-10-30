// Оператор ИЛИ (||)

// console.log(0 || 1 || ' ' || false || true); // 1
// console.log(0 || '' || false); // false
// console.log(0 || '' || undefined); // undefined
// console.log('' || ' ' || true); // ' '

// let num;
// let num2 = null;
// let num3 = 50;

// // С переменными
// console.log(num || num2 || num3) // 50

// C if

// let num = 10;

// if (num % 2 === 0 || num > 100) { // 
//     console.log('')
// }

// let num;
// let num2 = null;
// let num3 = 50;

// let result;

// if (num) {
//     result = num
// } else if (num2) {
//     result = num2
// } else {
//     result = num3
// }

// console.log(result); // 50

// let result = num || num2 || num3; // 50

// let birthYear = prompt('введите что-то', ''); // '' => false

// if (!birthYear) {
//     birthYear = 0;
// }

// let birthYear = prompt('введите что-то', '') || 0 // '' => false

// Оператор И (&&)

// console.log(1 && 0) // 0
// console.log(1 && '' && undefined) // ''
// console.log(1 && true) // true

// let num;
// let num2 = null;
// let num3 = 50;

// // С переменными
// console.log(num && num2 && num3) // undefined

// C if

// let num = 10;

// if (num % 2 === 0 && num > 100) { //  false
//     console.log('')
// }

// let num = 10;
// // let result;

// // if (num) {
// //     result = num + 50
// // }

// // console.log(result); // 60
// num = '';

// // let result = num && num + 50;
// let result = num ? num + 50 : 0;

// console.log(result); // 60

// Комбинация || и &&

// console.log(1 || 0 && '') // 1
// console.log((1 || 0) && '') // ''

// // Оператор отрицания

// console.log(!true) // false
// console.log(!'') // true

// С переменными

// let num;
// let num2 = null;
// let num3 = 50;

// console.log(num && !num2 && num3) // undefined
// console.log(num || !num2 || num3) //  true

// let num = 0;

// if (!num) {
    
// }

// Оператор двойного отрицания !!

// console.log(!!undefined) // false

// Оператор нулевого слияния ??

// let num; // undefined
// let num2 = 0;

// console.log(num ?? 'str') // 'str'
// console.log(num2 || 'str') // 'str'

// console.log(num2 ?? 'str') // 0

// let num = null;
// let num2 = undefined;

// let num3 = num ?? 0; // 0
// let num4 = num2 ?? 0; // 0

// // null - пустота
// let userData = null;

// // undefined - значение неопределено
// let num;

// let num; // undefined

// console.log(undefined ?? null ?? 0); // 0
// console.log(undefined ?? (null || 0)); // 0
// console.log(undefined ?? (null && 0)); // 0