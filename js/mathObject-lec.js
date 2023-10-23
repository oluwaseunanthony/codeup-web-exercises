"use strict"

// Math Objects

// JavaScript provides a built-in Math object with a variety of helpful properties and methods
// DO NOT try to create new Math Objects
// You will always use the dot notation to access the methods and properties of the JS Math object

// Methods

// Math.random()
// The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1] that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.

// Returns a random integer between min and max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Math.round()
// The Math.round() function returns the value of a number rounded to the nearest integer.

Math.round(20.49);  // 20
Math.round(20.5);   // 21
Math.round(-20.5);  // -20
Math.round(-20.51); // -21

// Math.floor()
// The Math.floor() function returns the largest integer less than or equal to a number.

Math.floor( 45.95); //  45
Math.floor(-45.95); // -46

// Math.ceil()
// The Math.ceil() function returns the smallest integer greater than or equal to a number.

Math.ceil(.95);   // 1
Math.ceil(4);     // 4
Math.ceil(7.004); // 8

// Math.pow()
// The Math.pow() function returns the base to the exponent power, that is, base^exponent.

// 2 raised to the 16 power
Math.pow(2, 16); // 65536

// Math.sqrt()
// The Math.sqrt() function returns the square root of a number.

Math.sqrt(9);  // 3
Math.sqrt(2);  // 1.414213562373095
Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN

// Constants

// Math.E
// The Math.E property represents the base of natural logarithms, e, approximately 2.718.

// Math.PI
// The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.