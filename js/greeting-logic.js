// greeting-logic.js
import generateRandomNumber from "./number-utils.js";

const greetings = [
    "Hello",
    "Hi",
    "Hey there",
    "Greetings",
    "Salutations",
    "Howdy",
    "Yo",
    "Bonjour",
    "Hola",
    "Ciao",
    "Namaste",
    "G'day",
    "What's up",
    "Sup",
    "How's it going",
    "Nice to meet you",
    "Welcome",
    "Hey",
    "How are you",
    "Pleased to meet you"
];

function getRandomGreeting() {
    const randomIndex = generateRandomNumber(0, greetings.length - 1);
    return greetings[randomIndex];
}

export { getRandomGreeting };

