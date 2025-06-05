import { Line } from "react-chartjs-2";

const data = {
  labels: ["10", "20", "30", "40", "50"],
  datasets: [
    {
      label: "CO2",
      data: [25, 28, 26, 27, 30],
      borderColor: "#6366F1",
      backgroundColor: "#6366F160",
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // 🔧 Önemli: yüksekliği kontrol edebilmek için
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

export default function CO2Chart() {
  return (
    <div className="w-full h-[160px]">
      <Line data={data} options={options} />
    </div>
  );
}
