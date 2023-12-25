const laptops = JSON.parse(localStorage.getItem('laptops'));

console.log(laptops)

let template = '';

laptops?.forEach((laptop) => {
    template += `
        <div>
            <h2 class="title">${laptop.title}</h2>
            <p class="description">${laptop.description}</p>
            <div class="price">Price: <span>${laptop.price}</span></div>
        </div>
    `
})

document.body.insertAdjacentHTML('beforeend', template);