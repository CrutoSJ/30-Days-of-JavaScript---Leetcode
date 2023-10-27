// #Question:-

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// #Solution:-

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const res = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        res[i] = fn(arr[i], i);
    }
    return res;
};

// Sample usage of the map function
const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, function (num) {
    return num * 2;
});

console.log(doubled); // Output should be [2, 4, 6, 8, 10]
