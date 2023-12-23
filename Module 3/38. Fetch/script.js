// AJAX (Асинхронный JS и XML)

// HTTP методы - OPTIONS, GET, POST, PUT/PATCH, DELETE

// GET запрос
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// fetch(url)
//     .then((res) => {
//         console.log(res);
//         // const json = await res.json();
//         // console.log(json);

//         // Альтернативный вариант
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(console.error)
//     .finally()

// const getTodos = async (url) => {
//     const response = await fetch(url);

//     return response.json();
// }

// Обработка результата getTodos
// getTodos(url)
//     .then(console.log)
//     .catch(console.error)

// Другой варивант обработки результата getTodos
// const logTodos = async () => {
//     const todos = await getTodos(url);

//     console.log(todos);
// }

// logTodos();

// Можно запрашивать данные точечно
// const getTodo = async (id) => {
//     const response = await fetch(`${TODOS_URL}/${id}`);

//     console.log(await response.json())
// }

// getTodo(1000);

// Задача - Получите данные о пользователях GitHub

// const getUsers = async (names) => {
//     const users = [];

//     for (const name of names) {
//         const res = 
//             await fetch(`https://api.github.com/users/${name}`, {
//                 headers: {
//                     'User-Agent': name
//                 }
//             });
        
//         if (res.ok) {
//             const user = await res.json();
//             users.push(user);

//         } else {
//             users.push(null);
//         }
//     }

//     return users
// }

// getUsers(['mavludin', 'gaLeoNnn', 'rasul-sulaev'])
//     .then(console.log)

const getUsersInParallel = async (names) => {
    const promises = [];

    for (const name of names) {
        const job = 
             fetch(`https://api.github.com/users/${name}`, {
                headers: {
                    'User-Agent': name
                }
            }).then((res) => {
                return res.json()
            })
            
        promises.push(job);
    }

    return Promise.all(promises);
}

getUsersInParallel(['mavludin', 'gaLeoNnn', 'rasul-sulaev'])
    .then((result) => console.log(result))

// // POST - запрос
// const POSTS_URL = 'https://658073cf6ae0629a3f5540e5.mockapi.io/posts';

// const createBtn = document.getElementById('createBtn');

// createBtn.onclick = () => {
//     const newPost = {
//         title: 'test',
//         body: 'test',
//     }

//     fetch(POSTS_URL, {
//         method: 'POST',
//         body: JSON.stringify(newPost),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }

// const deleteBtn = document.getElementById('deleteBtn');
// deleteBtn.onclick = () => {
//     fetch(`${POSTS_URL}/10`, {
//         method: 'DELETE',
//         // headers: {
//         //     'Content-Type': 'application/json'
//         // }
//     })
// }

// const editBtn = document.getElementById('editBtn');
// editBtn.onclick = () => {
//     const newPost = {
//         title: 'new Title',
//         body: 'new Body',
//     }

//     fetch(`${POSTS_URL}/5`, {
//         method: 'PUT',
//         body: JSON.stringify(newPost),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }


// const patchBtn = document.getElementById('patchBtn');
// patchBtn.onclick = () => {
//     const newPost = {
//         title: 'new Title',
//         body: 'new Body',
//     }

//     fetch(`${POSTS_URL}/5`, {
//         method: 'PATCH',
//         body: JSON.stringify(newPost),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }
