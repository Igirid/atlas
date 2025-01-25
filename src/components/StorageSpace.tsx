export default function StorageSpace() {
    return (
      <div className="flex flex-col items-center space-y-4 w-full">
        {/* Outer Doughnut Container */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Full Gray Base (Free Space) */}
          <div className="w-full h-full rounded-full border-[12px] border-gray-200"></div>
  
          {/* Blue Arc (Used Space) */}
          <div
            className="absolute w-full h-full rounded-full border-[12px] border-blue-500"
            style={{
              clipPath: "polygon(50% 50%, 15% 10%, 85% 0%, 100% 40%, 85% 100%, 50% 100%)",
            }}
          ></div>
  
          {/* Inner White Circle (Doughnut Effect) */}
          <div className="absolute w-28 h-28 bg-white rounded-full flex items-center justify-center">
            {/* Centered Percentage */}
            <span className="text-2xl font-bold text-black">70%</span>
          </div>
        </div>
  
        {/* Legend */}
        <div className="flex space-x-4 text-sm w-full">
          <div className="text-balance flex items-center space-x-1">
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            <span>Used Space</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
            <span>Free Space</span>
          </div>
        </div>
      </div>
    );
  }
  