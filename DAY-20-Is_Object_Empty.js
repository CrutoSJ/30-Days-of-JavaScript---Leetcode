// #Question:-

// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// #Solution:-

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for (let key in obj) {
        console.log(`Key: ${key}, Value: ${obj[key]}`);
        return false;
    }
    console.log('Object is empty.');
    return true;
};

var nonEmptyObject = { key1: 'value1', key2: 'value2' };
var emptyObject = {};

console.log('Checking non-empty object:');
console.log(isEmpty(nonEmptyObject));

console.log('\nChecking empty object:');
console.log(isEmpty(emptyObject));
