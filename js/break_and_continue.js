while (true) {
    // prompt user and use parse bcz we are looking for a number/integer
    let userInput = parseFloat(prompt("Enter an odd number between 1 and 50"));
    // verify if it's a odd number that's between 1 and 50
    if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 1) {
        console.log(`Number Entered: ${userInput}`);

        for (let i = 1; i <= 50; i +=2) {
            if (i === userInput) {
                console.log(`Yikes skipping number: ${userInput}`);
                continue;
            }
                console.log(`Here is an odd number: ${i}`);
            }
        break;
        } else {alert("Invalid input. Please enter a valid odd number between 1 and 50");
    }

}
