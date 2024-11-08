async function getData() {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  localStorage.setItem("data", JSON.stringify(data));
  displayData(data);
}
getData();

let searchInput = document.getElementById("search-input");
searchInput.addEventListener("change", () => {
  console.log(searchInput.value);
});
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  if (data.length === 0) {
    alert("No Data Available");
    displayData(data);
  } else {
    // Get the value from the search input (or the category you want to filter by)
    let category = searchInput.value.trim().toLowerCase(); // Convert to lowercase for case-insensitive matching

    // Filter based on the category
    let result;
    switch (category) {
      case "electronics":
        result = data.filter(
          (obj) => obj["category"].toLowerCase() === "electronics"
        );
        break;
      case "men's clothing":
        result = data.filter(
          (obj) => obj["category"].toLowerCase() === "men's clothing"
        );
        break;
      case "jewelery":
        result = data.filter(
          (obj) => obj["category"].toLowerCase() === "jewelery"
        );
        break;
      case "women's clothing":
        result = data.filter(
          (obj) => obj["category"].toLowerCase() === "women's clothing"
        );
        break;
      default:
        result = []; // If no valid category is selected, return an empty array
        alert("No matching category found");
    }

    // Display the filtered data
    if (result.length === 0) {
      alert("No products found in this category.");
    } else {
      displayData(result);
    }
  }
});

let container = document.createElement("div");
container.className = "container";
function displayData(data) {
  container.innerHTML = "";
  // let data = JSON.parse(localStorage.getItem("data")) || [];
  if (data.length === 0) {
    alert("No Data Available");
  } else {
    data.forEach((obj, index) => {
      let div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
      <div class="product-card">
          <div class="product-image">
              <img src="${obj["image"]}" alt="${obj["title"]}">
          </div>
          <div class="product-details">
              <p><b>ID : </b>${obj["id"]}</p>
              <p><b>TITLE : </b>${obj["title"]}</p>
              <p><b>PRICE : </b>${obj["price"]}</p>
              <p><b>DESCRIPTION : </b>${obj["description"]}</p>
              <p><b>CATEGORY : </b>${obj["category"]}</p>
              <p><b>RATING : </b>${obj["rating"]["rate"]} (${obj["rating"]["count"]} count left)</p>
          </div>
      </div>
  `;
      container.appendChild(div);
    });
  }
}
document.body.appendChild(container);
