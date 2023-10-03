// global variables
var apiKey = "054dc6e34b7586a74fbba72f5c2051f9"

// search button function
$(document).ready(function () {
    //search button feature
    $("#search-button").on("click", function () {
      //get value in input search-value.
      var searchCity = $("#search-value").val();
      //empty input field.
      $("#search-value").val("");
      getApi(searchCity);
      getApi(searchCity);
    });


function getApi() {
    var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=054dc6e34b7586a74fbba72f5c2051f9"
        fetch(forecast)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)        
        });
}

getApi();


