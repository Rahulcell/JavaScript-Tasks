let div = document.createElement("div");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
h1.innerHTML = "Main Heading"
h2.innerHTML = "Sub Heading"
div.append(h1,h2);
document.body.appendChild(div)
h1.className = "h1";
h2.className = "h2";