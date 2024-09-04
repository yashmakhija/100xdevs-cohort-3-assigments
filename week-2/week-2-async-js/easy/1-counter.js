function counterinJS(time) {
  const timeInS = time * 1000;
  let counter = 1;
  setInterval(() => {
    console.log(counter);
    counter++;
  }, timeInS);
}
counterinJS(1);
