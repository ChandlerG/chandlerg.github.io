// Logic Error Example
function calculateAreaOfRectangle(length, width) {
    // Incorrect formula: multiplying length by length instead of length by width
    return length * length;
}

console.log("Area of rectangle (5, 2):", calculateAreaOfRectangle(5, 2));
// Expected output for area: 10, Actual output will be 25 due to logic error