// Function 1: Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Test Function 1
console.log("Is 10 even?", isEven(10));



// Function 2: Find the largest of three numbers
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}
// Test Function 2
console.log("Largest number:", findLargest(10, 25, 15));


// Function 3: Reverse a string
function reverseString(text) {
    return text.split("").reverse().join("");
}

// Test Function 3
console.log("Reversed string:", reverseString("hello"));
