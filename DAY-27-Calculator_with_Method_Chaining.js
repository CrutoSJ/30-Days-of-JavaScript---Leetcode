// #Question:-

// Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

// Your Calculator class should have the following methods:

// add - This method adds the given number value to the result and returns the updated Calculator.
// subtract - This method subtracts the given number value from the result and returns the updated Calculator.
// multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
// divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
// power - This method raises the result to the power of the given number value and returns the updated Calculator.
// getResult - This method returns the result.
// Solutions within 10-5 of the actual result are considered correct.

// #Solution:-

class Calculator {

    static result;
  
    /** 
     * @param {number} value
     */
    constructor(value) {
        Calculator.result = value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        Calculator.result += value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        Calculator.result -= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        Calculator.result *= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            Calculator.result = "Division by zero is not allowed";
            return this;
        }

        Calculator.result /= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        Calculator.result **= value;
        return this;
    }
    
    /** 
     * @return {number | string}
     */
    getResult() {
        return Calculator.result;
    }
}

// Test the Calculator class
const calculator = new Calculator(10)
    .add(5)
    .multiply(2)
    .subtract(4)
    .divide(2)
    .power(2);

const result = calculator.getResult();
console.log(result);
