"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";

Chart.register(ArcElement, Tooltip, Legend);

const storageData = {
  labels: ["Used Space", "Available Space"],
  datasets: [
    {
      data: [75, 25], // Example: 75% storage used, 25% available
      backgroundColor: ["#3B82F6", "#E5E7EB"], // Blue for used, Grey for available
      hoverBackgroundColor: ["#2563EB", "#D1D5DB"],
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        font: { size: 12 },
        boxWidth: 15,
      },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => `${tooltipItem.raw}%`,
      },
    },
  },
};

export default function StorageSpaceChart() {
  return (
    <div className="w-60 h-60">
      <Doughnut data={storageData} options={options} />
    </div>
  );
}
