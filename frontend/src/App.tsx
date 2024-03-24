import React from "react";

import "./App.css";
import WeatherDashboard from "./components/WeatherDashboard.tsx";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function App() {
  return <WeatherDashboard />;
}

export default App;
