function scroll() {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}

function randomNumber(min, max) {

    let num = Math.random() * (max - min) + min;

    return num.toFixed(1);

}

export {randomNumber, scroll}