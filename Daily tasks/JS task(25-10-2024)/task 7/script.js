let section = document.createElement('section');
section.className = "my-section";

let head = document.createElement('h1');
head.className = "my-heading";
head.innerHTML = "This is heading";

let para = document.createElement('p');
para.className = "my-paragraph";
para.innerHTML = "This is a paragraph. This is a paragraph. This is a paragraph.";

section.append(head, para);
document.body.append(section);
