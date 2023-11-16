const box1 = document.querySelector('.box1')
const parent = box1.parentElement
console.log(parent)


const stateParksUL = document.getElementById("state-parks-texas");
stateParksUL.parentElement.style.background = "lightblue";


const stateParksLIs = document.querySelector("#state-parks-texas").children;
for(let i = 0; i <stateParksLIs.length; i++) {
    stateParksLIs[i].style.color = "red";
    stateParksLIs[2].style.fontWeight = "bold";
    stateParksLIs[4].style.fontSize = "50px";
}

const nationalParkUL = document.querySelector("#national-parks");
nationalParkUL.firstElementChild.style.color = "green"
// nationalParkUL.lastElementChild.style.background = "beige"

const nationalParksHeading = document.querySelector("#national-parks-heading");

nationalParksHeading.nextElementSibling.style.background = "salmon";