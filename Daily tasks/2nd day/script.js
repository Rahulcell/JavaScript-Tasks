let execute = async () => {
    let temp = "http://localhost:3000/products"; 
    let res = await fetch(temp);
    let data = await res.json();
    data.forEach(obj => {
        let options = {
            "method": "DELETE"
        };
        let url = `${temp}/${obj["id"]}`; 
        deleteData(url, options); 
    });
};

let deleteData = async (url, options) => { 
    let res = await fetch(url, options);
    if (res.ok) {
        console.log("data deleted");
    }
};
execute();