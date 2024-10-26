let dl = document.createElement('dl');
dl.className = "my-description-list";

let terms = ["Term 1", "Term 2", "Term 3"];
let descriptions = [
    "Description for term 1.",
    "Description for term 2.",
    "Description for term 3."
];

terms.forEach((term, index) => {
    let dt = document.createElement('dt');
    dt.className = "my-term";
    dt.innerHTML = term;

    let dd = document.createElement('dd');
    dd.className = "my-description";
    dd.innerHTML = descriptions[index];

    dl.append(dt, dd);
});

document.body.append(dl);
