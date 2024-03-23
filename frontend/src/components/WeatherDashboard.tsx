import React, { useState, useEffect } from "react";
import { getDashboardData } from "../controllers/WeatherApiController.ts";

import CurrentWeatherDisplay from "./CurrentWeatherDisplay.tsx";
import GraphDisplay from "./GraphDisplay.tsx";
import WeatherDisplay from "./WeatherDisplay.tsx";
import WeatherImage from "./WeatherImage.tsx";

import "./styles/WeatherDashboard.css";

// put into some utilities class?
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

  const dateParts = dateString.split("-"); // Split the date string into [yyyy, mm, dd]

  const year = dateParts[0];
  const monthIndex = parseInt(dateParts[1], 10) - 1; // Convert to zero-based index
  const day = parseInt(dateParts[2], 10);

  const suffixes = ["th", "st", "nd", "rd"];
  const suffixIndex =
    day % 10 <= 3 && Math.floor(day / 10) !== 1 ? day % 10 : 0;

  return `${months[monthIndex]} ${day}${suffixes[suffixIndex]}, ${year}`;
};

function WeatherDashboard() {
  const [dashboardData, setDashboardData] = useState({});
  const [curHourlyData, setCurHourlyData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getDashboardData();
      setDashboardData(data);
      setCurHourlyData(data.currentDay.hour);
    };
    getData();
  }, []);

  if (Object.keys(dashboardData).length == 0) {
    return <div>Loading data...</div>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <header className="dateHeader">Today</header>
            <div
              className="weather-contents"
              key={dashboardData.currentDay.date}
            >
              <WeatherImage
                weatherCondition={dashboardData.currentDay.condition}
              />
              <CurrentWeatherDisplay
                currentWeatherData={dashboardData.currentDay}
              />
            </div>
          </div>
          {dashboardData.forecastedData?.map((data) => (
            <div className="col" key={data.date}>
              <header className="dateHeader">
                {getReadableDate(data.date)}
              </header>
              <div className="weather-contents">
                <WeatherImage weatherCondition={data.day.condition} />
                <WeatherDisplay weatherData={data} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="graph-display">
        <GraphDisplay hourlyWeatherData={curHourlyData} />
      </div>
    </>
  );
}

export default WeatherDashboard;
