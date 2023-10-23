"use strict"

// Objects
// Object - A grouping of data and functionality
// Properties - Data items contained in an object
// Methods - Functions on an object

// Prototypes - allow existing objects to be used as templates to create new objects

// Creating new Object Instance
const car = new Object();

// console.log(typeof car);
// "object"

// Creating new Objects using Object Literal Notations
// {} is the same as new Object

// const car = {};

// console.log(typeof car);
// "object"

// Setting properties on an Object

// using dot notation to assign a "make" property
// dot notation is preferred
car.make = "Toyota";

// using array notation to assign a "model" property
// array notations in not preferred and not common practice
// you should only use the square bracket notation if:
// - The name of the property is not a valid identifier
// - You will not know the name of the property until run-time
// car["model"] = "Camry"; //don't use this

car.model = "Camry" // use the dot method instead

// you can set properties during the creation of an object

// const car = {
//     make: "Toyota",
//     model: "Camry"
// };

// Accessing Properties on an Object
// use the dot notation

// console.log("The car model is: " + car.model);

// Nested values in an object

// const cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log(`The first car is a ${cars[0].make} ${cars[0].model}.`);
// console.log(`The owner of the second car is ${cars[1].owner.name}.`);
//
// console.log("Here are all the features of all the cars:");
// cars.forEach( car => {
//     car.features.forEach( feature => console.log(feature) );
// });

// Object Destructuring
// Shorthand for creating variables from object properties.

// const person = { name: 'codeup', age: 4 };
// const { name, age } = person;
// console.log(name); // 'codeup'
// console.log(age); // 4
//
// function tellMeAbout({ name, age }) {
//     console.log(name); // 'codeup'
//     console.log(age); // 4
// }
//
// // const person = { name: 'codeup', age: 4 };
// tellMeAbout(person);

// // Assigning Functionality to an Object
//
// // const car = {};
// // car.make = "Toyota";
// // car.model = "Camry";
//
// // create a honk method on the car object
// car.honk = function () {
//     alert("Honk! Honk!");
// };
//
// // honk the horn
// car.honk();
