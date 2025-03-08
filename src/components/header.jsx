import React from "react";
import "font-awesome/css/font-awesome.min.css";

function Header() {
  return (
    <>
      <div className="w-full h-14">
        <div className="flex items-center justify-between p-4 border-b-[1px] border-x-gray-200">
          <i className="fas fa-search text-xl"></i>
          <img
            className="w-[40%] h-[25%]"
            src="./images/download.svg"
            alt="icon"
          />
          <i className="fas fa-location-dot text-xl"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
