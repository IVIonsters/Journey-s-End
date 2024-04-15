const apiKey = '5ccfb87c2313dc93a4278d2086ead169'
// const searchBox = document.querySelector(".search input");
// const searchButton = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");


async function getWeather(city) {
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
    var data = await apiData.json();
    console.log(data);
    document.getElementById("cityforweather").innerHTML = data.city.name;
    document.getElementById("today").innerHTML = (Math.round((data.list[0].main.temp - 273.15) * 1.8 + 32)) + '°F';
    document.getElementById("day-1").innerHTML = (Math.round((data.list[8].main.temp - 273.15) * 1.8 + 32)) + '°F';
    document.getElementById("day-2").innerHTML = (Math.round((data.list[16].main.temp - 273.15) * 1.8 + 32)) + '°F';
    document.getElementById("day-3").innerHTML = (Math.round((data.list[24].main.temp - 273.15) * 1.8 + 32)) + '°F';
    document.getElementById("day-4").innerHTML = (Math.round((data.list[32].main.temp - 273.15) * 1.8 + 32)) + '°F';
}


// var unitIsCelcius = true;
// var globalForecast = [];

// // Maps the API's icons to the ones from https://erikflowers.github.io/weather-icons/
// var weatherIconsMap = {
//     "01d": "wi-day-sunny",
//     "01n": "wi-night-clear",
//     "02d": "wi-day-cloudy",
//     "02n": "wi-night-cloudy",
//     "03d": "wi-cloud",
//     "03n": "wi-cloud",
//     "04d": "wi-cloudy",
//     "04n": "wi-cloudy",
//     "09d": "wi-showers",
//     "09n": "wi-showers",
//     "10d": "wi-day-hail",
//     "10n": "wi-night-hail",
//     "11d": "wi-thunderstorm",
//     "11n": "wi-thunderstorm",
//     "13d": "wi-snow",
//     "13n": "wi-snow",
//     "50d": "wi-fog",
//     "50n": "wi-fog"
// };


// $(function () {
//     getClientPosition();
//     startClock();
// });


// function startClock() {
//     setInterval(function () {
//         $("#localTime").text(new Date().toLocaleTimeString());
//     }, 1000);
// }


// function getClientPosition() {
//     $.getJSON("https://ipapi.co/json/", function (position) {
//         $("#cityName").text(position.city);
//         $("#cityCode").text(position.country);

//         getWeatherData(position.latitude, position.longitude);
//     });
// }


// function getWeatherData(latitude, longitude) {
//     $.ajax({
//         type: "GET",
//         url: "https://api.openweathermap.org/data/2.5/forecast/daily?APPID=5ccfb87c2313dc93a4278d2086ead169&lat=" + latitude + "&lon=" + longitude + "&units=metric&cnt=5",
//         cache: true,
//         headers: {
//             "Access-Control-Allow-Headers": "x-requested-with"
//         },
//         success: function (forecast) {
//             globalForecast = forecast;
//             updateForecast(forecast);

//             // Stops Refresh button's spinning animation
//             $("#refreshButton").html("<i class='fa fa-refresh fa-fw'></i> Refresh");
//         },
//         error: function (error) {
//             console.log("Error with ajax: " + error);
//         }
//     });
// }


// // Update view values from passed forecast
// function updateForecast(forecast) {

//     // Present day
//     var today = forecast.list[0];
//     $("#tempDescription").text(toCamelCase(today.weather[0].description));
//     $("#humidity").text(today.humidity);
//     $("#wind").text(today.speed);
//     $("#localDate").text(getFormattedDate(today.dt));
//     $("#main-icon").addClass(weatherIconsMap[today.weather[0].icon]);
//     $("#mainTemperature").text(Math.round(today.temp.day));
//     $("#mainTempHot").text(Math.round(today.temp.max));
//     $("#mainTempLow").text(Math.round(today.temp.min));


//     // Following days data
//     for (var i = 1; i < (forecast.list).length; i++) {
//         var day = forecast.list[i];

//         // Day short format e.g. Mon
//         var dayName = getFormattedDate(day.dt).substring(0, 3);

//         // weather icon from map
//         var weatherIcon = weatherIconsMap[day.weather[0].icon];

//         $("#forecast-day-" + i + "-name").text(dayName);
//         $("#forecast-day-" + i + "-icon").addClass(weatherIcon);
//         $("#forecast-day-" + i + "-main").text(Math.round(day.temp.day));
//         $("#forecast-day-" + i + "-ht").text(Math.round(day.temp.max));
//         $("#forecast-day-" + i + "-lt").text(Math.round(day.temp.min));
//     }
// }


