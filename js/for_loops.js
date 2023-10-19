//1. function showMultiplicationTable(number) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }
//
// // Test the function
// showMultiplicationTable(8);
//
// for(let i=20; i <200; i++){
//     if (i % 2 === 0) {
//         console.log(`even number ${i}`);
//     } else {console.log(`odd number ${i}`)}
//     if (i===10){
//     }
// }

// 2.For generating random numbers within a range using Math.random(), follow the steps below:
//
// Declare the minimum value of the range
// Declare the maximum value of the range
// Use the formula Math.floor(Math.random() *(max - min + 1) + min) to generate values with the min and the max value inclusive.

for (let i = 1; i <= 10; i++) {
    // This loop runs 10 times, starting from i = 1 and ending when i reaches 10.

    // Generate a random number between 20 and 200, inclusive.
    const randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

    // Check if the random number is even or odd.
    if (randomNumber % 2 === 0) {
        // If the random number is even, this block of code is executed.
        console.log(`${randomNumber} is even`);
    } else {
        // If the random number is odd, this block of code is executed.
        console.log(`${randomNumber} is odd`);
    }
}



//3.
for (let i = 1; i <= 9; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += i;
    }
    console.log(line);
}


//4.
for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}

