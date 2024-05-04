// const URL = 'https://jsonplaceholder.typicode.com/posts'

// fetch(URL)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.message)
//     }

//     console.log("Всё отлично")
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// const fetchData = async () => {
//   try {
//     const response = await fetch(URL);

//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   } catch (error) {
//       if (Number(error) === 404) {
//         return "Ресурс не найден"
//       }
//   } finally {
//     console.log('Finally');
//   }
// }

// fetchData();

