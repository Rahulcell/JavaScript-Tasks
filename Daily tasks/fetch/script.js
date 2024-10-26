const url = "http://localhost:3000/students";

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: prompt("Enter your id no"),
    name: prompt("Enter your name :"),
    batch: prompt("Enter your batch no :"),
  }),
};
fetch(url, options)
  .then((response) => {
    if (response.ok) {
      console.log("Data Inserted Succesfully");
      return response.json();
    } else {
      console.log("error");
    }
  })
  .then((data) => console.log(data));
