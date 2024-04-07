import React from "react";
import { Line } from "react-chartjs-2";

function Graph({ tabName, chartData }) {
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
              grid: { color: "rgba(238, 238, 238,0.2)" },
            },
            y: {
              grid: { color: "rgba(238, 238, 238,0.2)" },
            },
          },
        }}
      />
    </>
  );
}

export default Graph;
