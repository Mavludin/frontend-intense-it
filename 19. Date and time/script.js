// Дата и время

// Вывод текущей даты
// console.log(new Date()); // Текущие дата и время
// console.dir(new Date()); // Вывод объекта

// Вывод информации о дате и времени по отдельности
// const date = new Date();

// console.log(date.getFullYear()); // 2023
// console.log(date.getMonth()); // 8-й индекс - сентябрь
// console.log(date.getDate()); // 8
// console.log(date.getDay()); // 5-й индекс - пятница
// console.log(date.getHours()); // 19
// console.log(date.getMinutes()); // 54
// console.log(date.getSeconds()); // 19

/*

Написать функцию formatTime(hours, minutes, seconds), которая принимает
часы, минуты, и секунды и возвращает время в таком формате:
hh:mm:ss

Примеры:
formatTime(1, 15, 35); // 01:15:35
formatTime(10, 10, 35); // 10:15:35
formatTime(5, 5, 5); // 05:05:05

*/

// const addZeroToDigit = (digit) => digit < 10 ? '0' + digit : digit

// const formatTime = (hours, minutes, seconds) => {
//     const formattedHours = addZeroToDigit(hours);
//     const formattedMinutes = addZeroToDigit(minutes);
//     const formattedSeconds = addZeroToDigit(seconds);

//     return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// }

// console.log(formatTime(
//     date.getHours(),
//     date.getMinutes(),
//     date.getSeconds()
// ));

// Функции toLocaleString, toLocaleTimeString, toLocaleDateString

// console.log(new Date().toLocaleString()); // дата и время через запятую
// console.log(new Date().toLocaleTimeString()); // только время
// console.log(new Date().toLocaleDateString()); // только дата

// Получение названия дня недели - вручную
// const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(weekDays[new Date().getDay()]);

// Получение названия дня недели - готовое решение
// const date = new Date();
// console.log(date.toLocaleString("default")); // текущий формат
// console.log(date.toLocaleString('en-US')); // американский
// console.log(date.toLocaleString('en-US', { weekday: "narrow" })); 
// console.log(date.toLocaleString('en-US', { weekday: "short" })); 
// console.log(date.toLocaleString('en-US', { weekday: "long" })); 

// console.log(date.toLocaleString('en-US', { weekday: "long", year: "numeric" })); 

// console.log(date.toLocaleString('default', { weekday: "long" }));
// console.log(date.toLocaleString('default', { weekday: "short" }));
// console.log(date.toLocaleString('default', { weekday: "narrow" }));

// timestamp
// const date = new Date();

// console.log(date.valueOf()); // миллисекунды текущей даты - лучше исползовать getTime
// console.log(date.getTime()); // миллисекунды текущей даты

// сравнение дат
// const date1 = new Date();
// const date2 = new Date();

// console.log(date1.getTime());
// console.log(date2.getTime());

// Работет правильно
// if (date1 > date2) {
//     console.log('Дата 1 больше Даты 2')
// } else if (date2 > date1) {
//     console.log('Дата 2 больше Даты 1')
// } else {
//     console.log('Даты равны')
// }

// // Уже не работает
// if (date1 > date2) {
//     console.log('Дата 1 больше Даты 2')
// } else if (date2 === date1) {
//     console.log('Даты равны')
// } else {
//     console.log('Дата 2 больше Даты 1')
// }

// console.log(+new Date());

// Можно задать кастомную дату в формате год/месяц/число
// console.log(+new Date('2020/12/15'));

// console.log(new Date() === new Date()); // false
// console.log(+new Date() === +new Date()); // true
// console.log(new Date().getTime() === new Date().getTime()); // true

// Решение правильное
const date1 = new Date();
const date2 = new Date('2022/5/20 15:00:00');

console.log(date1);
console.log(date2);

const timestamp1 = date1.getTime();
const timestamp2 = date2.getTime();

// Условия работают правильно, т.к. сравниваем числа
console.log(timestamp1 === timestamp2);
console.log(timestamp1 > timestamp2);
console.log(timestamp1 < timestamp2);

function compareAsc(dateLeft, dateRight) {
    const _dateLeft = new Date(dateLeft)
    const _dateRight = new Date(dateRight)
  
    // можно было бы еще так
    const diff = _dateLeft.getTime() - _dateRight.getTime()
    return diff;
  
    // решение из библиотеки
    if (diff < 0) {
      return -1
    } else if (diff > 0) {
      return 1
      // Return 0 if diff is 0; return NaN if diff is NaN
    } else {
      return diff
    }
}

const diff1 = compareAsc('2022/5/20 15:00:00', '2023/5/20 15:00:00');
const diff2 = compareAsc('2022/5/20 15:00:00', '2022/5/20 15:00:00');
const diff3 = compareAsc('2023/5/20 15:00:00', '2022/5/20 15:00:00');

console.log(diff1);
console.log(diff2);
console.log(diff3);
