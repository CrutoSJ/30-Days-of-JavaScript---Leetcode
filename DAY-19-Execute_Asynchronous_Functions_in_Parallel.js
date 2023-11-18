// #Question:-

// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

// #Solution:-

var promiseAll = async function (functions) {
    return await new Promise((resolve, reject) => {
        let arr = Array(functions.length);
        let waitingFor = functions.length;

        for (let i = 0; i < functions.length; ++i) {
            functions[i]()
                .then((result) => {
                    arr[i] = result;
                    if (--waitingFor === 0) resolve(arr);
                })
                .catch(reject);
        }
    });
};


const asyncFunction1 = () => new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const asyncFunction2 = () => new Promise((resolve) => setTimeout(() => resolve(2), 500));
const asyncFunction3 = () => new Promise((resolve) => setTimeout(() => resolve(3), 2000));

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

promiseAll(functionsArray)
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error(error);
    });
