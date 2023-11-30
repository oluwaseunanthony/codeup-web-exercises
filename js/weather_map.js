document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'YOUR_API_KEY';
    const city = 'YourCityName';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Update the HTML to display the current weather information
        })
        .catch(error => console.error('Error fetching weather data:', error));
});

// Inside the same event listener
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Update the HTML to display the five-day forecast
    })
    .catch(error => console.error('Error fetching forecast data:', error));
