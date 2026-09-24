const apikey = "20c002813877b5b3e83ff721fdc196bd";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWether(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "images\clouds.png"
    }
    if(data.weather[0].main == "clear"){
        weatherIcon.src = "images\clear.png"
    }
    if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "images\drizzle.png"
    }
    if(data.weather[0].main == "mist"){
        weatherIcon.src = "images\mist.png"
    }
    if(data.weather[0].main == "rain"){
        weatherIcon.src = "images\rain.png"
    }
    if(data.weather[0].main == "snow"){
        weatherIcon.src = "images\snow.png"
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWether(searchBox.value);

})
