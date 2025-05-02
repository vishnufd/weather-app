import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import WeatherCard from "./component/WeatherCard";
import CardShimmer from "./shimmerEffect/CardShimmer";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isError, setError] = useState(false);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const city = import.meta.env.VITE_CITY;

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const fetchWeatherData = async (query) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        query ? query : city
      }&appid=${apiKey}&units=metric`
    );
    const weatherData = await response.json();
    if (weatherData.cod === "404") {
      setError(true);
      return;
    }
    setWeatherData(weatherData);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    let query = fromData.get("search_city");
    fetchWeatherData(query);
  };

  return (
    <main className=" text-white bg-[#0f0f0f] w-full sm:h-screen p-8">
      <div className="flex items-center justify-center px-4">
        <form className="w-full max-w-lg" onSubmit={handleSearch}>
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <IoSearch size={20} />
            </span>
            <input
              className="w-full bg-[#1f1f1f] text-white outline-none pl-12 pr-4 py-3 rounded-full placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition"
              type="search"
              name="search_city"
              id="search_city"
              placeholder="Search Your Location"
            />
          </div>
          {isError && (
            <p className="mt-2 text-red-600 text-center text-sm">
              The Entered City Not Found.
            </p>
          )}
        </form>
      </div>
      <div className="flex items-center justify-center w-full my-16">
        {weatherData ? (
          <WeatherCard weatherData={weatherData} />
        ) : (
          <CardShimmer />
        )}
      </div>
    </main>
  );
};

export default App;
