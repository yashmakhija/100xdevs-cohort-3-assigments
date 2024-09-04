const fs = require("fs");

const data = "I love JS";

fs.writeFile("a.txt", data, (err, data) => {
  if (err) console.log(err);
  else console.log("Write fully sucess");
});
