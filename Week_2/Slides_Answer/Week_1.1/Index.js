function delayPrint(n) {
  setTimeout(() => {
    console.log("Hello World from Timeout");
  }, n);
}

let print = delayPrint(4000);

function fetchApi() {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf8");
console.log(contents);

fetchApi();
