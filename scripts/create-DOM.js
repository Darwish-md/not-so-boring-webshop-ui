export function createDOM(productsToDisplay) {

    const productsContainer = document.getElementsByClassName("products-container")[0];

    productsContainer.innerHTML = '';

    productsToDisplay.forEach(product => {

        var newdiv = document.createElement('div');

        newdiv.className = "card image-place-holder";

        newdiv.innerHTML = `
            <img src="${product.image}" style="width:100%">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <p class="rating">${product.rating}</p>`;

        productsContainer.appendChild(newdiv);

    });
}