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

// pull from local storage
var history = JSON.parse(localStorage.getItem("history")) || [];

// create an element for each item in history array
for (var i = 0; i < history.length; i++) {
    createRow(history[i]);
}

//puts search history in order
function createRow(text) {
    var listItem = $("<li>").addClass("list-group-item").text(text);
    $(".history").append(listItem);
}

//listener for search history list items
$(".history").on("click", "li", function () {
    getWeather($(this).text());
    getForecast($(this).text());
});

// get today's weather
function getWeather(city) {
    var weather = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial"
    var history = JSON.parse(localStorage.getItem("history")) || [];
        fetch(weather)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                //if index does not exist
                // if (history.indexOf(city) === -1) {
                //     //push search to history
                history.push(city);
                //places item pushed into local storage
                localStorage.setItem("history", JSON.stringify(history));
                createRow(city);
                // }

                $("#today").empty();

                var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");


                var card = $("<div>").addClass("card");
                var cardBody = $("<div>").addClass("card-body");
                var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
                var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
                var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " K");
                console.log(data)

                var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");


                var card = $("<div>").addClass("card");
                var cardBody = $("<div>").addClass("card-body");
                var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
                var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
                var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " K");
                console.log(data)

                // merge and add to page
                title.append(img);
                cardBody.append(title, temp, humid, wind);
                card.append(cardBody);
                $("#today").append(card);
                console.log(data);
            });

    }

    function getForecast(city) {
        var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=" + apiKey + "&units=metric"
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
        //     if(data.list[i].dt_text.indexOf("12:00:00") !== -1)

        //     var 
        // }
    }


