"use strict"

//Manipulating arrays

//adding elements to an array using push (adding to end of an array), and unshift (adding to the front of an array)
// you can push or unshift one or more items, separated by commas, onto an array
const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

console.log(daysOfTheWeek);
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Sunday' to the beginning of the week
daysOfTheWeek.unshift('Sunday');

console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Friday' and 'Saturday' to the end of the week
daysOfTheWeek.push('Friday', 'Saturday');

console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//removing elements to an array using pop (removing from the end of an array), shift (removing from the front of an array)
// pop and shift will return the removed items
const todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];

console.log('My todo list:');
console.log(todoList);
// ['Take out the trash', 'Clean the car', 'Pay the bills']

console.log('Completing the last item: ' + todoList[todoList.length - 1]);

// let's remove the last item
const removedItem = todoList.pop();

// log what we did
console.log('Task complete: ' + removedItem);

console.log(todoList);
// ['Take out the trash', 'Clean the car']

console.log('Completing the first item: ' + todoList[0]);

// let's remove the first item
const doneItem = todoList.shift();

// log what we did
console.log('Task complete: ' + doneItem);

console.log(todoList);
// ['Clean the car']

//locating array elements using .indexOf() (first index), and .lastIndexOf() (last index)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];

let index = colors.indexOf('green');
console.log(index);
// 3

index = colors.indexOf('red');
console.log(index);
// 0

index = colors.lastIndexOf('red');
console.log(index);
// 7

//copying elements of an array using .slice
//.slice will copy a portion of an array by entering the index into the argument of the slice method
// .slice will not modify the array, it will return a new array with a copy of the sliced elements

// first argument is the starting index
// second argument is the index to stop slicing
// second index argument will not be returned
let slice = colors.slice(2, 4);

console.log(colors); // colors is unchanged
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(slice); // ['yellow', 'green']

slice = colors.slice(3);
console.log(slice); // ['green', 'blue', 'indigo', 'violet']

//using .reverse to reverse the elements of an array

console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log('Reversing the colors array.');

colors.reverse();

console.log(colors);
// ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']

//sorting elements of an array (alphabetically) using the .sort() method
//.sort() will covert items in an array to strings or their string equivalent and order them based on that value

console.log(colors);
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log('Sorting the colors array.');

colors.sort();

console.log(colors);
// ['blue', 'green', 'indigo', 'orange', 'red', 'violet', 'yellow']

//Converting between strings and arrays using .split (string to array), and .join (array to string)

// Splitting
// .split() uses a delimiter to decide where to split the array

let namesString = "Joe,Bob,Sally";

console.log(namesString);
// Joe,Bob,Sally

const namesArray = namesString.split(',');

console.log(namesArray);

//Joining
//.join() will combine the elements of an array into a single string
//.join() uses a delimiter to combine the items of the array

console.log(namesArray);
// ['Joe', 'Bob', 'Sally']

namesString = namesArray.join(',');

console.log(namesString);
// Joe,Bob,Sally