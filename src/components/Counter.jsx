import React from "react";

function Counter() {
  return (
    <div>
      <div className="counter flex items-center text-2xl justify-start">
        Quantity
        <div className="ml-5 shadow-md flex">
        <div className="bg-[#007AFF] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
          -
        </div>
        <div className="w-8 flex items-center justify-center border-[1px] border-[#007AFF]">
          1
        </div>
        <div className="bg-[#007AFF] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
          +
        </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;