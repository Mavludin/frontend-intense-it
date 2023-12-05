// const loginForm = document.querySelector('form[name="loginForm"]');
// const loginInput = loginForm.querySelector('input[name="login"]');
// const passwordInput = loginForm.querySelector('input[name="password"]');

// console.log(passwordInput, loginInput);

// Удобный интерфейс навигации по формам через атрибут name
// console.log(document.forms);
// console.log(document.forms[0]);

// const { loginForm } = document.forms;
// const loginForm = document.forms.loginForm;
// console.log(loginForm);

// const loginInput = loginForm.login;
// const passwordInput = loginForm.password;

// console.log(loginInput, passwordInput);

// Radio

const { regForm } = document.forms;
// console.dir(regForm.gender);

// regForm.gender[0].checked = true;

// regForm.about.value = 'Что-то о себе'
// console.log(regForm.about.value);


// // Двунаправленная связь
// console.log(regForm.gender[0].form);
// console.log(regForm.about.form);

// select
// const courses = regForm.courses;

// Указание выбранного элемента через JavaScript
// courses.value = "frontend";
// courses.selectedIndex = 1;

// Выбор нескольких элементов select
// const selectedItems = [...courses.options]
//     .filter((item) => item.selected)
//     .map((item) => item.value)
// console.log(selectedItems)

// Задача - сформировать select с вариантами стран на основе массива
const countries = [
    {
        code: 'ru',
        name: 'Russia',
        selected: false,
    },
    {
        code: 'us',
        name: 'USA',
        selected: true,
    },
    {
        code: 'uk',
        name: 'United Kingdom',
        selected: false,
    },
]

// Несколько операций append
// const countriesSelect = document.createElement('select');
// countriesSelect.name = 'countries';

// countries.forEach(({ name, code }) => {
//     const option = new Option(name, code);
//     countriesSelect.append(option);
// })

// document.body.append(countriesSelect);

// Один append
const options = countries.map(({ code, name, selected }) => {
    return new Option(name, code, selected, selected)
})

const countriesSelect = document.createElement('select');
countriesSelect.name = 'countries';
countriesSelect.append(...options);

document.body.append(countriesSelect);

// Можно так - но не стоит
// document.body.insertAdjacentHTML('beforeend',
// `<select name="courses">
//     ${countries.map((country) => 
//     `<option value=${country.code}>${country.name}</option>`)}
// </select>`
// );

