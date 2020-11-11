let searchLocation = "mexico";


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
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&units=imperial&appid=b8cf73639b0d81c1905ba1ac1cb6f289`)
        .then(response => response.json())
        .then(data => {
            weatherCards(data);
        })
}

/**
 * Write a loop that fills appropriate number of cards with relevent weather data
 */
let weatherCards = function (weatherData) {
    $("#weather-cards").empty();
    console.log(weatherData);
    for (let i = 0; i < weatherData.list.length; i += 8) {
        cardBuilder(weatherData.list[i]);
    }
}

let cardBuilder = function (data) {
    let cardCol = $("<div>");
    let card = $("<div>");
    let content = $("<div>");
    let cardTitle = $("<span>");
    let icon = $("<img>");
    let temp = $("<p>");
    let humidity = $("<p>");

    cardCol.attr("class", "col s3");
    cardCol.attr("style", "width: 12rem;")
    card.attr("class", "card blue-grey darken-1");
    content.attr("class", "card-content white-text");
    cardTitle.attr("class", "card-title");
    cardTitle.text(moment(data.dt_txt).format("L"));
    icon.attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    temp.text("Temperature: " + data.main.temp + " °F");
    humidity.text("Humidity: " + data.main.humidity + "%")

    content.append(cardTitle);
    content.append(icon);
    content.append(temp);
    content.append(humidity);
    card.append(content);
    cardCol.append(card);
    $("#weather-cards").append(cardCol);

}



let webpageGenerator = function () {
    bannerFetch();
    let weatherData = weatherFetch();
    weatherCards(weatherData);
}


weatherFetch();


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
