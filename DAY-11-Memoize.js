// #Question:-

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

// #Solution:-

/**
 * @param {Function} fn
 */
function memoize(fn) {
    let callCount = 0;
    let memoMap = new Map();

    return function(...args) {
        let key = args.join('+');

        if (memoMap.has(key)) {
            return memoMap.get(key);
        }

        callCount += 1;
        let result = fn(...args);
        memoMap.set(key, result);

        return result;
    };
}

let callCount = 0;
const memoizedFn = memoize(function(a, b) {
    callCount += 1;
    return a + b;
});

console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3)); 
console.log(callCount); 
