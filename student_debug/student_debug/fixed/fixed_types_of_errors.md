# Lab Key

## Objective:
Understand and correct three main types of errors in JavaScript: Syntax errors, runtime errors, and logic errors.

## Tasks:

1. **Syntax Error Correction**
   - **Goal:** Identify and resolve syntax errors that prevent the program from running.
   - **Instructions:** Examine the provided code snippet. Identify the syntax error (missing brace) and add the appropriate syntax to correct the error. Verify that the code runs without syntax issues.
   - **Code to Correct:**
     ```javascript
     function greet() {
         console.log("Hello world");
     // Missing closing brace
     ```
   - **Expected Correction:**
     ```javascript
     function greet() {
         console.log("Hello world");
     }

     greet(); // Call the function to execute its contents
     ```

2. **Runtime Error Handling**
   - **Goal:** Identify potential runtime errors and implement error handling to make the code robust.
   - **Instructions:** In the `divide` function, add a condition to check if the divisor is zero. If it is, return a meaningful message instead of performing the division. This prevents the function from returning Infinity, which is JavaScript's default behavior.
   - **Code to Correct:**
     ```javascript
     function divide(a, b) {
         return a / b;
     }
     console.log(divide(5, 0)); // Currently returns Infinity
     ```
   - **Expected Correction:**
     ```javascript
     function divide(a, b) {
         if (b === 0) {
             return "Division by zero error";
         }
         return a / b;
     }
     console.log(divide(5, 0)); // Should now return "Division by zero error"

     console.log(divide(10, 2)); // Should return 5
     ```

3. **Logic Error Resolution**
   - **Goal:** Identify and correct logic errors to ensure the program functions correctly according to the specified logic.
   - **Instructions:** Review the formula used in the `calculateAreaOfRectangle` function. Correct the formula so that it accurately calculates and returns the area of the rectangle.
   - **Code to Correct:**
     ```javascript
     function calculateAreaOfRectangle(length, width) {
         return length * length; // Incorrect calculation
     }
     console.log("Area of rectangle (5, 2):", calculateAreaOfRectangle(5, 2)); // Incorrect output: 25
     ```
   - **Expected Correction:**
     ```javascript
     function calculateAreaOfRectangle(length, width) {
         return length * width; // Corrected formula
     }
     console.log("Area of rectangle (5, 2):", calculateAreaOfRectangle(5, 2)); // Correct output: 10
     ```

