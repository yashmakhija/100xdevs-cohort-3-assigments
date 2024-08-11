/* 
Try to create a promisified version of
fs.readfile
*/
const fs = require("fs");

function readingFile() {
  return new Promise((res) => {
    fs.readFile("a.txt", "utf8", (err, data) => {
      if (err) console.log(err);
      else res(data);
    });
  });
}
readingFile().then((data) => console.log(data));
