# Weather App

A simple weather application built with HTML, CSS, and JavaScript. Users can enter a city name and view its current temperature, humidity, wind speed, and weather condition.

## Features

- Search for weather by city name
- Display temperature in Celsius
- Display humidity and wind speed
- Change the weather image based on the current condition
- Fetch live data from the OpenWeather API

## Project Files

```text
Weather app/
|-- index.html       # Page structure and weather placeholders
|-- style.css        # Application styles
|-- script.js        # Search logic, API request, and DOM updates
|-- images/          # Weather and interface images
```

## How JavaScript Works

The JavaScript file first selects the important HTML elements:

```js
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
```

When the search button is clicked, the city name is passed to `checkWether()`:

```js
searchBtn.addEventListener("click", () => {
	checkWether(searchBox.value);
});
```

The function requests weather data from the API. Because the request is asynchronous, it uses `async` and `await`:

```js
const response = await fetch(apiurl + city + `&appid=${apikey}`);
const data = await response.json();
```

After the response is converted to JSON, JavaScript updates the HTML using the values returned by the API:

```js
document.querySelector(".city").textContent = data.name;
document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").textContent = data.main.humidity + "%";
document.querySelector(".wind").textContent = Math.round(data.wind.speed) + " km/h";
```

The returned weather condition is used to select the matching image, such as `rain.png`, `clear.png`, or `clouds.png`.

## API Coordination

This app uses the OpenWeather Current Weather Data API:

```text
https://api.openweathermap.org/data/2.5/weather
```

The request contains three important values:

- `units=metric` returns temperatures in Celsius.
- `q` contains the city entered by the user.
- `appid` contains the OpenWeather API key.

Example request format:

```text
https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=YOUR_API_KEY
```

The API returns JSON data. The app reads values from objects such as:

```js
data.name          // City name
data.main.temp     // Temperature
data.main.humidity // Humidity
data.wind.speed    // Wind speed
data.weather[0]    // Weather condition
```

## Running the App

1. Add a valid OpenWeather API key in `script.js`.
2. Open `index.html` in a browser, or use the Live Server extension in VS Code.
3. Enter a city name and click the search button.

## Security Note

The API key is currently stored in frontend JavaScript, which makes it visible to anyone viewing the website source. This is acceptable for a learning project, but a production app should make the API request through a backend server and keep the key in an environment variable.