// // Refresh button handler
// $("#refreshButton").on("click", function () {
//     // Starts Refresh button's spinning animation
//     $("#refreshButton").html("<i class='fa fa-refresh fa-spin fa-fw'></i>");
//     getWeatherData();
// });


// // Celcius button handler.
// // Converts every shown value to Celcius
// $("#celcius").on("click", function () {
//     if (!unitIsCelcius) {
//         $("#farenheit").removeClass("active");
//         this.className = "active";

//         // main day
//         var today = globalForecast.list[0];
//         today.temp.day = toCelcius(today.temp.day);
//         today.temp.max = toCelcius(today.temp.max);
//         today.temp.min = toCelcius(today.temp.min);
//         globalForecast.list[0] = today;

//         // week
//         for (var i = 1; i < 5; i++) {
//             var weekDay = globalForecast.list[i];
//             weekDay.temp.day = toCelcius(weekDay.temp.day);
//             weekDay.temp.max = toCelcius(weekDay.temp.max);
//             weekDay.temp.min = toCelcius(weekDay.temp.min);
//             globalForecast[i] = weekDay;
//         }

//         // update view with updated values
//         updateForecast(globalForecast);

//         unitIsCelcius = true;
//     }
// });


// // Farenheit button handler
// // Converts every shown value to Farenheit
// $("#farenheit").on("click", function () {
//     if (unitIsCelcius) {
//         $("#celcius").removeClass("active");
//         this.className = "active";

//         // main day
//         var today = globalForecast.list[0];
//         today.temp.day = toFerenheit(today.temp.day);
//         today.temp.max = toFerenheit(today.temp.max);
//         today.temp.min = toFerenheit(today.temp.min);
//         globalForecast.list[0] = today;

//         // week
//         for (var i = 1; i < 5; i++) {
//             var weekDay = globalForecast.list[i];
//             weekDay.temp.day = toFerenheit(weekDay.temp.day);
//             weekDay.temp.max = toFerenheit(weekDay.temp.max);
//             weekDay.temp.min = toFerenheit(weekDay.temp.min);
//             globalForecast[i] = weekDay;
//         }

//         // update view with updated values
//         updateForecast(globalForecast);

//         unitIsCelcius = false;
//     }
// });


// // Applies the following format to date: WeekDay, Month Day, Year
// function getFormattedDate(date) {
//     var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(date * 1000).toLocaleDateString("en-US", options);
// }


// // Formats the text to CamelCase
// function toCamelCase(str) {
//     var arr = str.split(" ").map(
//         function (sentence) {
//             return sentence.charAt(0).toUpperCase() + sentence.substring(1);
//         }
//     );
//     return arr.join(" ");
// }


// // Converts to Celcius
// function toCelcius(val) {
//     return Math.round((val - 32) * (5 / 9));
// }


// // Converts to Farenheit
// function toFerenheit(val) {
//     var degrees = (val * 1.8) + 32;
//     var rounded = Math.round(degrees);
//     return rounded;
// }








// document.querySelector(".city").innerHTML = data.name;
// document.querySelector(".temp").innerHTML = (Math.round((data.main.temp-273.15)*1.8+32)) +'°F';
// document.querySelector(".humidity").innerHTML = data.main.humidity;
// document.querySelector(".wind").innerHTML = data.wind.speed;

// if (data.weather[0].main == 'Clouds'){
//     weatherIcon.src = "./assets/images/cloud.png";
// } else if(data.weather[0].main == 'Thunderstorm'){
//     weatherIcon.src = "./assets/images/rain.png";
// } 
// else if(data.weather[0].main == 'Drizzle'){
//     weatherIcon.src = "./assets/images/rain.png";
// } 
// else if(data.weather[0].main == 'Rain'){
//     weatherIcon.src = "./assets/images/rain.png";
// } 
// else if(data.weather[0].main == 'Snow'){
//     weatherIcon.src = "./assets/images/snow.png";
// } 
// else if(data.weather[0].main == 'Clear'){
//     weatherIcon.src = "./assets/images/sun.png";
// } 
// else {
//     weatherIcon.src = "./assets/images/fog.png";
// }
// }

// searchButton.addEventListener('click', () => {
//     getWeather(searchBox.value);
// } )