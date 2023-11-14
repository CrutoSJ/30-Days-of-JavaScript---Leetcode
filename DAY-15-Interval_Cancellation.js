// #Question:-

// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.

// #Solution:-

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function (fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
};

const result = [];

const fn = (x) => x * 2;
const args = [4],
    t = 35,
    cancelT = 190;

const start = Date.now();

const log = (...argsArr) => {
    const diff = Math.floor(Date.now() - start);
    result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

setTimeout(() => {
    cancel();
}, cancelT);

setTimeout(() => {
    console.log(result);
}, cancelT + t + 15);
