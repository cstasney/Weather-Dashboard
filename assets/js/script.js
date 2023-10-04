// global variables
var apiKey = "054dc6e34b7586a74fbba72f5c2051f9"
var currentCity = "";
var lastCity = "";

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
    var weather = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial"
    fetch(weather)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
        saveSearch(city);
        pullStorage();
}

// save queries to local storage
var saveSearch = function (newCity) {
    var cityExists = false;
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage["cities" + i] === newCity) {
            cityExists = true;
            break;
        }
    }
    // save to local if location is new
    if (cityExists === false) {
        localStorage.setItem('cities' + localStorage.length, newCity)
    }
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


// display query history
function pullStorage() {
    $('#list-group').empty();
    // if (localStorage.length === 0) {
    //     if (lastCity) {
    //         $('#search-value').attr("value", lastCity);
    //     } else {
    //         $('#search-value').attr("value", "Orlando");
    //     }
    // } else {
    //     // last city pushed to local storage
    //     var lastCityKey = "cities" + (localStorage.length - 1);
    //     lastCity = localStorage.getItem(lastCityKey);
    //     // default input to last location searched
    //     $('#search-value').attr("value", lastCity);
        // display previous searches on page
        for (var i = 0; i < localStorage.length; i++) {
            var city = localStorage.getItem("cities" + i);
            var cityEl;
            // Set to lastCity if currentCity not set
            if (currentCity === "") {
                currentCity = lastCity;
            }
            // Set button class to active for currentCity
            if (city === currentCity) {
                cityEl = `<button type="button" class="list-group-item list-group-item-action active">${city}</button></li>`;
            } else {
                cityEl = `<button type="button" class="list-group-item list-group-item-action">${city}</button></li>`;
            }
            // Append city to page
            $('#list-group').prepend(cityEl);
        }
        // Add a "clear" button to page if there is a cities list
        if (localStorage.length > 0) {
            $('#clear-storage').html($('<a id="clear-storage" href="#">clear</a>'));
        } else {
            $('#clear-storage').html('');
        }
    }

// }

pullStorage();