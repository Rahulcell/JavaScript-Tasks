let table = document.createElement("table");
table.className = "styled-table"; 

let tr1 = document.createElement("tr");
tr1.className = "header-row"; 

let th1 = document.createElement("th");
th1.innerHTML = "S.No";
tr1.appendChild(th1);

let th2 = document.createElement("th");
th2.innerHTML = "Name";
tr1.appendChild(th2);

let th3 = document.createElement("th");
th3.innerHTML = "Batch";
tr1.appendChild(th3);

table.append(tr1);

let names = ["Rahul", "Krishna", "Saikiran", "Sudheer"];
let batches = ["16R", "17R", "18R", "19R"];

for (let i = 0; i < names.length; i++) {
    let tr = document.createElement("tr");
    tr.className = "data-row"; 
    
    let td1 = document.createElement("td");
    td1.innerHTML = i + 1; 
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = names[i];
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = batches[i];
    tr.appendChild(td3);

    table.append(tr);
}

document.body.append(table);
