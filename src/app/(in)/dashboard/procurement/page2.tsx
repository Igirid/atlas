"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Download,
  Filter,
  List,
  Grid,
  ListFilter,
  CloudDownload,
  ArrowBigUp,
  ArrowBigDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { useState } from "react";

const receivedProductsData = [
  { month: "Jan", value: 5000 },
  { month: "Feb", value: 8000 },
  { month: "Mar", value: 7000 },
  { month: "Apr", value: 10000 },
  { month: "May", value: 7500 },
  { month: "Jun", value: 11000 },
];

const procurementSpendingData = [
  { month: "Jan", spending: 500000 },
  { month: "Feb", spending: 750000 },
  { month: "Mar", spending: 650000 },
  { month: "Apr", spending: 900000 },
  { month: "May", spending: 850000 },
  { month: "Jun", spending: 1100000 },
];

const shelfLifeData = [
  { name: "Less than 18 Months", value: 40, color: "#22C55E" },
  { name: "More than 18 Months", value: 60, color: "#6366F1" },
];

const storageSpace = 70; // Used Storage Space Percentage

export default function ProcurementDashboard() {
  const [selected, setSelected] = useState(0);
  const getTextClass = (percent: string) => {
    if (percent.startsWith("~")) {
      return "text-gray-500";
    } else if (percent.startsWith("-")) {
      return "text-red-500";
    } else {
      return "text-green-500";
    }
  };
  const getBgClass = (percent: string) => {
    if (percent.startsWith("~")) {
      return "bg-gray-200";
    } else if (percent.startsWith("-")) {
      return "bg-red-200";
    } else {
      return "bg-green-200";
    }
  };
  return (
    <div className="p-6">
      <div className="flex space-x-2 ">
        {[
          "Dashboard",
          "All Suppliers",
          "Purchase order",
          "Payment",
          "Suppliers Return",
          "Product Request",
        ].map((tab, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`p-1 border-blue-500 text-xs cursor-pointer ${
              selected == index
                ? "border-b-[2.5px] mt-[0.8px] font-semibold text-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* Header */}
      <div className="flex justify-between items-center border-gray-300 border-t py-2 mb-6">
        <h1 className="text-sm font-bold">Procurement Dashboard</h1>
        <div className="flex gap-2">
          <button className="flex items-center hover:bg-gray-200 font-medium text-xs space-x-1 border-2 border-gray-300 px-3 rounded-md">
            <ListFilter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 text-xs space-x-1 rounded-md hover:bg-blue-700">
            <CloudDownload size={16} /> Download Report
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full flex gap-4">
        <div className="w-4/5">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "Received Suppliers", value: "60", percent: "+12.95%" },
              {
                label: "Received Products Qty",
                value: "20,550",
                percent: "-2.95%",
              },
              {
                label: "Value of Received Products",
                value: "₦5,250,000",
                percent: "~12.95%",
              },
              { label: "Orders Pending Arrival", value: "15" },
              { label: "Orders Passed Delivery Date", value: "10" },
              {
                label: "Average Processing Time",
                value: "06 Days | 14 Hours | 53 Minutes",
              },
            ].map((stat, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-4">{stat.label}</p>
                <h3 className="text-sm font-bold mb-2">{stat.value}</h3>
                {stat.percent && (
                  <p
                    className={`text-xs flex gap-2 items-center justify-start 
                      ${getTextClass(stat.percent)}
                          `}
                  >
                    <span
                      className={`rounded-md p-1.5 ${getBgClass(stat.percent)}`}
                    >
                      {stat.percent}{" "}
                      {stat.percent.startsWith("+") ? (
                        <ArrowUp className="inline-flex w-2.5 h-2.5" />
                      ) : (
                        <ArrowDown className="inline-flex w-2.5 h-2.5" />
                      )}{" "}
                    </span>{" "}
                    <span>Compared to last month</span>
                  </p>
                )}
              </div>
            ))}
          </div>
          {/* Charts Section */}
          {/* <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">
                Received Products (Monthly)
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={receivedProductsData}>
                  <XAxis dataKey="month" stroke="#8884d8" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4F46E5" barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">
                Procurement Spending (₦) per Month
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={procurementSpendingData}>
                  <XAxis dataKey="month" stroke="#8884d8" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Line
                    type="monotone"
                    dataKey="spending"
                    stroke="#22C55E"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div> */}

          {/* Additional Analysis */}
          <div className="grid grid-cols-2 gap-6">
            {/* Shelf Life Analysis */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-sm font-semibold mb-4">
                Shelf Life Analysis
              </h2>
              <h2 className="text-xs mb-4">
                Ratio of received products with expiry of less than 18 months
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={shelfLifeData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                  >
                    {shelfLifeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center mt-4 space-x-4">
                {shelfLifeData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-sm">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Storage Space */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Storage Space</h2>
              <h2 className="text-xs mb-4">
                Ratio of Used vs Free storage space
              </h2>
              <div className="relative w-40 h-40 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <circle
                    className="text-gray-300 stroke-current"
                    strokeWidth="4"
                    cx="18"
                    cy="18"
                    r="16"
                    fill="transparent"
                  />
                  <circle
                    className="text-blue-600 stroke-current"
                    strokeWidth="4"
                    cx="18"
                    cy="18"
                    r="16"
                    fill="transparent"
                    strokeDasharray="100"
                    strokeDashoffset={`${100 - storageSpace}`}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
                  {storageSpace}%
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Used vs Free Storage Space
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/5 flex flex-col border border-gray-200 rounded-sm">
          <div className="flex flex-col px-2 py-4 space-y-6">
            <p className="text-gray-600 text-xs font-bold space-y-2">
              Top Suppliers
              {[
                {
                  name: "Emzor Pharmaceuticals",
                  amount: 235000,
                  width: "w-32",
                },
                {
                  name: "Fidson Healthcare",
                  amount: 122040,
                  width: "w-20",
                },
                {
                  name: "Emzor Pharmaceuticals",
                  amount: 76320,
                  width: "w-20",
                },
                { name: "Fidson Healthcare", amount: 63470, width: "w-20" },
                { name: "Emzor Pharmaceuticals", amount: 4609, width: "w-20" },
              ].map((supplier, index) => (
                <div className="flex flex-col mt-4">
                  <p className="text-xs font-medium">{supplier.name}</p>
                  <div className="flex items-center gap-4">
                    <div
                      className={`bg-gray-300 border border-gray-100 rounded-full h-1.5" w-40`}
                    >
                      <div
                        className={` ${supplier.width}  bg-blue-500 rounded-full h-1.5`}
                      ></div>
                    </div>{" "}
                    <span className="text-xs font-normal">
                      ₦{supplier.amount}
                    </span>
                  </div>
                </div>
              ))}
            </p>
            <p className="text-gray-600 text-xs font-bold space-y-2">
              Top Products
              {[
                {
                  name: "Paracetamol",
                  amount: 2000,
                  width: "w-32",
                },
                {
                  name: "Ibuprofen",
                  amount: 500,
                  width: "w-20",
                },
                {
                  name: "Amoxicillin",
                  amount: 403,
                  width: "w-20",
                },
                { name: "Vitamin C Tablets", amount: 321, width: "w-20" },
                {
                  name: "Artemether-Lumefantrine",
                  amount: 4609,
                  width: "w-20",
                },
              ].map((supplier, index) => (
                <div className="flex flex-col mt-4">
                  <p className="text-xs font-normal">{supplier.name}</p>
                  <div className="flex items-center gap-4">
                    <div
                      className={`bg-gray-300 border border-gray-100 rounded-full h-1.5" w-40`}
                    >
                      <div
                        className={` ${supplier.width}  bg-green-400 rounded-full h-1.5`}
                      ></div>
                    </div>{" "}
                    <span className="text-xs font-normal">
                      ₦{supplier.amount}
                    </span>
                  </div>
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
