import React, { Component } from "react";
import Chart from "chart.js";

const LineChart = () => {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Temperatura",
        data: [10, 12, 15, 18, 21, 24],
        fill: false,
        lineTension: 0.1,
        borderColor: "red",
      },
    ],
  };

  const options = {
    title: {
      text: "Temperatura promedio mensual",
    },
    xaxis: {
      title: "Mes",
    },
    yaxis: {
      title: "Temperatura (°C)",
    },
  };

  return (
    <div>
      <Chart
        type="line"
        data={data}
        options={options}
      />
    </div>
  );
};

export default LineChart;