// #Question:-

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// #Solution:-

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function throwError(message) {
      throw new Error(message);
    }
  
    return {
      toBe: function(otherVal) {
        return val === otherVal || throwError("Not Equal");
      },
      notToBe: function(otherVal) {
        return val !== otherVal || throwError("Equal");
      },
    };
  };
  
  /**
   * Testing the expectation framework
   */
  try {
    console.log(expect(5).toBe(5)); // true
    console.log(expect(5).notToBe(5)); // It should throw an error
  } catch (error) {
    console.error(error.message); // Display the error message if one is thrown
  }
  