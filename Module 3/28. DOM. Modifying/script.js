// Создание узла
// const pageTitle = 'Заголовок';
// const h1 = document.createElement('h1');
// // console.log(h1);

// h1.textContent = pageTitle;
// h1.className = 'green';
// // console.log(h1);

// // document.body.append(h1); // Вставка в конец
// document.body.prepend(h1); // Вставка в начало
// document.body.before(h1); // Вставка до body
// document.body.after(h1); // Вставка после body
// document.body.replaceWith(h1); // Замена


// Задача - 1

// const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae voluptas magnam natus impedit deserunt, eligendi et magni aliquam eaque amet rem vel facilis illum. Fugit corporis aut soluta ea!';
// const p = document.createElement('p');
// p.textContent = text;
// h1.after(p);

// Задача - 2
// const todoList = [
//     {id: 1, title: 'Task 1'},
//     {id: 2, title: 'Task 2'},
//     {id: 3, title: 'Task 3'},
// ]

// const ul = document.createElement('ul');
// // todoList.forEach(({ title }) => {
// //     const li = document.createElement('li');
// //     li.textContent = title;
// //     ul.append(li);
// // })

// // console.log(ul);
// // p.after(ul);

// // Удаление узла - remove()
// // h1.remove();

// // const liElements = document.querySelectorAll('li');

// // const removeElement = (index) => liElements[index].remove()
// // const addElement = (parent, newElement) => parent.append(newElement)
// // const editElement = (index, content) =>
// //     liElements[index].textContent = content

// // Вставка готового шаблона - insertAdjacentElement
// // const template = `
// //     <p>Какой-то текст</p>
// // `
// // "afterbegin" | "afterend" | "beforebegin" | "beforeend";

// // document.body.insertAdjacentHTML('beforeend', template);
// // document.body.append(template);

// let template = '';

// todoList.forEach(({ title }) => {
//     template += `<li>${title}</li>`
// })

// console.log(template)

// // ul.innerHTML = template;
// ul.insertAdjacentHTML('beforeend', template);
// console.log(ul)
// // document.body.append(ul);
// document.body.insertAdjacentHTML('beforeend', `<ul>${template}</ul>`);

// const ol = document.querySelector('ol');
// ol.textContent = '';
// ol.innerHTML = '';
// [...ol.children].forEach((item) => {
//     item.remove();
// })
// while(ol.firstElementChild) {
//     ol.firstElementChild.remove()
// }

// const data = {
//     "Рыбы": {
//       "форель": {},
//       "лосось": {}
//     },
  
//     "Деревья": {
//       "Огромные": {
//         "секвойя": {},
//         "дуб": {},
//       },
//       "Цветковые": {
//         "яблоня": {},
//         "магнолия": {}
//       }
//     }
// };
