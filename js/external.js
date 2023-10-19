alert('Welcome to my Website!');


let userInput = prompt('What is your favorite color?');
console.log(`The user entered: ${userInput}`);
alert(`Great, ${userInput} is my favorite color too!`);

"use strict";

// alert('Welcome to my Website!');
//
// let color = prompt("What is your favorite color?");
//
// alert(`Great, ${color} is my favorite color too!`);

// Movie Rental Logic
// let rentalMermaid = parseInt(prompt("How many days do you want to rent The Little Mermaid?"));
//
// alert(`You have selected ${ rentalMermaid }`);
//
// let brotherBear = parseInt(prompt("How many days do you want to rent Brother Bear?"));
//
// alert(`You have selected ${ brotherBear }`);
//
// let hercules = parseInt(prompt("How many days do you want to rent Hercules?"));
//
// alert(`You have selected ${ hercules }`);
//
// let total = (rentalMermaid + brotherBear + hercules) * 3;
//
// alert(`Your total is: $${ total.toFixed(2) }`)

// ------------------------------------

// Payment Logic Problem

let googlePay = parseInt(prompt("How much does Google pay you per hour?"));

let facebookPay = parseInt(prompt("How much does Facebook pay you per hour?"));

let amazonPay = parseInt(prompt("How much does Amazon pay you per hour?"));

let amazonHours = parseInt(prompt("How many hours did you work for Amazon this week?"));

let googleHours = parseInt(prompt("How many hours did you work for Google this week?"));

let facebookHours = parseInt(prompt("How many hours did you work for Facebook this week?"));

let totalPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);

alert(`Your payment for this week totals to: $${totalPay.toFixed(2)}`);




