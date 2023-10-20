 // an empty array
 [1] // an array with one element

[1, 2, 3, 4, 5] // an array with 5 elements

["one", 42, [8, 9, 10]]
 // an array with 3 elements all of different types
// notice that the array above does *not* have 5 elements, rather the last
// element is itself an array with 3 elements in it

 const shapes = ['square', 'rectangle', 'circle', 'triangle'];


 const shapes = ['square', 'rectangle', 'circle', 'triangle'];

 console.log(shapes.length); // 4




 const numbers = [1, 2, 3, 4];
 console.log(numbers[0]); // 1
 console.log(numbers[1]); // 2
 console.log(numbers[2]); // 3
 console.log(numbers[3]); // 4


 const shapes = ['square', 'rectangle', 'circle', 'triangle'];

 console.log('There are ' + shapes.length + ' shapes in the array');

 console.log('The first shape is: ' + shapes[0]);
 // The first shape is: square

 console.log('The second shape is: ' + shapes[1]);
 // The second shape is: rectangle

 console.log('The third shape is: ' + shapes[2]);
 // The third shape is: circle

 console.log('The fourth shape is: ' + shapes[3]);
 // The fourth shape is: triangle

 console.log('The fifth shape is: ' + shapes[4]);
 // The fifth shape is: undefined


 const shapes = ['square', 'rectangle', 'circle', 'triangle'];

 // loop through the array and log the values
 for (let i = 0; i < shapes.length; i++) {
     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
 }

 const iterable = [1, 2, 3, 4, 5];

 for (let element of iterable) {
     console.log(element)
 }


 someArray.forEach((element, index, array) => {
     // ...
 })

 const shapes = ['square', 'rectangle', 'circle', 'triangle'];

 // loop through the array and log the values
 shapes.forEach(shape => console.log(`Here is a lovely shape: ${shape}.`));



 const arr = [3, 5, 7];

 function randomNumber(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
 }

 const newArr = [...arr, randomNumber(23, 42)];

 console.log(newArr);

 const someNums = [12, 41];

 function multiply(num1, num2){
     return num1 * num2;
 }

 console.log(multiply(...someNums));

 function add (...args){
     let total = 0;
     for (let i = 0; i < args.length; i++){
         total += args[i];
     }
     return total;
 }


 const randNumArr1 =[55, 1, 58, 66, 65, 92, 6, 87, 71, 48, 36, 96];
 console.log(add(...randNumArr1));

 const randNumArr2 = [72, 5, 90, 11, 43, 22, 100, 21];
 console.log(add(...randNumArr2));