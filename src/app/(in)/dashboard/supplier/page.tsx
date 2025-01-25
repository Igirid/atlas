"use client";

import {
  Search,
  Filter,
  ChevronDown,
  MoreVertical,
  Pencil,
  Pen,
  Ellipsis,
  Store,
  Smartphone,
  MapPin,
  Mail,
  ListFilter,
  ArrowUpDown,
  LayoutGrid,
  ChartNoAxesGantt,
  ChevronsDownUp,
  ChevronsUpDown,
  ChevronsUpDownIcon,
  EllipsisVertical,
  ChevronLeftIcon,
} from "lucide-react";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const supplierInfo = {
  name: "Fidson Healthcare",
  address: "4, Road 56, Lagos, Nigeria",
  contactEmail: "musa@example.com",
  contactPhone: "+234 801 234 5678",
  bankName: "First Bank Plc",
  logo: "/atlas/supplier-logo.png", // Replace with actual logo path
};

const summaryMetrics = [
  { title: "Purchase Order", value: "₦5,250,000", count: 40 },
  { title: "Invoices", value: "₦5,250,000", count: 20 },
  { title: "Payments", value: "₦5,250,000", count: 25 },
  { title: "Purchase Qty", value: "12", count: null },
  { title: "Returns", value: "0", count: null },
];

const purchaseOrders = [
  {
    orderNo: "RHPO-1651244214",
    type: "Trade",
    date: "5/21/2024",
    total: "₦2,055,043.00",
    quantity: 93,
    returned: 1,
    status: "Approved",
  },
  {
    orderNo: "RHPO-1651244214",
    type: "Trade",
    date: "5/21/2024",
    total: "₦2,055,043.00",
    quantity: 93,
    returned: 1,
    status: "Approved",
  },
  {
    orderNo: "RHPO-1651244214",
    type: "Trade",
    date: "5/21/2024",
    total: "₦2,055,043.00",
    quantity: 93,
    returned: 1,
    status: "Approved",
  },
  {
    orderNo: "RHPO-1651244214",
    type: "Trade",
    date: "5/21/2024",
    total: "₦2,055,043.00",
    quantity: 93,
    returned: 1,
    status: "Approved",
  },
  {
    orderNo: "RHPO-1651244214",
    type: "Trade",
    date: "5/21/2024",
    total: "₦2,055,043.00",
    quantity: 93,
    returned: 1,
    status: "Approved",
  },
  {
    orderNo: "RHPO-1651244214",
    type: "Trade",
    date: "5/21/2024",
    total: "₦2,055,043.00",
    quantity: 93,
    returned: 1,
    status: "Approved",
  },
  {
    orderNo: "RHPO-1651244214",
    type: "Trade",
    date: "5/21/2024",
    total: "₦2,055,043.00",
    quantity: 93,
    returned: 1,
    status: "Approved",
  },
  {
    orderNo: "RHPO-1651244214",
    type: "Trade",
    date: "5/21/2024",
    total: "₦2,055,043.00",
    quantity: 93,
    returned: 1,
    status: "Approved",
  },
  {
    orderNo: "RHPO-1651244211",
    type: "Trade",
    date: "3/25/2024",
    total: "₦423,369.55",
    quantity: 120,
    returned: 2,
    status: "Approved",
  },
  {
    orderNo: "RHPO-1651244891",
    type: "Trade",
    date: "4/19/2024",
    total: "₦386,934.91",
    quantity: 67,
    returned: 5,
    status: "Approved",
  },
  {
    orderNo: "RHPO-1651245124",
    type: "Trade",
    date: "5/20/2024",
    total: "₦952,638.63",
    quantity: 84,
    returned: 2,
    status: "Approved",
  },
];

