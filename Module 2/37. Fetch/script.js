const url = "https://jsonplaceholder.typicode.com/posts"

// fetch(url)
//   .then(response => response.json())
//   .then((json) => console.log(json))

// fetch(url, {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log('post', json));

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => console.log(response.headers.get("Content-Type"), response.headers))
//   .then((json) => console.log('put', json));

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.text())
//   .then((json) => console.log('patch', json));

 
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });