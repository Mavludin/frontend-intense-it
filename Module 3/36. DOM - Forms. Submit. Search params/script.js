// Параметры поиска
// ссылка?username=john&password=aslkdjsalkdjaslkjd

// location
// console.log(location);

const searchForm = document.forms.search;

// new URLSearchParams
// const paramsList = location.search.slice(1).split('&');
// console.log(paramsList);

// paramsList.forEach((param) => {
//     const [key, value] = param.split('=');
//     searchForm[key].value = value;
// })

const searchParams = new URLSearchParams(location.search);

for (const [key, value] of searchParams) {
    // const [key, value] = param;
    searchForm[key].value = value;
}

// Событие submit
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentLink = new URLSearchParams();
    for (const { name, value } of searchForm.elements) {
        if (name) {
            currentLink.append(name, value);
        }
    }

    history.pushState(
        [], 
        [],
        [`${location.href}?${currentLink.toString()}`]
    );
})