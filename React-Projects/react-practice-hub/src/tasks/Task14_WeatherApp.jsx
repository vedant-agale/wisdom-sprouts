import React, { useEffect, useState } from "react";

export default function Task14_WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Mumbai"); // Default city
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError("");
    
    try {
      // 1. City Name ko Latitude aur Longitude mein convert karna (Geocoding API)
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
      const geoData = await geoRes.json();

      // Agar user ne galat spelling daali aur city nahi mili
      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found! Please check the spelling.");
        setWeather(null);
        setLoading(false);
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];

      // 2. Un coordinates se Asli Weather fetch karna
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      const weatherData = await weatherRes.json();
      
      // Weather aur City ka proper naam state mein save karna
      setWeather({ ...weatherData.current_weather, cityName: name });
    } catch (err) {
      setError("Something went wrong while fetching data.");
      setWeather(null);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(); // Pehli baar app khulte hi default city ka weather aayega
  }, []);

  return (
    <div className="card p-4 mb-4 shadow-sm border-info">
      <h3 className="text-info">14. Weather App (City Search)</h3>
      
      <div className="d-flex gap-2 mt-3 mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter City Name (e.g., Pune, Delhi, Tokyo)" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
        />
        <button className="btn btn-info text-white px-4" onClick={fetchWeather} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="alert alert-danger p-2">{error}</div>}
      
      {/* Weather Result */}
      {weather && !loading && (
        <div className="alert alert-info">
          <h4 className="fw-bold mb-3">📍 {weather.cityName}</h4>
          <h5 className="mb-2">🌡️ Temp: <strong>{weather.temperature}°C</strong></h5>
          <h5 className="mb-0">💨 Wind: <strong>{weather.windspeed} km/h</strong></h5>
        </div>
      )}
    </div>
  );
}