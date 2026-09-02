import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { useEffect, useState } from "react";
const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!city) return;
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");
        const locationResponse = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`,
        );
        if (!locationResponse.data.results) {
          setError("City Not Found");
          setWeather(null);
          return;
        }
        const location = locationResponse.data.results[0];
        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`,
        );
        setWeather({
          city: location.name,
          temperature: weatherResponse.data.current.temperature_2m,
          humidity: weatherResponse.data.current.relative_humidity_2m,
          wind: weatherResponse.data.current.wind_speed_10m,
        });
      } catch (error) {
        setError("Something went Wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);
  return (
    <div className="min-h-screen ">
      <h1 className="text-center font-black text-3xl bg-amber-300 rounded-4xl mt-1.5">
        Weather App 🌤️
      </h1>
      <SearchBar setCity={setCity} />
      {loading && (
        <p className="text-center text-blue-600 text-xl mt-5">Loading... ⏳</p>
      )}
      {error && (
        <p className="text-center text-red-500 text-xl mt-5">{error}</p>
      )}
      {weather && !loading && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
