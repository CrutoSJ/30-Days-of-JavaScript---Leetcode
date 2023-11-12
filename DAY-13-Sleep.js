// #Question:-

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// #Solution:-

/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(millis);
        }, millis);
    });
}

let t = Date.now();
await sleep(100);
console.log(Date.now() - t); // 100

