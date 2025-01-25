import {

  ArrowBigLeft,
  ArrowLeft,
  ChevronDown,
  Grip,
} from "lucide-react";

export default function NavbarAuth() {
  return (
    <div className="bg-white py-2 px-4 shadow-md flex justify-start items-center">
      <div className="flex gap-4 items-center  justify-between w-[53%]">
        <ArrowLeft size={20} />
        {/* <h2 className="text-xl font-semibold">Atlas</h2>
         */}
          <img
            src="/atlas.png"
            alt="Logo"
            className="w-auto h-auto rounded-lg border"
          />

        {/* <button
          className="flex items-center gap-2 justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-gray-200 border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          type="button"
          aria-haspopup="true"
          aria-expanded="true"
          aria-controls="headlessui-menu-items-117"
        >
          <span>Branch</span>
          <ChevronDown size={15} />
        </button> */}
      </div>
      {/* <div className="flex items-center gap-4">
        <span className="relative inline-block">
          <Bell className="cursor-pointer rotate-45 text-gray-800" size={20} />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-[0.350rem] py-1 text-xs font-light leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-rose-700 rounded-full">
            9+
          </span>
        </span>
        <MessageSquareText className="cursor-pointer text-gray-800" size={20} />
        <User className="cursor-pointer text-gray-800" size={20} />
      </div> */}
    </div>
  );
}
