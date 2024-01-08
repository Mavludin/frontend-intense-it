// Задача - +7(928)-555-22-11 ==> 79285552211

// const phoneNumber = '+7(928)-555-22-11';
// let newStr = '';
// for (const char of phoneNumber) {
//     if (isFinite(char)) {
//         newStr += char;
//     }
// }

// console.log(newStr);

// Регулярные выражения - синтаксис
// console.log(/1/);

// // Флаг i - игнорирование регистра
// console.log(/a/i);

// // Флаг m - проверка многострочная
// console.log(/abc/im); // 'hfhfh\nAbC

// // Флаг g - глобальный поиск
// console.log(/123/g); // 'hfhf123hfhfhf123jdjdj123'

// match
// const str = '123 random string 123';
// const str2 = 'string value';
// console.log(str.match(/123/)); // ['123']
// console.log(str2.match(/123/)); // null
// console.log(str2.match(/123/g)); // ['123', '123']

// console.log(str.match(/OM/g)); // null
// console.log(str.match(/OM/gi)); // ['om']

// test
// console.log(/OM/g.test(str)); // null
// console.log(/OM/gi.test(str)); // ['om']

// Символьные классы - числа - \d
// const phoneNumber = '+7(928)-555-22-11';
// const filteredNumber = phoneNumber.match(/\d/g).join('');
// console.log(filteredNumber);

// Символьные классы - пробел - \s
// const str = `\tHello \nworld aaa

// // `;

// console.log(str.match(/\s/g));

// Осторожно - поиск только по пробелу!!!
// console.log(str.match(/ /g));

// Якорь ^ - начало строки
// const regExp = /^java/gi
// const str = 'JavaScript';
// console.log(str.match(regExp)); // ['Java']

// Якорь $ - начало строки
// const regExp = /script$/gi
// const str = 'JavaScript';
// console.log(str.match(regExp)); // ['Script']

// Когда смотрим и на начало и на конец
// const regExp = /^javascript$/gi
// const str = 'JavaScript';
// console.log(str.match(regExp)); // ['JavaScript']

// Экранирование
// const str = 'Я работаю 15.10.2020';
// const regExp = /\d\d\.\d\d\.\d\d\d\d/g;

// Наборы

// const str = 'Hello world';

// console.log(str.match(/aol/g)); // null
// console.log(str.match(/or/g)); // ['or']

// Поиск гласных букв (хотя бы одна должна быть) и порядок не важен
// console.log(str.match(/[ouyeai]/g)); // ['e', 'o', 'o']

// Поиск согласных букв
// console.log(str.match(/[^ouyeai\s]/g)); // ['Набор согласных букв']

// Диапазоны
// const phoneNumber = '+7(928)-555-22-11';
// const regExp = /[0-9]/g;
// console.log(phoneNumber.match(regExp))

// const str = 'Hello world!!!';
// const regExp = /[a-z]/gi;
// console.log(str.match(regExp));

// Поиск букв русского алфавита
// const str = 'Привет world!!';
// const regExp1 = /[a-z]/gi;
// const regExp2 = /\w/gi;
// console.log(str.match(regExp1));
// console.log(str.match(regExp2));

// const regExp3 = /[^а-я]/gi;
// console.log(str.match(regExp3));
// console.log(str.replace(regExp3, ''));

// Комбинируем диапазоны
// const regExp4 = /[а-яa-z]/gi;
// console.log(str.match(regExp4).join(''));

// Задача - валидация формы регистрации
const regForm = document.forms.register;
const errorFileds = document.getElementById('registerValidation').children;

console.log(errorFileds)

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const login = regForm.login;
    const loginRegexp = /[a-z]/gi;
    const filteredLogin = login.value.match(loginRegexp).join('');

    if (filteredLogin.length === login.value.length) {
        console.log('Все норм');
        errorFileds.namedItem(login.name).style.display = 'none';
    } else {
        errorFileds.namedItem(login.name).style.display = 'block';
    }

    const password = regForm.password;
    const passwordRegexp = /[a-z0-9]/gi;

    if (!password.value) return

    const filteredPassword = password?.value.match(passwordRegexp)?.join('');

    console.log(filteredPassword);
    console.log(password.value);

    if (filteredPassword.length === password.value.length) {
        console.log('Все норм');
        errorFileds.namedItem(password.name).style.display = 'none';
    } else {
        errorFileds.namedItem(password.name).style.display = 'block';
    }
})
