# Type of Errors

## 1. Syntax Errors
Syntax errors occur when the code does not conform to the language grammar. JavaScript will throw syntax errors during the parsing phase, before the execution of the program.

```javascript
// Syntax Error Example
function greet() {
    console.log("Hello world");
// Missing closing brace is a syntax error
    
greet(); // Call the function to execute its contents
```
To run this example,  try executing this script using Node.js (`node syntax_script.js`). `Node.js` throws an error indicating a missing closing brace.

## 2. Runtime Errors
Runtime errors are errors that occur during the execution of the code, which could be due to invalid operations, such as dividing by zero, accessing properties of undefined, etc.

```javascript
// Runtime Error Example
function divide(a, b) {
    return a / b;
}

// Calling divide with b as 0, which will cause a division by zero error (in some languages; in JavaScript, it returns Infinity)
console.log(divide(5, 0));

console.log(divide(10, 2)); // Should return 5
```
This script will run, but the division by zero typically raises an error in many programming contexts (in JavaScript, it results in `Infinity`, which can be used to discuss how JS handles such cases differently).

## 3. Logic Errors
Logic errors occur when the program runs without crashing, but produces incorrect results due to a mistake in the logic.

```javascript
// Logic Error Example
function calculateAreaOfRectangle(length, width) {
    // Incorrect formula: multiplying length by length instead of length by width
    return length * length;
}

console.log("Area of rectangle (5, 2):", calculateAreaOfRectangle(5, 2));
// Expected output for area: 10, Actual output will be 25 due to logic error
```
This code does not perform as expected because of a mistake in the formula used to calculate the area of a rectangle. The function incorrectly calculates `length * length` instead of `length * width`.

## Lab Instructions:
1. **Fix Syntax Errors:** Identify and correct the syntax error. Make sure the code compiles without any syntax issues.
2. **Handling Runtime Errors:** Modify the `divide` function to handle cases where division by zero might occur, preventing runtime errors.
3. **Correcting Logic Errors:** Identify and fix the logic error in the area calculation to ensure it provides correct results.

