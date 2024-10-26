const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '1093464155msha340efbb97a53eep10954fjsnab175318b4ce',
        'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
    }
};

async function execuet() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const joke = data[Object.keys(data)[0]];

        let div = document.createElement("div");
        div.className = "joke-container";
        
        let p = document.createElement("p");
        p.className = "joke-text";
        p.innerText = joke;
        
        div.appendChild(p);
        document.body.append(div);
    } catch (error) {
        console.error(error);
    }
}

execuet();

