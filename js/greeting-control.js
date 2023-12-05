// greeting-control.js
import { getRandomGreeting } from "./greeting-logic.js";

function displayGreeting() {
    const userName = prompt("What's your name?");
    const greeting = getRandomGreeting();
    const greetingMessage = ` ${greeting}, ${userName}!`;
    document.getElementById("greetingOutput").innerText = greetingMessage;
}

// Assuming you have a button with id "generateGreetingBtn" in your HTML
document.getElementById("generateGreetingBtn").addEventListener("click", displayGreeting);


// document.querySelect('form').addEventListener("submit", event=>{
//     event.preventDefault();
//     document.querySelect("a").innertext= `${randomGreeting} ${event.target[0].value}`;
//     event.target[0].value =""
// });