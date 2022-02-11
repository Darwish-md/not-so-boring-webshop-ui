//call imgflip API
async function callAPI() {

    const url = 'https://api.imgflip.com/get_memes';

    try {

        return fetch(url).then(response => response.json());

    } catch (error) {

        console.log(error);

    }
}

export async function getMemes() {

    const memesNames = [];

    const memesImages = [];

    const response = await callAPI().then(response => {

        for (var i = 0; i < 20; i++) {

            var meme = response.data.memes[i];

            memesNames.push(meme.name);

            memesImages.push(meme.url);
        }

    });

    return [memesNames, memesImages];

}

