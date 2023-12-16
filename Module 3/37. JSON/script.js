// JSON

// const user = {
//     name: 'user',
//     id: 1,
// }

// console.log(user);
// console.log(JSON.stringify(user));
// console.log(typeof JSON.stringify(user));

// const user = {
//     name: 'user',
//     id: 1,
//     foo() {
//         console.log(this.name)
//     },
//     key1: undefined,
//     key2: null,
//     flag: false,
//     numbers: [1, 2, 3],
//     obj: {
//         age: 12
//     }
// }

// console.log(JSON.stringify(user));

// parse
// const jsonObject = '{"age": 12}';
// console.log(jsonObject);
// console.log(JSON.parse(jsonObject));

// const user = {
//     name: 'user',
//     id: 1,
// }

// console.log(JSON.parse(JSON.stringify(user)));

// let posts = []
// // fetch
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => posts = data)

// console.log(posts); // []

// Альтернатива
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(console.log)
//     .then(async (response) => {
//         console.log(await response.json())
//     })

// Ситуация с ошибкой
// fetch('https://jsonplaceholder.typicode.com/post')
//     .then((response) => {
//         console.log(response);
//         // return response.json()
//         return response
//     })
//     // .then(console.log)
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('Finally');
//     })

// console.log(1);
// fetch()
// console.log(2);

const showLoader = () => {
    const loader = document.querySelector('h1');
    loader.style.display = 'block';
}

const hideLoader = () => {
    const loader = document.querySelector('h1');
    loader.style.display = 'none';
}

const getUsers = async (url) => {
    showLoader();

    const response = await fetch(url);
    return response.json();
}

const USERS_URL = 
    'https://jsonplaceholder.typicode.com/users';

const displayUsers = async () => {
    const users = await getUsers(USERS_URL);

    hideLoader();

    const container = document.createElement('div');
    container.id = 'users';

    users.forEach((user) => {
        const userItem = `
            <div class="user">
                <div class="name">${user.name}</div>
                <div class="username">${user.username}</div>
            </div>
        `;
    
        container.insertAdjacentHTML('beforeend', userItem);
    })

    document.body.append(container);
}

displayUsers()