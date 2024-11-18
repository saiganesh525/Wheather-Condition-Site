document.getElementById('get-weather-btn').addEventListener('click', getWeather);

const apiKey = 'cd5bd86492b7b555dbe800f383fee7e1';

function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => displayWeather(data))
            .catch(error => {
                console.error('Error fetching the weather data:', error);
                document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
            });
    } else {
        alert('Please enter a city name.');
    }
}

function displayWeather(weatherData) {
    const weatherInfo = `
        <h2>Weather in ${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Description: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}
