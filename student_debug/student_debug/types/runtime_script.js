// Runtime Error Example
function divide(a, b) {
    return a / b;
}

// Calling divide with b as 0, which will cause a division by zero error (in some languages; in JavaScript, it returns Infinity)
console.log(divide(5, 0));

console.log(divide(10, 2)); // Should return 5