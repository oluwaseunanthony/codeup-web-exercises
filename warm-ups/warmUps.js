// const capitalizeFirstLetter=(str)=>{
//
//     let capitalizedFirstLetter =  str.substring(0,1).toUpperCase();
//     let restOfWord = str.substring(1);
//
//     return capitalizedFirstLetter + restOfWord;
// }
//
// console.log(capitalizeFirstLetter("testString"))
//
// const largestNum=()=>{
//     numbers= 3,5,7
// }


// using a for loop to find the largest number in an array
// let array = [3, 4, 5, 30, 21, 9];
// let largest = 0;
//
// for (i = 0; i < array.length; i++) {
//     if (array[i] > largest) {
//         largest = array[i];
//     }
// }
// console.log(largest)
//
// function largestNum() {
//     return Math.max(1, 2, 3, 4);
// }
//
// console.log(largestNum()); // You need to call the function with () to get the result


// let num = 100
// while (num >= 5) {
// num-=5;
// console.log(num);
// if(num % 2===0){
//     console.log(`${num} is even`) ;
// }
// }

// do {
//     num -=5
//     if (num % 2== 0 && num !==0){
//         console.log(`${num} is even`);
//     } else{
//         console.log(num);
//     }
// } while (num>105)


// 10/20
// function isEven() {
//     for (let i = 0; i <= 100; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//             // Code to execute when i is even
//         }
//     }
// }
// isEven()


// let cars=[{
//     make: "Honda" ,
//     model: "Accord",
//     color: "Black",
// },{
//     make: "chevy" ,
//     model:"impala",
//     color:"white",
// },{
//     make: "jeep" ,
//     model:"liberty",
//     color: "blue",
// }]
// let i =0
// cars.forEach(function(car){
//     console.log("Make: " + car.make);
//     console.log("Model: " + car.model);
//     console.log("Color: " + car.color);
// });

// let developers = [
//     {
//         name: "Jonathan",
//         languages: {
//             frontend: ["HTML", "JavaScript", "CSS"],
//             backend: ["Java"]
//         }
//     },
//     {
//         name: "Bonnie",
//         languages: {
//             frontend: ["JavaScript"],
//             backend: []
//         }
//     },
//     {
//         name: "Raj",
//         languages: {
//             frontend: [],
//             backend: ["C#", "Java", "Python"]
//         }
//     },
//     {
//         name: "Carmen",
//         languages: {
//             frontend: ["JavaScript", "HTML", "CSS", "React"],
//             backend: ["C#", "Java", "Python", "TypeScript"]
//         }
//     },
// ]


// function getJavaScriptLanguages(developer) {
//     return developer.languages.frontend.filter(function (language) {
//         return language === "JavaScript";
//     });
// }console.log(getJavaScriptLanguages(developers[0]))


// function getJavaScriptDevelopers(developers) {
//     // Use the filter method to create a new array containing developers who know JavaScript
//     const javascriptDevelopers = developers.filter(developer => {
//         return developer.languages.frontend.includes("JavaScript");
//     });
//
//     // Extract and return the names of JavaScript developers
//     const javascriptDeveloperNames = javascriptDevelopers.map(developer => developer.name);
//
//     return javascriptDeveloperNames;
// }

// function knowsJavaScript(developers) {
//     let javascriptDevelopers = [];
//     for (let i = 0; i < developers.length; i++) {
//         if (developers[i].languages.frontend.includes("JavaScript")) {
//             javascriptDevelopers.push(developers[i].name);
//         }
//     }
//     return javascriptDevelopers;
// }
// console.log(knowsJavaScript(developers));

// const knowJavaScript = (arr) => {
//     let javaScriptDev=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].languages.frontend.includes("JavaScript")) {
//             javaScriptDev.push(arr[i].name);
//         }
//     }
//     console.log(javaScriptDev) ;
// }
//
//
//
//Create a function that accepts three arguments (arrOfElements, bgColor, textColor),
// and returns the array of objects with their corresponding properties
// changed to the inputted values of bgColor and textColor

//
// let elements = [
//     {
//         el: "button",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Submit"
//     },
//     {
//         el: "p",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Our company is better at doing company things than your company."
//     },
//     {
//         el: "h2",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Welcome Back!"
//     }
// ];
//
// function changeColors(arrOfElements, bgColor, textColor) {
//     for (let i = 0; i < arrOfElements.length; i++) {
//         arrOfElements[i].style.backgroundColor = bgColor;
//         arrOfElements[i].style.color = textColor;
//     }return arrOfElements;
// }
//
//
// // Call the function with the elements array and new colors
// const modifiedElements = changeColors(elements, "blue", "white");
//
// console.log(modifiedElements); // This will show the modified array of objects


// function fizzbuzz(input) {
//     for (let i = 1; i <= input; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
//
// // Call the function with a specific value for input, e.g., 100
// fizzbuzz(100);



// Function to calculate the absolute difference between the sums of the primary and secondary diagonals
function diagonalDifference(arr) {
    // Get the length of the array (assuming it's a square matrix)
    let n = arr.length;

    // Variables to store the sums of the primary and secondary diagonals
    let d1 = 0;
    let d2 = 0;

    // Loop through each element of the matrix
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){

            // Check if the current element is on the primary diagonal
            if(i === j) {
                // Add the element to the sum of the primary diagonal
                d1 += arr[i][j];
            }

            // Check if the current element is on the secondary diagonal
            if(i + j === n - 1){
                // Add the element to the sum of the secondary diagonal
                d2 += arr[i][j];
            }
        }
    }

    // Calculate and return the absolute difference between the sums of the diagonals
    return Math.abs(d1 - d2);
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = diagonalDifference(matrix);
console.log(result); // Output: 0 (|15 - 15| = 0 in this example)


// In the provided code, the variable j is used as a loop variable to iterate over the columns of the matrix. The outer loop variable i iterates over the rows, and the inner loop variable j iterates over the columns.
//
//     Here's the relevant part of the code where j is used:
//
// javascript
// Copy code
// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//         // ... (code inside the loop)
//     }
// }
// In this nested loop structure, the outer loop (for(let i = 0; i < n; i++)) is responsible for iterating over the rows of the matrix, and the inner loop (for(let j = 0; j < n; j++)) is responsible for iterating over the columns.
//
//     So, in the context of this code, j is the column index. The variable i represents the current row, and j represents the current column as the loops traverse through the elements of the 2D array (matrix).
// function diagonalDifference(arr) {
//     let n = arr.length;
//     let leftToRightSum = 0;
//     let rightToLeftSum = 0;
//
//     for (let i = 0; i < n; i++) {
//         // Sum the elements on the left-to-right diagonal (row index = column index)
//         leftToRightSum += arr[i][i];
//
//         // Sum the elements on the right-to-left diagonal (row index + column index = n - 1)
//         rightToLeftSum += arr[i][n - 1 - i];
//     }
//
//     // Calculate and return the absolute difference between the sums of the diagonals
//     return Math.abs(leftToRightSum - rightToLeftSum);
// }
