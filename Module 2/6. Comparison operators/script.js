// >, <, >=, <=, ==, ===, !=, !==

// Сравнение чисел
// console.log(1 > 0); // true
// console.log(1 < 0); // false
// console.log(1 >= 0); // true
// console.log(1 <= 0); // false

// Сравнение строк
// const str1 = 'abc';
// const str2 = 'bca';

// console.log(str1 > str2);
// console.log(str1 < str2);
// console.log(str1 >= str2);
// console.log(str1 <= str2);

// Чем длиннее, тем больше, если первые символы равны
// const str1 = 'aaa';
// const str2 = 'aaaa';

// console.log(str1 < str2);
// console.log(str1 <= str2);

// Регистр важен
// console.log('A' > 'a'); // false
// console.log('A' < 'a'); // true

// Сравнение значений разных типов
// console.log(12 > '0'); // true
// console.log('12' > '0'); // true
// console.log('12' > 0); // true
// console.log(true > false); // 1 > 0 (true)
// console.log(false >= '0'); // 0 >= 0 (true)
// console.log(' 0  \n' >= 0); // 0 >= 0 (true)
// console.log('hg12' >= 0); // NaN >= 0 (false)

// Нестрогое равенство ==
// console.log(0 == 0); // true
// console.log('0' == 0); // true
// console.log('' == 0); // true
// console.log('' == '0'); // false
// console.log(true == 1); // true
// console.log(false == 0); // true
// console.log('abc' == 'abc'); // true
// console.log('abc' == 'abcd'); // false

// Cтрогое равенство ===
// console.log(0 === 0); // true
// console.log(0 === '0'); // false
// console.log('abc' === 'abc'); // true
// console.log(true === 1); // false
// console.log(true === true); // true
// console.log(1 === 1); // true

// Нестрогое неравенство !=
// console.log(0 != 0); // false
// console.log('0' != 0); // false
// console.log('' != 0); // false
// console.log('' != '0'); // true
// console.log(true != 1); // false
// console.log(false != 0); // false
// console.log('abc' != 'abc'); // false
// console.log('abc' != 'abcd'); // true

// Cтрогое неравенство !==
// console.log(0 !== 0); // false
// console.log(0 !== '0'); // true
// console.log('abc' !== 'abc'); // false
// console.log(true !== 1); // true
// console.log(true !== true); // false
// console.log(1 !== 1); // false

// Исключение с null и undefined
// console.log(null == undefined); // true
// console.log(null == null); // true
// console.log(undefined == undefined); // true

// console.log(null === undefined); // false
// console.log(null === null); // true
// console.log(undefined === undefined); // true

// console.log(null >= 0); // true
// console.log(null > 0); // false
// console.log(null == 0); // Только можно сравнивать с undefined (==) false

// console.log(undefined >= 0); // NaN >= 0  false
// console.log(undefined > 0); // NaN > 0 false
// console.log(undefined == 0); // Только можно сравнивать с null (==) false

// Лучше проверять на null и undefined конкретно
// let data; // undefined
// console.log(data === undefined); 
// console.log(data === null); 