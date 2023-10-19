// let i = 0;
//
// while(i <= 10) {
//     console.log(i);
//     i++
// }

// do while loops
// let i = 12;
//
// do {
//     console.log(i);
//     i++
// } while(i < 10)

// IF BROWSER/COMPUTER STUCK ON INFINITE LOOP
// to exit
// DO  (Command + Option + ESC)
// OR shutdown your computer using the physical button



//  --------------- mini exercise -------------------------
// create a variable called num that is equal to 0;
// Write a while loop that increment "num" by 5 so long as num is less than 100
// Do the same thing with a do-while

// let num = 0;
//
// while(num < 0) {
//     console.log(num)
//     num += 5;
// }

// do {
//     console.log(num);
//     num += 5;
// } while(num < 0);

const secretNumber = 7;
let guess;
let attempt = 0;

// do-while loop

do {
    guess = parseInt(prompt("Guess the secret number (1-10):"));
    attempt++
    if(guess === secretNumber) {
        console.log("You have guessed the lucky number")
    } else {
        if(guess < secretNumber) {
            console.log("Try a higher number.")
        }else {
            console.log("Try a lower number");
        }
        console.log("You suck at guessing!!!!!! " + attempt + " total attempt")
    }


}while (guess !== secretNumber)


