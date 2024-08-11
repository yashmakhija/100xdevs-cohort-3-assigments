/* 
Try to create a promisified version of
fetch()
*/

fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => console.log(data));
