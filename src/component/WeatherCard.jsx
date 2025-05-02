import React from "react";
import "../index.css";
import { FiWind } from "react-icons/fi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";

const WeatherCard = ({ weatherData }) => {
  const weatherIcon = `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`;
  return (
    <section className="flex gap-x-6 flex-row md:gap-x-10 bg-[#1f1f1f] rounded-xl p-10 card">
      <div className="max-w-full sm:max-w-fit text-center main-card">
        <h2 className="font-semibold text-3xl">
          {weatherData?.name},&nbsp;{weatherData?.sys.country}
        </h2>
        <div className="w-full flex items-center justify-center">
          <img src={weatherIcon} width={150} height={150} alt="weather image" />
        </div>
        <h2 className="text-5xl font-bold my-5">
          {Math.round(weatherData?.main?.temp)}&deg;C
        </h2>
        <div>
          <h3 className="text-[25px] font-semibold">
            {weatherData?.weather[0]?.main}
          </h3>
        </div>
      </div>
      <div className="sm:border-t-0 border-l-2 text-[17px] font-semibold border-gray-500/30 sm:my-0 my-2 py-2 sm:px-10 global">
        <ul>
          <li>
            <TiWeatherPartlySunny />
            &nbsp;&nbsp;
            <h3 className="my-5 first-one">
              Weather : {weatherData?.weather[0]?.description}
            </h3>
          </li>
          <li>
            {" "}
            <LiaTemperatureLowSolid />
            &nbsp;&nbsp;
            <h3 className="my-5">
              Feels Like : {Math.floor(weatherData?.main?.feels_like)}&deg;
            </h3>
          </li>
          <li>
            <WiHumidity />
            &nbsp;&nbsp;
            <h3 className="my-5">Humidity : {weatherData?.main?.humidity}%</h3>
          </li>
          <li>
            <FiWind />
            &nbsp;&nbsp;
            <h3 className="my-5">
              Wind : {Math.round(weatherData?.wind?.speed * 3.6)} km/h
            </h3>
          </li>
          <li>
            <MdOutlineVisibility />
            &nbsp;&nbsp;
            <h3 className="my-5">
              Visibility : {weatherData?.visibility / 1000} km
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WeatherCard;
