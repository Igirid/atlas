"use client";

import { Search, Filter, ChevronDown, MoreVertical, Pencil } from "lucide-react";
import { useState } from "react";
import { Tab } from "@headlessui/react";

const supplierInfo = {
  name: "Fidson Healthcare",
  address: "4, Road 56, Lagos, Nigeria",
  contactEmail: "musa@example.com",
  contactPhone: "+234 801 234 5678",
  bankName: "First Bank Plc",
  logo: "/fidson-logo.png", // Replace with actual logo path
};

const summaryMetrics = [
  { title: "Purchase Order", value: "₦5,250,000", count: 40 },
  { title: "Invoices", value: "₦5,250,000", count: 20 },
  { title: "Payments", value: "₦5,250,000", count: 25 },
  { title: "Purchase Qty", value: "12", count: null },
  { title: "Returns", value: "0", count: null },
];

const purchaseOrders = [
  { orderNo: "RHPO-1651244214", type: "Trade", date: "5/21/2024", total: "₦2,055,043.00", quantity: 93, returned: 1, status: "Approved" },
  { orderNo: "RHPO-1651244211", type: "Trade", date: "3/25/2024", total: "₦423,369.55", quantity: 120, returned: 2, status: "Approved" },
  { orderNo: "RHPO-1651244891", type: "Trade", date: "4/19/2024", total: "₦386,934.91", quantity: 67, returned: 5, status: "Approved" },
  { orderNo: "RHPO-1651245124", type: "Trade", date: "5/20/2024", total: "₦952,638.63", quantity: 84, returned: 2, status: "Approved" },
];

export default function SupplierDashboard() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="p-6 space-y-6">
      {/* Back Navigation */}
      <button className="flex items-center text-gray-600 hover:text-black">
        <ChevronDown className="rotate-90 w-5 h-5" />
        <span className="ml-2">Back</span>
      </button>

      {/* Supplier Info */}
      <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={supplierInfo.logo} alt="Logo" className="w-14 h-14 rounded-lg border" />
          <div>
            <h2 className="text-lg font-semibold">{supplierInfo.name}</h2>
            <p className="text-sm text-gray-500">{supplierInfo.address}</p>
          </div>
        </div>
        <div>
          <p className="text-sm">
            📧 {supplierInfo.contactEmail} <br />
            📞 {supplierInfo.contactPhone}
          </p>
        </div>
        <div>
          <p className="text-sm">🏦 {supplierInfo.bankName}</p>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-5 gap-4">
        {summaryMetrics.map((metric, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4 text-center">
            <p className="text-gray-500">{metric.title}</p>
            <p className="text-lg font-semibold">{metric.value}</p>
            {metric.count !== null && (
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-md">{metric.count}</span>
            )}
          </div>
        ))}
      </div>

      {/* Tabs */}
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-4 border-b">
          {["Purchase order", "Invoices", "Payment"].map((tab, index) => (
            <Tab key={index} className={({ selected }) => `px-4 py-2 ${selected ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}>
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {/* Purchase Orders Table */}
            <div className="mt-4 bg-white shadow rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <Search className="w-5 h-5 text-gray-500" />
                  <input type="text" placeholder="Search" className="border-none focus:ring-0" />
                </div>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-1 border px-3 py-1 rounded-md">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                  <button className="flex items-center space-x-1 border px-3 py-1 rounded-md">
                    <ChevronDown className="w-4 h-4" />
                    <span>Sort by</span>
                  </button>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2">Order No</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Quantity</th>
                    <th>Returned</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {purchaseOrders.map((order, index) => (
                    <tr key={index} className="border-b">
                      <td>{order.orderNo}</td>
                      <td>{order.type}</td>
                      <td>{order.date}</td>
                      <td>{order.total}</td>
                      <td>{order.quantity}</td>
                      <td>{order.returned}</td>
                      <td className="text-green-600">{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
