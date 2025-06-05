// components/PM25Chart.jsx
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const data = {
  labels: ["10", "20", "30", "40", "50"],
  datasets: [
    {
      label: "PM2.5",
      data: [20, 23, 21, 22, 30],
      borderColor: "#3B82F6",
      backgroundColor: "#3B82F660",
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

export default function PM25Chart() {
  return <Line data={data} options={options} />;
}