export default function SupplierDashboard() {
  const [selected, setSelected] = useState(0);
  const [search, setSearch] = useState("");
   const router = useRouter();

  return (
    <div className="py-[0.100rem]">
      <div className="py-2 px-6 bg-white shadow-md flex justify-between items-center content-center">
        <button onClick={()=>router.push('/dashboard/procurement')} className="flex items-center text-gray-700 hover:text-black">
          <ChevronLeftIcon className="w-5 h-4" />
          <span className="ml-2 text-xs font-medium" >Back</span>
        </button>
        <p className="uppercase text-xs font-medium text-gray-700">Supplier's Dashboard</p>
        <div className="flex gap-2">
          <button className="flex gap-1  p-2 rounded-md text-xs text-gray-100 bg-blue-600 items-center">
            <Pen size={20} />
            <span className="">Edit</span>
          </button>
          <button className="flex gap-1  p-2 rounded-md text-xs text-gray-800 bg-gray-200 items-center">
            <Ellipsis size={20} />
          </button>
        </div>
      </div>
      <div className="">
        {/* Back Navigation */}

        {/* Supplier Info */}
        <div className="mx-6 mb-6 bg-transparent py-4 flex justify-start gap-16 text-blue-950 w-2/3 items-center">
          <Image
            src={supplierInfo.logo}
            alt="Logo"
            className="w-12 h-12 rounded-lg border"
          />
          <div className="flex flex-col items-start space-x-1 gap-2">
            <p className="text-xs font-medium">Supplier Info</p>
            <div className="">
              <h2 className="text-xs font-medium flex items-center gap-1">
                <Store className="inline-flex text-gray-400" size={15} />
                <span>{supplierInfo.name}</span>
              </h2>
              <h2 className="text-xs font-medium flex items-center gap-1">
                <MapPin className="inline-flex text-gray-400" size={15} />
                <span>{supplierInfo.address}</span>
              </h2>
              {/* <p className="text-sm text-gray-500">{supplierInfo.address}</p> */}
            </div>
          </div>
          <div className="flex flex-col items-start space-x-1 gap-2">
            <p className="text-xs font-medium">Contact Info</p>

            <div className="">
              <h2 className="text-xs font-medium flex items-center gap-1">
                <Mail className="inline-flex text-gray-400" size={15} />
                <span>{supplierInfo.contactEmail}</span>
              </h2>
              <h2 className="text-xs  flex items-center gap-1">
                <Smartphone className="inline-flex text-gray-400" size={15} />
                <span>{supplierInfo.contactPhone}</span>
              </h2>
              {/* <p className="text-sm text-gray-500">{supplierInfo.contactPhone}</p> */}
            </div>
          </div>
          <div className="flex flex-col items-start space-x-1 gap-2">
            <p className="text-xs font-medium">Bank Info</p>

            <div className="">
              <h2 className="text-xs font-medium flex items-center gap-1">
                <Store className="inline-flex text-gray-400" size={15} />
                <span>{supplierInfo.bankName}</span>
              </h2>
              <h2 className="text-xs font-medium flex items-center gap-1">
                <Smartphone className="inline-flex text-gray-400" size={15} />
                <span>-----</span>
              </h2>
              {/* <p className="text-sm text-gray-500">{supplierInfo.bankName}</p> */}
            </div>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="mx-6 mb-6 border-[1.5px] border-gray-200 rounded-md p-2 -mt-2 border-solid max-w-screen-md w-auto">
          <div className="grid grid-cols-5">
            {summaryMetrics.map((metric, index) => (
              <div
                key={index}
                className={`${
                  index == 4 ? "" : " border-r-[1.5px]"
                } " bg-transparent border-solid p-2 text-center"`}
              >
                <div className="flex gap-2 justify-between">
                  <p className="text-gray-500 text-xs">{metric.title}</p>
                  {metric.count !== null && (
                    <span className="text-xs font-medium bg-gray-200 text-gray-700 px-2 py-1 rounded-md">
                      {metric.count}
                    </span>
                  )}
                </div>
                <p className="text-xs text-start font-semibold">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mx-6 flex space-x-5 ">
          {["Purchase order", "Invoices", "Payment"].map((tab, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`px-4 py-2 outline-none ring-0 -mb-[0.100rem] relative z-20 text-xs cursor-pointer ${
                selected == index
                  ? "border-t-[1px] border-x-[1px] rounded-t-lg bg-white border-gray-500 font-semibold text-gray-700"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="p-4 bg-white border-t-[1.5px]">
          <div className="flex justify-between items-center mb-4">
            <p className="uppercase text-xs ">Purchase Order</p>

            <div className="flex space-x-2">
              <button
                className="flex items-center gap-2 justify-center w-max px-2.5 py-0.5 text-xs font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
              >
                <span>Page 1/6</span>
                <ChevronDown size={15} />
              </button>
              <div className="relative">
                <Search
                  size={15}
                  className="absolute top-[0.600rem] left-4 text-gray-500"
                />

                <input
                  type="search"
                  className=" w-44 h-8 pl-12 py-1 rounded-md ring-2 ring-gray-200 text-gray-800 focus:outline-none"
                  placeholder="Search"
                />
              </div>
              <button className="flex items-center hover:bg-gray-200 font-medium text-xs space-x-1 border-2 border-gray-300 px-3 rounded-md">
                <ListFilter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="flex items-center hover:bg-gray-200 font-medium text-xs space-x-1 border-2 border-gray-300 px-3 rounded-md">
                <ArrowUpDown className="w-4 h-4" />
                <span>Sort by</span>
              </button>
              <button className="flex gap-1  px-2 rounded-md text-xs text-blue-800 bg-blue-100 items-center">
                <ChartNoAxesGantt size={20} />{" "}
              </button>
              <button className="flex gap-1  px-2 rounded-md text-xs text-gray-800 bg-gray-200 items-center">
                <LayoutGrid size={15} />{" "}
              </button>
            </div>
          </div>
          <table className="w-full table-auto border-separate border-spacing-0 text-xs max-h-20 overflow-y-auto">
            <thead>
              <tr className="text-left text-gray-700 font-thin border border-gray-400">
                <th className="px-2 py-2 border border-gray-300 rounded-tl-lg">
                  Order No
                </th>
                <th className="px-2 border border-gray-300">
                  Supplier's Name{" "}
                  <ChevronsUpDownIcon
                    className="inline-flex cursor-all-scroll"
                    size={10}
                  />
                </th>
                <th className="px-2 border border-gray-300">
                  Type{" "}
                  <ChevronsUpDownIcon
                    className="inline-flex cursor-all-"
                    size={10}
                  />
                </th>
                <th className="px-2 border border-gray-300">
                  Date{" "}
                  <ChevronsUpDownIcon
                    className="inline-flex cursor-all-"
                    size={10}
                  />
                </th>
                <th className="px-2 border border-gray-300">
                  Total{" "}
                  <ChevronsUpDownIcon
                    className="inline-flex cursor-all-"
                    size={10}
                  />
                </th>
                <th className="px-2 border border-gray-300">Quantity</th>
                <th className="px-2 border border-gray-300">
                  Quantity Returned
                </th>
                <th className="px-2 border border-gray-300">
                  Status
                  <ChevronsUpDownIcon
                    className="inline-flex cursor-all-scroll"
                    size={10}
                  />
                </th>
                <th className="px-2 border border-gray-300 rounded-tr-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {purchaseOrders.map((order, index) => (
                <tr
                  key={index}
                  className={`"text-left" ${index == 0 ? "bg-gray-100" : ""} `}
                >
                  <td className={`"border-l px-2 py-3 border-y border-gray-300"`}>
                    {order.orderNo}
                  </td>
                  <td className="border-y px-2 border-gray-300">
                    Fidson Healthcare
                  </td>
                  <td className="border-y px-2 border-gray-300">
                    {order.type}
                  </td>
                  <td className="border-y px-2  border-gray-300">
                    {order.date}
                  </td>
                  <td className="border-y px-2  border-gray-300">
                    {order.total}
                  </td>
                  <td className="border-y px-2  border-gray-300">
                    {order.quantity}
                  </td>
                  <td className="border-y px-2  border-gray-300">
                    {order.returned}
                  </td>
                  <td className="border-y px-2 border-gray-300 text-xs font-medium text-green-900">
                    {" "}
                    <span className="rounded-lg p-1.5 bg-green-100">
                      {order.status}
                    </span>
                  </td>
                  <td className="border-y border-r px-2  border-gray-300" >
                    {" "}
                    <button className="flex gap-1  p-2 rounded-md text-xs text-gray-800 items-center">
                      <EllipsisVertical size={15} />{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
