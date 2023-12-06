// Function to calculate the sum of array elements
function simpleArraySum(ar) {
// Using the reduce method to sum up all elements in the array
// The callback function takes two parameters: sum and num
// It adds the current element (num) to the running sum (sum)
return ar.reduce((sum, num) => sum + num, 0);
}

// Example usage:
const arrayExample = [1, 2, 3, 4, 10, 11,23];
const result = simpleArraySum(arrayExample);
console.log(result); // Output: 31