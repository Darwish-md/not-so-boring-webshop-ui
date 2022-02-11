import { createDOM } from "./create-DOM.js"
import { generateRandomProducts } from "./generate-products.js";
import { scroll } from "./helper-functions.js";

if (document.readyState == 'loading') {

    document.addEventListener('DOMContentLoaded', ready)

} else {

    const products = await generateRandomProducts();
    ready(products);

}

async function ready(products) {



    let page = 1;

    let currentProducts = paginate(page, products);

    let formattedProductList = formatProductList(currentProducts);

    createDOM(formattedProductList);

    const prevBtn = document.getElementById("prevbtn");

    prevBtn.addEventListener("click", () => {

        page--;

        currentProducts = paginate(page, products);

        let formattedProductList = formatProductList(currentProducts);

        createDOM(formattedProductList);

        scroll();

        if (page = 1) {
            prevBtn.disabled = true;
            nextBtn.disabled = false;
        }

    });

    const nextBtn = document.getElementById("nextbtn");

    nextBtn.addEventListener("click", () => {

        page++;

        currentProducts = paginate(page, products);

        let formattedProductList = formatProductList(currentProducts);

        createDOM(formattedProductList);

        scroll();

        if (page = products.length / 10) {
            nextBtn.disabled = true;
            prevBtn.disabled = false;
        }

    });

    const searchBtn = document.getElementById("searchbtn");

    searchBtn.addEventListener("click", () => {
        searchProductsByName(products);
    });

    const home = document.getElementById("home");

    home.addEventListener("click", () => {

        scroll();

        let page = 1;

        let currentProducts = paginate(page, products);

        let formattedProductList = formatProductList(currentProducts);

        createDOM(formattedProductList);
        
    })

    console.log(determineTopProduct(formattedProductList));

    const topProductBtn = document.getElementById("top-product");

    topProductBtn.addEventListener("click", () => {

        let topProduct = determineTopProduct();

        let formattedProduct = formatProductList(topProduct);

        createDOM(formattedProduct);

    });
}


function formatProductList(products) {

    const formattedProductList = [];

    products.forEach((product) => {

        const productDetails = product.split("-");

        var productObject = {
            name: `${productDetails[0]}`,
            description: `${productDetails[1]}`,
            price: productDetails[2],
            rating: productDetails[3],
            image: `${productDetails[4]}`
        }

        formattedProductList.push(productObject);

    });

    return formattedProductList;
}

function paginate(page, products) {

    const productsPerPage = 10;

    let start, end, currentProducts;

    start = (page - 1) * productsPerPage;

    end = start + productsPerPage;

    currentProducts = products.slice(start, end);

    document.getElementById("page-number").innerHTML = page;

    return currentProducts;
}


/*const determineTopProduct = (productList) => {

    return productList.reduce(
        (acc, val) => {
            return Math.max(acc.rating, val.rating);
            return acc.rating > val.rating ? acc.rating : val.rating;
        }, productList[0]);
}*/

const searchProductsByName = (products) => {

    const searchkeyword = document.querySelector("input").value;

    if (searchkeyword.length != 0) {

        const result = products.filter((product) => {

            return product.toLowerCase().indexOf(searchkeyword.toLowerCase()) >= 0;

        });

        const formattedProductList = formatProductList(result);

        createDOM(formattedProductList);
    }

}

const determineTopProduct = (productList) => {
    return productList.reduce(
        (acc, val) => {
            return Math.max(parseFloat(acc.rating), parseFloat(val.rating));
            //return parseFloat(acc.rating) > parseFloat(val.rating) ? parseFloat(acc.rating) : parseFloat(val.rating);
        }, productList[0]);
}




