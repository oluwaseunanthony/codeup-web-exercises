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
//         consoe.log(`${num} is even`);
//     } else{
//         console.log(num);
//     }
// } while (num>105)


// 10/20
function isEven() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
            // Code to execute when i is even
        }
    }
}
isEven()
