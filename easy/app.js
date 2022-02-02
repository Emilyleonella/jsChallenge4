// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.

// Example 1:

// Input: [1 , 4 , 7]  Output: 4

// Input: [10, 5]  Output: 7.5

// Input: [1.5, 3, 2.5, 1]  Output: 2

// Im going to make a function that takes in an array
const nums = [1, 4, 7];
let sum = 0; // this is to store the results
function average(arr) {
  for (let i = 0; (i = arr.length); i++) {
    sum += arr[i];
  }
  console.log(sum);
}
average(nums);
