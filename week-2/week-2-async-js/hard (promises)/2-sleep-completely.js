/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    const end = Date.now() + milliseconds;
    setTimeout(() => {
      while (Date.now() < end) {
        // Busy wait to block the thread
      }
      resolve();
    }, 0);
  });
}

module.exports = sleep;
