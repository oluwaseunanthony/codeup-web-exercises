// weather_map_combined.js

// Add your Mapbox map and geocoding logic here
mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-98.4916, 29.4252],
    zoom: 10
});

// Function to add marker and popup for a location
function addLocationMarker(location, popupContent) {
    const marker = new mapboxgl.Marker()
        .setLngLat(location)
        .addTo(map);

    const popup = new mapboxgl.Popup({ closeOnClick: false, closeButton: false })
        .setHTML(popupContent)
        .addTo(map);

    // Open the popup when the marker is clicked
    marker.setPopup(popup);
}

function geocodeAndFetchWeather(search, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then(res => res.json())
        .then(data => {
            const coordinates = data.features[0].center;
            const popupContent = `<p>${search}</p>`;
            addLocationMarker(coordinates, popupContent);

            // Fetch weather data for the same coordinates
            // Example fetch for current weather
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[1]}&lon=${coordinates[0]}&appid=${OPEN_WEATHER_API_KEY}`)
                .then(response => response.json())
                .then(weatherData => {
                    console.log(weatherData)
                    // Convert temperature from Kelvin to Fahrenheit
                    const temperatureFahrenheit = (weatherData.main.temp - 273.15) * 9/5 + 32;

                    // Display weather information in console (you can update the UI as needed)
                    console.log('Weather Data:', weatherData);
                    // Update the temperature in the UI
                    updateTemperature(temperatureFahrenheit);
                });


            // Optionally, you can center the map on the searched location
            map.setCenter(coordinates);
        });
}

document.getElementById("sub").addEventListener('click', function () {
    let currentLocation = geocodeAndFetchWeather(document.getElementById('search').value, MAPBOX_API_KEY)
});

// Example fetch for current weather
function updateTemperature(temperature) {
    const currentWeatherDiv = document.getElementById('current-weather');
    currentWeatherDiv.innerHTML = `<p>Temperature: ${temperature}°C</p>`;
}

// Example fetch for 5-day forecast
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent('search')}&appid=${OPEN_WEATHER_API_KEY}`)
    .then(response => response.json())
    .then(data => {

        const forecastDiv = document.getElementById('forecast');

        forecastDiv.innerHTML = ''; // Clear previous forecast data
        const day = data.list;



        for (let i = 0; i < day.length; i += 8) {
            const weather = day[i];
            const date = new Date(weather.dt * 1000);
            // Convert temperature from Kelvin to Fahrenheit
            const temperatureFahrenheit = (weather.main.temp - 273.15) * 9/5 + 32;

            forecastDiv.innerHTML += `
            <div class="day">
                <p>Date: ${date.toDateString()}</p>
                <p>Temperature: ${temperatureFahrenheit}°F</p>
                <p>Weather: ${weather.weather[0].description}</p>
            </div>
        `;
        }
    })
    .catch(error => console.error('Error fetching 5-day forecast:', error));