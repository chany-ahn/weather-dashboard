import React from "react";
import { Line } from "react-chartjs-2";

import "./styles/Graph.css";

function Graph({ tabName, chartData }) {
  return (
    <>
      <div className="chart-container">
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
