import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const WQIBar = ({ label, value, color }) => {
  const data = {
    labels: [label],
    datasets: [
      {
        label,
        data: [value],
        backgroundColor: color,
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    plugins: { legend: { display: false } },
    scales: { x: { max: 100, beginAtZero: true } },
  };

  return <Bar data={data} options={options} />;
};

export default WQIBar;
