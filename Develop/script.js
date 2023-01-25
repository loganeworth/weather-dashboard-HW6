document.getElementById('search').addEventListener('click', async function () {
    const currentCity =  document.getElementById('search-city').value;
    console.log(currentCity);
    let currentWeather = await getCurrentApi(currentCity)
    console.log(currentWeather)
    document.getElementById('city-name').innerHTML = currentCity;
    document.getElementById('temp').innerHTML = currentWeather.temp
    document.getElementById('wind').innerHTML = currentWeather.wind
    document.getElementById('humidity').innerHTML = currentWeather.humidity
})

function getApi(city) {
    let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ba28d4ebc4f91ccc7f08e5ee3cf3e58a`
    
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data)
        })
}
getApi()

async function getCurrentApi(cityName) {
    let requestCurrentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ba28d4ebc4f91ccc7f08e5ee3cf3e58a`

    return fetch(requestCurrentUrl)
        .then(function (response) {
            return response.json();
    })
        .then((json) => {
            return {temp: json.main.temp, humidity: json.main.humidity, wind: json.wind.speed}
        })
        
}