const btnElement = document.querySelector("#getWeatherBTN");
const inputElement = document.querySelector("#cityInput");
const resultElement = document.querySelector("#showWeather");

function renderData(dataWeather) {
    if (dataWeather.cod === "404") {
        resultElement.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-exclamation-triangle fa-2x text-warning mb-2"></i>
                <p>City Not Found!</p>
            </div>`;
        return;
    }

    resultElement.innerHTML = `
        <div class="weather-main">
            <p class="city-name">${dataWeather.name}, ${dataWeather.sys.country}</p>
            <h1 class="temp-display">${Math.round(dataWeather.main.temp)}°</h1>
            <p class="text-capitalize mb-4"><i class="fas fa-cloud"></i> ${dataWeather.weather[0].description}</p>
            
            <div class="stats-grid">
                <div class="stat-item">
                    <i class="fas fa-tint text-info"></i>
                    <p class="mb-0 mt-1">Humidity</p>
                    <strong>${dataWeather.main.humidity}%</strong>
                </div>
                <div class="stat-item">
                    <i class="fas fa-wind text-success"></i>
                    <p class="mb-0 mt-1">Wind Speed</p>
                    <strong>${dataWeather.wind.speed} m/s</strong>
                </div>
            </div>
        </div>
    `;
}

async function fetchAPI(cName) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cName}&units=metric&appid=ca018df54353f065aaed7d802825b8be`);
        const data = await response.json();
        renderData(data);
    } catch (err) {
        console.error(err);
    }
}

function handleSearch() {
    const city = inputElement.value.trim();
    if (city) {
        resultElement.innerHTML = '<div class="text-center py-5"><div class="spinner-border text-info" role="status"></div></div>';
        fetchAPI(city);
    }
}

btnElement.addEventListener('click', handleSearch);
inputElement.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});