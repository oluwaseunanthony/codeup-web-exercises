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