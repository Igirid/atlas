export default function ShelfLife() {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <div className="w-full h-full rounded-full border-[10px] border-gray-200"></div>
  
       
          <div
            className="absolute w-full h-full rounded-full border-[10px] border-blue-500"
            style={{ clipPath: "polygon(50% 50%, 10% 0%, 90% 0%, 100% 40%)" }}
          ></div>
  

          <div className="absolute w-28 h-28 flex items-center justify-center">
   
            <div className="w-full h-full rounded-full border-[8px] border-gray-200"></div>
  
          
            <div
              className="absolute w-full h-full rounded-full border-[8px] border-lime-500"
              style={{ clipPath: "polygon(50% 50%, 70% 0%, 100% 40%, 50% 100%)" }}
            ></div>
  
     
            <div className="absolute w-12 h-12 bg-white rounded-full"></div>
          </div>
        </div>
  
        {/* Legend */}
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            <span>Less than 18 Months</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-lime-500 rounded-full"></span>
            <span>More than 18 Months</span>
          </div>
        </div>
      </div>
    );
  }
  