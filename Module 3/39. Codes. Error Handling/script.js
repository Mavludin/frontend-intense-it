// Коды состояния ответов HTTP

const URL = 'https://jsonplaceholder.typicode.com/todos/2000';

// fetch(URL)
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.dir(error);
//         console.error(`${error.status}: ${error.statusText}`);
//     })

const handleStatusText = (status) => {
    if (status === 404) {
        return 'Запрашиваемый ресур не найден'
    }
}

// const fetchTodos = async () => {
//     const response = await fetch(URL);

//     if (response.ok) {
//         return response.json();
//     }

//     const {status} = response;
//     throw new Error(`${status}: ${handleStatusText(status)}`);
// }

// fetchTodos()
//     .then(console.log)
//     .catch(console.error)

// try/catch/finally

const fetchTodos = async () => {
    try {
        const response = await fetch(URL);

        if (response.ok) {
            return response.json();
        }

        const {status} = response;
        throw new Error(`${status}: ${handleStatusText(status)}`);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Finally');
    }
}

fetchTodos();

// setTimout и try/catch
try {
    setTimeout(function() {
      console.log('Код асинхронный')
    }, 1000);
} catch (e) {
    alert( "не сработает" );
}