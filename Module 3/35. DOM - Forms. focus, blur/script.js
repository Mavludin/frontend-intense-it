// focus/blur

// const userName = document.forms.form.username;
// const password = document.forms.form.password;

// userName.addEventListener('focus', () => {
//     console.log('focus')
// })

// userName.addEventListener('blur', () => {
//     console.log('blur')
// })

// const formElements = document.forms.form.elements;

// for (const elem of formElements) {
//     elem.addEventListener('focus', (e) => {
//         console.log('focus', e.target.name);
//     })

//     elem.addEventListener('blur', (e) => {
//         console.log('blur', e.target.name)
//     })
// }

// focusin/focusout
// const form = document.forms.form;

// form.addEventListener('focusin', (e) => {
//     console.log('focus', e.target.name);
// })

// form.addEventListener('focusout', (e) => {
//     console.log('blur', e.target.name)
// })

// const view = document.getElementById('view');

// view.addEventListener('click', () => {
//     const textarea = document.createElement('textarea');
//     textarea.classList.add('edit');
//     textarea.value = view.innerHTML;

//     view.replaceWith(textarea);
//     textarea.focus();

//     textarea.addEventListener('blur', (e) => {
//         view.innerHTML = e.target.value;
//         textarea.replaceWith(view);
//     })
// })

// change

// const form = document.forms.form;
// const userName = document.forms.form.username;

// const error = document.querySelector('.error');

// userName.addEventListener('change', (e) => {
//     const value = e.target.value;

//     if (value.length < 3) {
//         error.style.display = 'block';
//     } else {
//         error.style.display = 'none';
//     }
// })


// const courses = document.forms.form.courses;

// courses.addEventListener('change', (e) => {
//     const value = e.target.value;

//     console.log(value);
// })

// const genders = document.forms.form.gender;

// for (const gender of genders) {
//     gender.addEventListener('change', (e) => {
//         if (e.target.checked) {
//             console.log(e.target.id)
//         }
//     })
// }

// form.addEventListener('change', (e) => {
//     console.log(e.target.name);
// })

// событие input

const userName = document.forms.form.username;

// const error = document.querySelector('.error');

// userName.addEventListener('input', (e) => {
//     console.log(e.target.value);

//     const value = e.target.value;

//     if (value.length < 3) {
//         error.style.display = 'block';
//     } else {
//         error.style.display = 'none';
//     }
// })

// Задача - отфильтровать массив

// const str = 'e';
// const newArr = [];

// const users = [
//     {
//         id: 1,
//         name: 'Alex',
//     },
//     {
//         id: 2,
//         name: 'James',
//     },
//     {
//         id: 3,
//         name: 'John',
//     },
//     {
//         id: 4,
//         name: 'Gabriel',
//     },
// ]

// // for (const user of users) {
// // фильтр игнорируем
// //     if (user.name.toLowerCase().includes(str.toLowerCase())) {
// //         newArr.push(user);
// //     }
// // }

// // console.log(newArr)

// userName.addEventListener('input', (e) => {
//     const value = e.target.value.toLowerCase();

//     const filteredUsers = [];

//     if (value !== '') {
//         for (const user of users) {
//             if (user.name.toLowerCase().includes(value)) {
//                 filteredUsers.push(user);
//             }
//         }

//         console.log(filteredUsers);
//     } else {
//         // Если ничего не введено, возвращаем исходный массив
//         console.log(users);
//     }

// })
