let table = document.createElement("table");
let tHead = document.createElement("thead");
let trHead = document.createElement("tr");

let headData = [
  "id",
  "title",
  "price",
  "description",
  "category",
  "image",
  "rating",
];
for (let element of headData) {
  let th = document.createElement("th"); 
  th.innerText = element;
  trHead.appendChild(th);
}
tHead.appendChild(trHead);
table.appendChild(tHead);

let tBody = document.createElement("tbody");

let getData = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();

  for (let obj of data) {
    let tr = document.createElement("tr"); 
    for (let key of headData) {
      let td = document.createElement("td");

      if (key === "image") {
        let img = document.createElement("img");
        img.src = obj[key];
        td.appendChild(img);
      } else if (key === "rating") {
        let rat = `(${obj[key]["rate"]}) - (${obj[key]["count"]})`;
        td.innerText = rat;
      } else {
        td.innerText = obj[key];
      }

      tr.appendChild(td);
    }
    tBody.appendChild(tr);
    appendData();
  }
};

getData();

function appendData(){
    table.appendChild(tBody);
document.body.appendChild(table);
}
