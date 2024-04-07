import React, { useState, useEffect } from "react";
import { getDashboardData } from "../controllers/WeatherApiController.ts";

import GraphDisplay from "./GraphDisplay.tsx";
import WeatherCard from "./WeatherCard.tsx";

import "./styles/WeatherDashboard.css";

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

  const weatherData = [
    { ...dashboardData.currentDay },
    ...dashboardData.forecastedData,
  ];
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          {weatherData.map((data) => {
            return (
              <WeatherCard
                weatherData={data}
                setHourlyData={setCurHourlyData}
                key={data.date}
              ></WeatherCard>
            );
          })}
        </div>
      </div>
      <div className="graph-display">
        <GraphDisplay hourlyWeatherData={curHourlyData} />
      </div>
    </>
  );
}

export default WeatherDashboard;
