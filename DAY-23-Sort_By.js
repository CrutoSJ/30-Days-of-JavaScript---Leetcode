// #Question:-

// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

// #Solution:-

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b)); 
};

// Example usage:
var numbers = [4, 2, 8, 6, 1, 9];
var sortedNumbers = sortBy(numbers, num => num);

console.log("Original array:", numbers);
console.log("Sorted array:", sortedNumbers);
