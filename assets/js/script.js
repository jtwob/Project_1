let searchLocation = "";



/**
 * FIX: This event listener is broken, be sure it has access to the correct data
 */
$("#search").on("submit", function (e) {
    e.preventDefault();
    console.log(e.target.value);
    searchLocation = e.target.value;
    webpageGenerator();
})

/**
 * Fetch and fill country card by Nimarti
 */
let bannerFetch = function () {
    let url = `https://restcountries.eu/rest/v2/name/${searchLocation}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            //FILL CODE
            $("#country-name").text(data[0].name) //country name
            $("#capital").text("Capital: " + data[0].capital)
            $("#callCode").text("Calling Code: " + data[0].callingCodes[0])
            $("#timeZone").text("Time Zone: " + data[0].timezones[0] + ", " +data[0].timezones[1] + ", " + data[0].timezones[2])
            $("#currency").text("Currency: " + data[0].currencies[0].name)
            $("#lang").text("Language: " + data[0].languages[0].name)
            $("#pop").text("Population: " + data[0].population)
            $("#nat-flag").attr("src", data[0].flag);
            $("#nat-flag").attr("style", "width: 300px;");
        })
}

/**
 * Fetch weather data and return it
 */
let weatherFetch = function () {
    fetch("URL")
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

/**
 * Write a loop that fills appropriate number of cards with relevent weather data
 */
let weatherCards = function (weatherData) {
    //Clear existing cards before adding more


    for (let i = 0; i < weatherData.list.length; i += 8) {
        //create and fill card elems here or write another function to call here accessing the weatherData parameter

    }
}



let webpageGenerator = function () {
    bannerFetch();
    let weatherData = weatherFetch();
    weatherCards(weatherData);
}












// fetch("https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=b8cf73639b0d81c1905ba1ac1cb6f289")
//     .then(response => response.json())
//     .then(data => console.log(data));

// fetch("https://restcountries.eu/rest/v2/name/usa")
//     .then(response => response.json())
//     .then(data => {
//         $("#country-name").text(data[0].name);
//         $("#country-name").attr("style", "text-align: center;");
//         $("#nat-flag").attr("src", data[0].flag);
//         $("#nat-flag").attr("style", "width: 300px;");
//         $("#country-data").attr("style", "width: fit-content;");
//     });
