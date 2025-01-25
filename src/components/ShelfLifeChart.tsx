"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const shelfLifeData = {
  labels: ["> 180 Days", "90-180 Days", "30-90 Days", "< 30 Days", "Expired"],
  datasets: [
    {
      label: "Shelf Life Analysis",
      data: [40, 30, 15, 10, 5], // Example data percentages
      backgroundColor: ["#4CAF50", "#FFC107", "#FF9800", "#FF5722", "#D32F2F"],
      hoverOffset: 8,
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide default legend (we will use custom)
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => `${tooltipItem.raw}% of Stock`,
      },
    },
  },
};

export default function ShelfLifeChart() {
  return (
    <div className="w-full max-w-md">
      <div className="relative w-64 h-64 mx-auto">
        <Doughnut data={shelfLifeData} options={options} />
      </div>

      {/* Custom Legend */}
      {/* <div className="mt-4 space-y-2">
        {shelfLifeData.labels.map((label, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor:
                  shelfLifeData.datasets[0].backgroundColor[index],
              }}
            ></div>
            <span className="text-sm text-gray-700">{label}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
}
