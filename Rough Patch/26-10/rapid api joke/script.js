const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '1093464155msha340efbb97a53eep10954fjsnab175318b4ce',
        'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
    }
};

let jokeContainer = document.createElement("div");
jokeContainer.className = "joke-container";
document.body.appendChild(jokeContainer);

const refreshButton = document.createElement("button");
refreshButton.className = "refresh-button";
refreshButton.innerText = "Get Another Joke";
refreshButton.onclick = execute;
document.body.appendChild(refreshButton);

async function execute() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const joke = data[Object.keys(data)[0]];

        jokeContainer.innerHTML = ''; 

        let p = document.createElement("p");
        p.className = "joke-text";
        p.innerText = joke;

        jokeContainer.appendChild(p);
    } catch (error) {
        console.error(error);
    }
}

execute();