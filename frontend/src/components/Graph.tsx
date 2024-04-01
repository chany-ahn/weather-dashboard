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
              display: true,
              text: "Today's " + tabName,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
}

export default Graph;
