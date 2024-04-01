import React, { useState } from "react";
import GraphTab from "./GraphTab.tsx";
import GraphTabContents from "./GraphTabContents.tsx";

import "./styles/GraphContents.css";

function GraphDisplay({ hourlyWeatherData }) {
  const [activeTab, setActiveTab] = useState("temperature");

  const tabProperties = {
    temperature: "temp_c",
    precipitation: "precip_mm",
    wind: "wind_kph",
  };

  const tabs = Object.keys(tabProperties).map((tabName) => (
    <GraphTab
      tabName={tabName}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      key={tabName}
    />
  ));

  const chartData = {};
  Object.entries(tabProperties).forEach(([tabName, tabProp]) => {
    chartData[tabName] = {
      labels: hourlyWeatherData.map((data) => data.time),
      datasets: [
        {
          label: "Temperature (\u00B0C)",
          data: hourlyWeatherData.map((data) => data[tabProp]),
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
    };
  });

  return (
    <>
      <div className="card text-center graph-container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {tabs}
        </ul>
        <div className="tab-content chart-container" id="myTabContent">
          <GraphTabContents
            tabName="temperature"
            activeTab={activeTab}
            chartData={chartData["temperature"]}
          />
          <GraphTabContents
            tabName="precipitation"
            activeTab={activeTab}
            chartData={chartData["precipitation"]}
          />
          <GraphTabContents
            tabName="wind"
            activeTab={activeTab}
            chartData={chartData["wind"]}
          />
        </div>
      </div>
    </>
  );
}

export default GraphDisplay;
