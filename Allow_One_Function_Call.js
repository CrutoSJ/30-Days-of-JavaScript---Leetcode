// #Question:-

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

// #Solution:-

/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
    let a = 0;
    return function (...args) {
        a++;
        if (a === 1) {
            return fn(...args);
        }
    };
};

/**
 * Usage example:
 */
const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
