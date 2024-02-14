import React from "react";
import { Line } from "react-chartjs-2";

function Graph({ tabName, chartData }) {
  return (
    <>
      <div className="chart-container">
        <h2>{tabName}</h2>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Today's " + tabName,
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default Graph;
