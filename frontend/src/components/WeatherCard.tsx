import React from "react";

import CurrentWeatherDisplay from "./CurrentWeatherDisplay.tsx";
import WeatherDisplay from "./WeatherDisplay.tsx";
import WeatherImage from "./WeatherImage.tsx";
import "./styles/WeatherCard.css";

const getReadableDate = (dateString: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateParts = dateString.split("-");

  const year = dateParts[0];
  const monthIndex = parseInt(dateParts[1], 10) - 1;
  const day = parseInt(dateParts[2], 10);

  const suffixes = ["th", "st", "nd", "rd"];
  const suffixIndex =
    day % 10 <= 3 && Math.floor(day / 10) !== 1 ? day % 10 : 0;

  return `${months[monthIndex]} ${day}${suffixes[suffixIndex]}, ${year}`;
};

const dateIsToday: boolean = (date: string) => {
  return (
    date ===
    new Date()
      .toLocaleString("en-US", { timeZone: "America/New_York" })
      .split(", ")[0]
  );
};

const changeGraphDashboardData = (weatherData, setHourlyData) => {
  setHourlyData([weatherData.hour, weatherData.date]);
};

function WeatherCard({ weatherData, activeCardDate, setHourlyData }) {
  return (
    <>
      <div
        className={
          "col weatherCard" +
          (activeCardDate === weatherData.date ? " active-card" : "")
        }
        onClick={() => {
          changeGraphDashboardData(weatherData, setHourlyData);
        }}
      >
        <h4 className="dateHeader">{getReadableDate(weatherData.date)}</h4>
        <div className="weather-contents" key={weatherData.date}>
          <WeatherImage
            weatherCondition={
              dateIsToday(weatherData.date)
                ? weatherData.condition
                : weatherData.day.condition
            }
          />
          {dateIsToday(weatherData.date) ? (
            <CurrentWeatherDisplay currentWeatherData={weatherData} />
          ) : (
            <WeatherDisplay weatherData={weatherData} />
          )}
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
