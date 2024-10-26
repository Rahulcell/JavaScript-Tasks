let ol1 = document.createElement("ol");
ol1.className = "main-list";

let li1 = document.createElement("li");
li1.innerHTML = "pencil";
li1.className = "list-item";
ol1.append(li1);

let li2 = document.createElement("li");
li2.innerHTML = "pen";
li2.className = "list-item";
ol1.append(li2);

let liNestedTitle = document.createElement("li");
liNestedTitle.innerHTML = "Electronics:";
liNestedTitle.className = "nested-title";
ol1.append(liNestedTitle);

let ol2 = document.createElement("ol");
ol2.className = "nested-list";

let li3 = document.createElement("li");
li3.innerHTML = "computer";
li3.className = "nested-item";
ol2.append(li3);

let li4 = document.createElement("li");
li4.innerHTML = "mobile";
li4.className = "nested-item";
ol2.append(li4);

let li5 = document.createElement("li");
li5.innerHTML = "Tablet";
li5.className = "nested-item";
ol2.append(li5);

liNestedTitle.append(ol2);

let li6 = document.createElement("li");
li6.innerHTML = "sharpener";
li6.className = "list-item";
ol1.append(li6);

let li7 = document.createElement("li");
li7.innerHTML = "Fevicol";
li7.className = "list-item";
ol1.append(li7);

document.body.append(ol1);