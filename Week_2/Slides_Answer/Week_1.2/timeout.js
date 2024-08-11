/* 
Try to create a promisified version of
setTimeout()
*/

function promisfiedMine(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved After " + ms);
    }, ms);
  });
}

promisfiedMine(3000).then((data) => console.log(data));
