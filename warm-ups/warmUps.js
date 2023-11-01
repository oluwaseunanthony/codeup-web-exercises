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

let developers = [
    {
        name: "Jonathan",
        languages: {
            frontend: ["HTML", "JavaScript", "CSS"],
            backend: ["Java"]
        }
    },
    {
        name: "Bonnie",
        languages: {
            frontend: ["JavaScript"],
            backend: []
        }
    },
    {
        name: "Raj",
        languages: {
            frontend: [],
            backend: ["C#", "Java", "Python"]
        }
    },
    {
        name: "Carmen",
        languages: {
            frontend: ["JavaScript", "HTML", "CSS", "React"],
            backend: ["C#", "Java", "Python", "TypeScript"]
        }
    },
]


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

const knowJavaScript = (arr) => {
    let javaScriptDev=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].languages.frontend.includes("JavaScript")) {
            javaScriptDev.push(arr[i].name);
        }
    }
    console.log(javaScriptDev) ;
}















