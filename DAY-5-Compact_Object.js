// #Question:-

// Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// #Solution:-

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj
            .filter(el => Boolean(el))
            .map(el => typeof el === 'object' ? compactObject(el) : el);
    } else {
        let res = {};
        for (const key of Object.keys(obj)) {
            if (Boolean(obj[key])) {
                res[key] = typeof obj[key] === 'object' ? compactObject(obj[key]) : obj[key];
            }
        }
        return res;
    }
};

// Test the compactObject function
const testObject = {
    a: 1,
    b: null,
    c: {
        d: 2,
        e: {
            f: 0,
            g: '',
            h: {
                i: 3,
                j: undefined
            }
        }
    },
    k: [4, null, 5, '', 6],
    l: 'hello'
};

console.log('Original Object:');
console.log(testObject);

console.log('\nCompact Object:');
console.log(compactObject(testObject));
