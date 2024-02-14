import React, { useState } from "react";
import GraphTab from "./GraphTab.tsx";
import Graph from "./Graph.tsx";

function GraphDisplay({ hourlyWeatherData }) {
  const [activeTab, setActiveTab] = useState("temperature");
  const [chartData, setChartData] = useState({
    labels: hourlyWeatherData.map((data) => data.time),
    datasets: [
      {
        label: "Temperature (\u00B0C)",
        data: hourlyWeatherData.map((data) => data.temp_c),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const tabNames = ["temperature", "precipitation", "wind"];

  const tabs = tabNames.map((tabName) => (
    <GraphTab
      tabName={tabName}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  ));

  return (
    <>
      <div className="card">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {tabs}
        </ul>
        <div className="tab-content" id="myTabContent">
          <Graph tabName={activeTab} chartData={chartData} />
        </div>
      </div>
    </>
  );
}

export default GraphDisplay;
