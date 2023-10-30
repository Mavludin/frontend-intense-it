const body = document.body;

// console.log(body.parentNode === document.documentElement);
// console.log('previousSibling', body.previousSibling);
// console.log('nextSibling', body.nextSibling);
// console.log('childNodes', body.childNodes);
// console.log('firstChild', body.firstChild);
// console.log('lastChild', body.lastChild);

// console.log(body.parentElement);
// console.log('previousSibling', body.previousElementSibling);
// console.log('nextSibling', body.nextElementSibling);
// console.log('children', body.children);
// console.log('firstChild', body.firstElementChild);
// console.log('lastChild', body.lastElementChild);

// const tBody = document.body.firstElementChild.firstElementChild;
// const tableRows = Array.from(tBody.children);

// for (let i = 0; i < tableRows.length; i++) {
//     for (let j = 0; j < tableRows[i].children.length; j++) {
//         if (i === j) {
//             tableRows[i].children[j].style.backgroundColor = 'red'
//         }
//     }
// }

// const divElement = document.body.firstElementChild;
// const ulElement = divElement.nextElementSibling;
// const lastLiElement = ulElement.lastElementChild;

// let element = null;

// for (const item of ulElement.children) {
//     if (item.textContent === 'Пит') {
//         element = item;
//         break;
//     }
// }

// for (let i = 0; i < ulElement.children.length; i++) {
//     if (ulElement.children[i].textContent === 'Пит') {
//         element = ulElement.children[i];
//         console.log(i)
//         break;
//     }
// }

// console.log(element);

// const element = [...ulElement.children].find((item, index) => {
//     return item.textContent === 'Пит'
// })

// console.log(element);

// console.log(ulElement.lastChild.nextSibling);
// console.log(ulElement.children[0].previousSibling);
