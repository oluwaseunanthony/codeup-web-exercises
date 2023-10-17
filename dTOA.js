let a = 1;
let b = a++;
let c = ++a;
// what is the value of a, b, and c?
// a =1
// b=1
// c=3
console.log(a)
console.log(b)
console.log(c)


let d = "hello";
let e = false;
d++;
e++;
//Nan
//
console.log(d++)
console.log(e++)


let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
//
console.log(perplexed + 2)

let price = 2.7;
price.toFixed(2);
//2.70
console.log(price.toFixed(2))

isNaN(0)
//false
console.log(isNaN(0))

isNaN(1)
//false
console.log(isNaN(1))

isNaN("")
//false
console.log(isNaN(""))

isNaN("string")
//true
console.log(isNaN("string"))

isNaN("0")
//false
console.log(isNaN("0"))

isNaN("1")
//false
console.log(isNaN("1"))

isNaN("3.145")
//false
console.log(isNaN("3.145"))

isNaN(Number.MAX_VALUE)
//false
console.log(isNaN(Number.MAX_VALUE))

isNaN(Infinity)
//false
console.log(isNaN(Infinity))

isNaN("true")
//true
console.log(isNaN("true"))

isNaN(true)
//true
console.log(isNaN(true))

isNaN("false")
//false
console.log(isNaN("false"))

isNaN(false)
//true
console.log(isNaN(false))

// to illustrate why the isNaN() function is needed:
NaN == NaN
//false
console.log(NaN == NaN)

!true
//false
console.log(!true)

!false
//true
console.log(!false)

!!true
//true
console.log(!!true)

!!false
//false
console.log(!!false)

!!0
//false
console.log(!!0)

!!-0
//false
console.log(!!-0)

!!1
//true
console.log(!!1)

!!-1
//true
console.log(!!-1)

!!0.1
//true
console.log(!!0.1)

!!"hello"
//true
console.log(!!"hello")

!!""
//false
console.log(!!"")

!!''
//false
console.log(!!'')

!!"false"
//true
console.log(!!"false")

!!"0"
//true
console.log(!!"0")

// ************* Question 2 ******************

let sample = "Hello Codeup";
console.log(sample.length);

// Uppercase
console.log(sample.toUpperCase());

// Lowercase
console.log(sample.toLocaleLowerCase());

// concatenate sample to add students
sample += sample +  " Students"
console.log(sample)

//  replace students with class
console.log(sample.replace("Students" , "Class"))

// find lowercase c
console.log(sample.indexOf("c")); // we get back -1 because lowercase c doesn't exist in the sample variable

// find uppercase C
console.log(sample.indexOf("C"));

// retrieve a substring Codeup
console.log(sample.substring(sample.indexOf("C"), 1 + sample.indexOf("p")))
// another solution
console.log(sample.substring(6, 12))


// ************* Question 3 ******************

// Part 1: movies
// renter little mermaid for 3 days
// Brother bear for 5 days
// Hercules 1 days

let price = 3;

let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;

let littleMermaidCost = littleMermaid * price;
// console.log(littleMermaidCost)
let brotherBearCost = brotherBear * price;
let herculesCost = hercules * price;

let totalCost = littleMermaidCost + brotherBearCost + herculesCost
console.log(totalCost)

// Part 2: Contractor question
let googlePerHour = 400;
let amazonPerHour = 380;
let facebookPerHour = 350;

let googleHoursWorked = 6;
let amazonHoursWorked = 4;
let facebookHoursWorked = 10;

let totalPay =
    (googleHoursWorked * googlePerHour) +
    (amazonHoursWorked * amazonPerHour) +
    (facebookHoursWorked * facebookPerHour);

console.log(totalPay)

// template literal version of the same result
console.log(`Your total pay is $${totalPay}`)

// Part 4: user and password
let username = 'codeup';
let password = 'notastrongpassword';

let passLength = password.length > 4
console.log(passLength);

// only solution
let notInclude2 = !password.includes(username);
console.log(notInclude2)

// check if 20 characters
let characterCheck = username.length < 21;
console.log(characterCheck)

let whiteSpace = (username.trim() === username) && (password.trim() === password);

console.log(whiteSpace)