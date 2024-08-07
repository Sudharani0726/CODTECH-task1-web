document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temp = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('cityName').textContent = cityName;
            document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
            document.getElementById('description').textContent = `Weather: ${description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
