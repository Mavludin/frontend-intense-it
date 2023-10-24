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

const tBody = document.body.firstElementChild.firstElementChild;
const tableRows = Array.from(tBody.children);

for (let i = 0; i < tableRows.length; i++) {
    for (let j = 0; j < tableRows[i].children.length; j++) {
        if (i === j) {
            tableRows[i].children[j].style.backgroundColor = 'red'
        }
    }
}

