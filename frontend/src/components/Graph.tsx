import React from "react";
import { Line } from "react-chartjs-2";

function Graph({ tabName, units, chartData }) {
  return (
    <>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              ticks: {
                color: "rgba(238, 238, 238,1)",
              },
              title: {
                display: true,
                text: "Time of Day",
                color: "rgba(238, 238, 238,1)",
              },
              grid: { color: "rgba(238, 238, 238,0.2)" },
            },
            y: {
              ticks: {
                color: "rgba(238, 238, 238,1)",
              },
              title: {
                display: true,
                text:
                  tabName.charAt(0).toUpperCase() +
                  tabName.slice(1) +
                  ` (${units})`,
                color: "rgba(238, 238, 238,1)",
              },
              grid: { color: "rgba(238, 238, 238,0.2)" },
            },
          },
        }}
      />
    </>
  );
}

export default Graph;
