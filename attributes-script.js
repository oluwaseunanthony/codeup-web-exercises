// attributes-script.js

document.addEventListener('DOMContentLoaded', function () {
    // Change profile picture after 2 seconds
    setTimeout(function () {
        document.getElementById('profile-pic').src = '/img/itachi 4.jpg';
    }, 2000);

    // Change profile name after 4 seconds
    setTimeout(function () {
        document.getElementById('profile-name').innerHTML = 'Oluwaseun Anthony';
    }, 4000);

    // Add class to profile description after 6 seconds
    setTimeout(function () {
        document.getElementById('profile-desc').classList.add('new-class');
    }, 6000);

    // Toggle background color every 2 seconds
//     setInterval(function () {
//         document.getElementById('profile-card').classList.toggle('background-color');
//     }, 2000);
});
//
// // Function to toggle dark mode
// function toggleDarkMode() {
//     var body = document.getElementById('toggle-body');
//     document.body.classList.toggle('dark-mode');
// }
//
// // Function to be executed at regular intervals
// function intervalFunction() {
//     toggleDarkMode();
// }
//
// // Set interval to execute the function every 2000 milliseconds (2 seconds)
// // setInterval(intervalFunction, 2000);
//
// // Example: Toggle dark mode when a button is clicked (you can use your own trigger)
// var toggleButton = document.getElementById('toggle-dark-mode-button');
//
// // Add event listener for the button click
// toggleButton.addEventListener('click', function() {
//     toggleDarkMode();
// });