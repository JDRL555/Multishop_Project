import React, { Component } from "react";
import ApexCharts from "apexcharts";

const LineChart = () => {
  // Los datos que se mostrarán en el gráfico
  const data = [
    {
      name: "Temperatura",
      data: [
        10,
        12,
        15,
        18,
        21,
        24,
        27,
        30,
        33,
        36,
      ],
    },
  ];

  // Las opciones de configuración del gráfico
  

  // Renderiza el gráfico
  return (
    <div>
      <ApexCharts
        type="line"
        height="400"
        data={data}
      />
    </div>
  );
};

export default LineChart;