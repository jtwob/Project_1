let searchLocation = document.getElementById("search");

/**
 * FIX: This event listener is broken, be sure it has access to the correct data
 */
$("#search").on("submit", function (e) {
    e.preventDefault();
    let input = $("#searchLocation").val();
    let item = $("<li>")
    item.text(input)
    $("#citySearchHistory").prepend(item)
    console.log(e.target.value);
    searchLocation = e.target.value;

    webpageGenerator(input);
})

/**
 * Fetch and fill country card
 */
let bannerFetch = function () {
    let url = `https://restcountries.eu/rest/v2/name/${searchLocation}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //FILL CODE
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
console.log(allDat)