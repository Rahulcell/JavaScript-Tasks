let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.innerText = "1st item"
li1.className = "one"
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.innerText = "2nd item"
li2.className = "second"
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.innerText = "3rd item"
li3.className = "third"
ul.appendChild(li3);
document.body.append(ul)