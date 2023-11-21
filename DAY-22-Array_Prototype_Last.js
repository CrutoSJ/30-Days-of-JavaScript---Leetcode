// #Question:-

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// #Solution:-

/**
 * @return {null|boolean|number|string|Array|Object}
 */
if (!Array.prototype.last) {
    Object.defineProperty(Array.prototype, 'last', {
      value: function () {
        if (this.length === 0) {
          return null;
        } else {
          return this[this.length - 1];
        }
      },
      enumerable: false,
      configurable: true,
      writable: true,
    });
  }
  

  const arr = [1, 2, 3];
  console.log(arr.last()); 
  