import React, { useState } from "react";

export function HeaderDesktop__NavItem({ title, icon, isRed = false, children }) {
  const [showList, setShowList] = useState(false);

  return (
    <li
      className="relative h-full"
      onMouseEnter={() => setShowList(true)}
      onMouseLeave={() => setShowList(false)}
    >
      <div
        className={`flex items-center gap-1 cursor-pointer ${
          isRed ? "text-red-500" : "hover:text-black"
        }`}
      >
        {icon && <i className={`${icon} text-xs`}></i>}
        <span>{title}</span>
      </div>
      {showList && (
        <div className="absolute right-0 top-full w-max min-w-full z-50 bg-white shadow-lg border-t border-gray-200">
          {children}
        </div>
      )}
    </li>
  );
}
