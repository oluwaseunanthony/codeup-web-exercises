"use strict"

// Date objects
// Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January 1970 UTC

// Creating a Date

// get a date object that represents the current date/time
let today = new Date();
console.log(today)

// create a date object based on a specific date/time
// notice that month is zero based in non-string constructors
let codeup = new Date("February 4, 2014 09:00:00");
codeup = new Date("2014-02-04T09:00:00");
codeup = new Date(2014, 1, 4);
codeup = new Date(2014, 1, 4, 9, 0, 0);

//Formatting Dates

// use the toString() method to print out the full date
codeup.toString(); // Tue Feb 04 2014 09:00:00 GMT-0600 (CST)


// Calculating Elapsed Time

// The Date.now() method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.

// get the start timestamp
let start = Date.now();

// do something for a long time

// get the end timestamp
let end = Date.now();

// calculate the elapsed time in milliseconds
let elapsed = end - start;
