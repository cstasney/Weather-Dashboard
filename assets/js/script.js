// global variables
var apiKey = "054dc6e34b7586a74fbba72f5c2051f9"

// search button function
$(document).ready(function () {
    //search button feature
    $("#search-button").on('click', function () {
        //get value in input search-value.
        var city = $("#search-value").val();
        //clear input field
        $("#search-value").val("");
        getWeather(city);
        getForecast(city);
    });
})

// makes enter key function as click
$("#search-value").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#search-button").click();
        getWeather(city);
        getForecast(city);
    }
});


// get today's weather
function getWeather(city) {
    var weather = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=054dc6e34b7586a74fbba72f5c2051f9&units=metric"
    fetch(weather)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
}

function getForecast(city) {
    var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=054dc6e34b7586a74fbba72f5c2051f9&units=metric"
    fetch(forecast)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
    $("#forecast").html("<h2 class=\"mt-3\">5 Day Forecast:</h2>").append("<div class=\row\></div>")

    // loop to display card with 5 day forecast
    // for (var i = 0; i < data.list.length; i++) {
    //     if(data.list[i].dt_text.indexOf("15:00:00") !== -1)
    // }
}
