while (true) {
    let userInput = parseFloat(prompt("Enter an odd number between 1 and 50"));
    if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
        console.log(`Number Entered: ${userInput}`);
        console.log("");

        for (let i = 1; i <= 50; i++) {
            if (i === userInput) {
                console.log(`yikes skipping number: ${userInput}`);
                continue;
            }

            if (i % 2 !== 0) {
                console.log(`Here is an odd number: ${i}`);
            }
        }

        break;
    } else {
        alert("Invalid input. Please enter a valid odd number between 1 and 50");
    }
}
