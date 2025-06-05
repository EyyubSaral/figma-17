// components/VOCChart.jsx
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Benzene", "Toluene", "Gas 3"],
  datasets: [
    {
      label: "VOC",
      data: [59, 39, 28],
      backgroundColor: ["#ef4444", "#facc15", "#10b981"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Bu önemli
  plugins: {
    legend: { position: "right" },
  },
};

export default function VOCChart() {
  return (
    <div className="w-[160px] h-[160px] mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
}
