import React, { useLayoutEffect } from "react";

import "./App.css";
import WeatherDashboard from "./components/WeatherDashboard.tsx";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function App() {
  useLayoutEffect(() => {
    document.body.style.background = "#053B50";
  });
  return (
    <>
      <h1 className="dashboard-heading">Weather Dashboard</h1>
      <WeatherDashboard />
    </>
  );
}

export default App;
