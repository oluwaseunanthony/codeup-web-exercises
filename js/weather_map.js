// MAPBOX_TOKEN is specified in the keys.js file

// define variables for the marker
let marker = new mapboxgl.Marker();
// initialize the map
mapboxgl.accessToken = MAPBOX_API_KEY;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    zoom: 10,
    center: [-96.803290, 32.777830]
});
// when page loads auto set marker to my home location
map.on('load', function () {
    marker.setLngLat([-96.803290, 32.777830]).addTo(map);
});
// when page loads auto shows the forecast for 5 days at the location
fetch('https://api.openweathermap.org/data/2.5/forecast?APPID=' + OPEN_WEATHER_API_KEY + '&q=Dallas,US&units=imperial')
    .then(res => res.json())
    .then(data => {
        // clear the previous weather data
        document.getElementById('weather').innerHTML = '';
        // loop over the forecast data and create a card for each day
        for (let i = 0; i < 40; i += 8) {
            document.getElementById('weather').insertAdjacentHTML('beforeend', ("<div class='weatherCards'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +
                "<p>" + data.list[i].main.temp_min + " °F" + " / " + data.list[i].main.temp_max + " °F" + "</p>" +
                "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" +
                "<hr class='HR'>" +
                "<p>Description: " + data.list[i].weather[0].description + "</p>" +
                "<p>Humidity: " + data.list[i].main.humidity + "%" + "<hr class='HR'>" +
                "<p>Wind: " + data.list[i].wind.speed + " mph" + "<hr class='HR'>" + "</p>" +
                "<p>Pressure: " + data.list[i].main.pressure + " Hg" + "</p>"));
        }
    });
// handle the map click event for when click on another location it updates
map.on('click', function (click) {
    // When user clicks on the map the searchbox disappears
    document.getElementById('geocoder').style.display = 'none';
    // set the marker position to the clicked location
    marker.setLngLat(click.lngLat).addTo(map);
    // get the weather data for the clicked location
    fetch('https://api.openweathermap.org/data/2.5/forecast?APPID=' + OPEN_WEATHER_API_KEY + '&lat=' + click.lngLat.lat + '&lon=' + click.lngLat.lng + '&units=imperial')
        .then(res => res.json())
        .then(data => {
            // clear the previous weather data
            document.getElementById('weather').innerHTML = '';
            // loop over the forecast data and create a card for each day
            for (let i = 0; i < 40; i += 8) {
                document.getElementById('weather').insertAdjacentHTML('beforeend', ("<div class='weatherCards'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +
                    "<p>" + data.list[i].main.temp_min + " °F" + " / " + data.list[i].main.temp_max + " °F" + "</p>" +
                    "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" +
                    "<hr class='HR'>" +
                    "<p>Description: " + data.list[i].weather[0].description + "</p>" +
                    "<p>Humidity: " + data.list[i].main.humidity + "%" + "<hr class='HR'>" +
                    "<p>Wind: " + data.list[i].wind.speed + " mph" + "<hr class='HR'>" + "</p>" +
                    "<p>Pressure: " + data.list[i].main.pressure + " Hg" + "</p>"));
            }
        });
});
//     Search functionality
function searchLocation() {
    // get the value entered in the search bar
    let location = document.getElementById('searchInput').value;
    // update the current city in the navbar
    document.getElementById('curr-city').innerHTML = 'Current City: ' + location;
    // use Mapbox Geocoding API to get the coordinates of the location
    fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=' + MAPBOX_API_KEY)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // corresponds to the longitute value of the center of the map
            let longitude = data.features[0].center[0];
            // corresponds to the lattitude value of the center of the map
            let latitude = data.features[0].center[1];
            // update the map center and marker position to the new search result.
            map.setCenter([longitude, latitude]);
            marker.setLngLat([longitude, latitude]);
            // use OpenWeatherMap API to get the weather data for the location
            fetch('https://api.openweathermap.org/data/2.5/forecast?APPID=' + OPEN_WEATHER_API_KEY + '&lat=' + latitude + '&lon=' + longitude + '&units=imperial')
                .then(res => res.json())
                .then(data => {
                    // clear the previous weather data
                    document.getElementById('weather').innerHTML = '';
                    // loop over the forecast data and create a card for each day
                    for (let i = 0; i < 40; i += 8) {
                        document.getElementById('weather').insertAdjacentHTML('beforeend', "<div class='weatherCards'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +
                            "<p>" + data.list[i].main.temp_min + " °F" + " / " + data.list[i].main.temp_max + " °F" + "</p>" +
                            "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" +
                            "<hr class='HR'>" +
                            "<p>Description: " + data.list[i].weather[0].description + "</p>" +
                            "<p>Humidity: " + data.list[i].main.humidity + "%" + "<hr class='HR'>" +
                            "<p>Wind: " + data.list[i].wind.speed + " mph" + "<hr class='HR'>" + "</p>" +
                            "<p>Pressure: " + data.list[i].main.pressure + " Hg" + "</p>")
                    }
                });
        });
}