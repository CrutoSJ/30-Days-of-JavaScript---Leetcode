// #Question-

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// #Solution:-

var createHelloWorld = function() {
    return function() {
        return "Hello World";
    };
};

var helloFunction = createHelloWorld();

var result = helloFunction();

console.log(result);
