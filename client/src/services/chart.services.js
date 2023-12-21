import { createChart } from "lightweight-charts";

export async function createDashboardChart() {
    const chart = createChart(document.getElementById("chart"), {
        width: 800,
        height: 300,
        layout: {
            background: { color: "#FFFFFF" },
            textColor: "#414141",
        },
    });
    
    const datatest = [
    { time: "2023-01-11", value: 80.01 },
    { time: "2023-02-01", value: 84.01 },
    { time: "2023-03-13", value: 71.64 },
    { time: "2023-04-14", value: 84.89 },
    { time: "2023-05-15", value: 14.43 },
    { time: "2023-06-11", value: 20.01 },
    ];

    const areaSeries = chart.addAreaSeries({
        lastValueVisible: false,
        crosshairMarkerVisible: false,
        topColor: "#ffffff",
        bottomColor: "rgba(99, 169, 215, 0.2)",
        lineColor: "rgba(132, 132, 132, 0.1)",
    });
    areaSeries.setData(datatest);

    const lineSeries = chart.addLineSeries();
    lineSeries.setData(datatest);

    chart.timeScale().fitContent();
}