// // Function declaration

// // myFunc(); // 'Код функции'

// // function myFunc() {
// //     console.log('Код функции');
// // }

// // myFunc(); // 'Код функции'

// // Hoisting (Поднятие)

// // var num = 10;

// // console.log(num); // 10

// // var num; => undefined

// // console.log(num); // undefined
// // var num = 10;

// // console.log(num); // 10

// // // var num2; => undefined
// // console.log(num2); // undefined

// // num2 = 15;

// // console.log(num2); // 15

// // var num2;

// // console.log(num);
// // let num = 10;

// // console.log(num2);

// // const num2 = 10;

// // Function expression

// // var func1; => undefined

// // func1(); // undefined() => func1 is not a function

// // var func1 = function() {
// //     console.log('Код функции - 1')
// // }

// // console.log(func1); // Код функции - 1

// // console.log(func2); // Ошибка
// // let func2 = function() {
// //     console.log('Код функции - 2')
// // }

// // console.log(func3); // Ошибка
// // const func3 = function() {
// //     console.log('Код функции - 3')
// // }

// // Вызов функции vs сама функция

// // function getSum(a, b) {
// //     return a + b
// // }

// // console.log(getSum(1, 2)); // 3
// // console.log(getSum); // function getSum(a, b) {return a + b}

// // const getSum2 = getSum;
// // const num = getSum(1, 2);

// // console.log(getSum2); // function getSum(a, b) {return a + b}
// // console.log(getSum2()); // NaN
// // console.log(num); // 3

// // Функции-коллбэки (callback)

// // function func(arg) {
// //     console.log(arg);
// // }

// // func(1)
// // func('123')
// // func(null)
// // func()
// // func(undefined)

// // function myFunc(callback) {
// //     callback(); // randomFunc()
// // }

// // function randomFunc() {
// //     console.log('код')
// // }

// // myFunc(randomFunc()); // myFunc(undefined)
// // myFunc(randomFunc); // 'код'

// function otherFunc1() {
//     console.log(123);
// }

// function otherFunc2() {
//     console.log(222);
// }

// function otherFunc3() {
//     console.log(333);
// }

// function otherFunc4() {
//     console.log(444);

//     return 'random value'
// }

// // function func() {
// //     otherFunc();
// // }

// // func(); // 123

// // function func(callback) {
// //     console.log(callback());
// // }

// // func(otherFunc1); // undefined
// // func(otherFunc2); // undefined
// // func(otherFunc3); // undefined
// // func(otherFunc4); // 'random value'

// // Анонимные функции

// function onTrue() {
//     console.log(true);
// }

// function onFalse() {
//     console.log(false);
// }

// function checkCondition(condition, callback1, callback2) {
//     if (condition) {
//         callback1()
//     } else {
//         callback2()
//     }
// }

// checkCondition(
//     5 > 4,
//     function() { console.log('Код 1') },
//     function() { console.log('Код 2') }
// ); // false

// checkCondition(
//     '',
//     onTrue,
//     onFalse(),
// ); // false

// checkCondition(
//     '',
//     function() { console.log('Код 1') },
//     function() { console.log('Код 2') }
// ); // false

// console.log(function() {}); // function() {}