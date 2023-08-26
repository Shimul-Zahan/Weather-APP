function getWeather(cityName) {
    // !set city and weater name
    const apiKeys = '6f731f40d452e465d0e3a51962483c5b&';
    const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric'

    // !fetch weather
    const weather = fetch(url + `&q=${cityName}` + `&appid=${apiKeys}`)

        .then(responce => responce.json())
        .then(data => {
            document.getElementById('tempareture').innerText = Math.round(data.main.temp);
            document.getElementById('country').innerText = data.name;
            document.getElementById('humidity').innerText = data.main.humidity;
            document.getElementById('wind-speed').innerText = data.wind.speed;
            document.getElementById('country-name').value = '';
            const weather = data.weather[0].main;
            if (weather === 'Clouds') {
                document.getElementById('image').src = './images/clouds.png';
            }
            if (weather === 'Rain') {
                document.getElementById('image').src = './images/rain.png';
            }
            if (weather === 'Drizzle') {
                document.getElementById('image').src = './images/drizzle.png';
            }
            if (weather === 'Snow') {
                document.getElementById('image').src = './images/snow.png';
            }
            if (weather === 'Clear') {
                document.getElementById('image').src = './images/clear.png';
            }
            if (weather === 'Mist') {
                document.getElementById('image').src = './images/mist.png';
            }
            console.log(weather)
        });
}

//! onclick function
function showWeather() {
    const cityName = document.getElementById('country-name').value;
    getWeather(cityName)
}
