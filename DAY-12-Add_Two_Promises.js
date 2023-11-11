// #Question:-

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// #Solution:-

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {

    const [value1, value2] = await Promise.all([promise1, promise2]);
  
    const result = value1 + value2;
  
    console.log('Value 1:', value1);
    console.log('Value 2:', value2);
    console.log('Result:', result);
  
    return result;
  };
  
  const promiseA = Promise.resolve(5);
  const promiseB = new Promise((resolve) => setTimeout(() => resolve(10), 1000));
  
  addTwoPromises(promiseA, promiseB)
    .then((result) => {
      console.log('Final Result:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  