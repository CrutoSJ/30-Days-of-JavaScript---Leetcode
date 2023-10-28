// #Question:-

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

// #Solution:-

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {
    const filtered = [];
    arr.forEach((elem, index) => {
      if (fn(elem, index)) {
        filtered.push(elem);
      }
    });
    return filtered;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5, 6];
  const isEven = (number) => number % 2 === 0;
  
  const filteredArray = filter(inputArray, isEven);
  console.log(filteredArray);
  