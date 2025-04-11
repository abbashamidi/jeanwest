import { useState } from "react";

export function HeaderForDesktopItem({ title, icon, children, isRed }) {
  
  const [textColor, setTextColor] = useState("text-black");

  const handleHover = () => {
    setTextColor(textColor === "text-black" ? "text-red-600" : "text-black");
  };
  return (
    <li>
      <button
        className={`hover:text-red-600 cursor-pointer flex items-center peer ${textColor}`}
      >
        <span
          className={`text-xs flex items-center ${isRed ? "text-red-600" : ""}`}
        >
          {icon ? <i className={`${icon} inline-block px-1`}></i> : null}
          {title}
        </span>
      </button>

      <div
        className="peer hidden peer-hover:block hover:block absolute inset-x-0 z-20 pt-[15px]"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="bg-white">{children}</div>
      </div>

      <div className="hidden peer-hover:block absolute inset-x-0 mt-[17px] h-screen bg-black/30 backdrop:blur-sm z-10"></div>
    </li>
  );
}
