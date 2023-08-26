function getWeather(cityName) {
    // !set city and weater name
    const apiKeys = '6f731f40d452e465d0e3a51962483c5b&';
    const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric'

    // !fetch weather
    const weather = fetch(url + `&q=${cityName}` + `&appid=${apiKeys}`)

        .then(responce => responce.json())
        .then(data => {
            const tempareture = document.getElementById('tempareture').innerText = Math.round(data.main.temp);
            const country = document.getElementById('country').innerText = data.name;
            const humidity = document.getElementById('humidity').innerText = data.main.humidity;
            const speed = document.getElementById('wind-speed').innerText = data.wind.speed
;
            document.getElementById('country-name').value = '';
            console.log(data)
        });
}

//! onclick function
function showWeather() {
    const cityName = document.getElementById('country-name').value;
    getWeather(cityName)
}
