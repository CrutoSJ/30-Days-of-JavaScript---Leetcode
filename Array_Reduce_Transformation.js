// #Question:-

// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.

// #Solution:-

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init; // set current value
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]); // store the val as a function of the current val with the element
    }
    return val; // output
};

// Example usage:
var nums = [1, 2, 3, 4, 5];
var sum = reduce(nums, function(a, b) {
    return a + b;
}, 0);
console.log(sum); // Output: 15
