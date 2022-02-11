import { getMemes } from "./call-imgflip-API.js";
import { randomNumber } from "./helper-functions.js";

export async function generateRandomProducts() {

    const randomProducts = [];

    const ratings = generateUniqueRatings();

    let productName, productImage, productDescription, productPrice, productRating;

    const [memesNames, memesImages] = await getMemes();

    for (var i = 0; i < 20; i++) {

        productName = memesNames[i];

        productDescription = generateProductDescription();

        productPrice = `${randomNumber(1, 3000)} €`;

        productRating = `${ratings[i]}/10`;

        productImage = memesImages[i];

        var product = `${productName}-${productDescription}-${productPrice}-${productRating}-${productImage}`;

        randomProducts.push(product);


    }

    return randomProducts;

}

function generateUniqueRatings() {

    const ratings = [];

    while (ratings.length < 20) {

        var r = randomNumber(0, 10);

        if (ratings.indexOf(r) === -1) ratings.push(r);

    }
    
    return ratings;

}

function generateProductDescription() {

    let result = '';

    const randomWords = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
        'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut',
        'labore', 'et', 'dolore', 'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim',
        'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi',
        'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat.', 'Duis', 'aute',
        'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse',
        'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur',
        'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa',
        'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum']

    const arrayLength = randomWords.length;

    const length = randomNumber(30, 50);

    for (var i = 1; i < length; i++) {

        if (i % 2 == 0) {

            result += ' ';

            continue;
        }

        result += randomWords[Math.floor(Math.random() * arrayLength)];

    }

    return result;
}

/* Another way to generate product description:

function generateProductDescription() {

    let result = '';

    const characters = 'abcdefghijklmnopqrstuvwxyz';

    const charactersLength = characters.length;

    const length = randomNumber(45, 65);

    for (let i = 0; i < length; i++) {

        if (i % 5 == 0 && i > 0) {

            result += ' ';

            continue;
        }

        result += characters.charAt(Math.floor(Math.random() * charactersLength));

    }

    return result;
}
*/