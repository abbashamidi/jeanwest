import React from "react";

export default function ShoppingCardHeader() {
  return (
    <div className="flex items-center gap-1.5 pb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        className="w-6 h-6"
      >
        <g stroke="currentColor">
          <path d="M1.458 7.5C5.654 7.5 7.5 5.654 7.5 1.458 7.5 5.654 9.346 7.5 13.542 7.5 9.346 7.5 7.5 9.346 7.5 13.542 7.5 9.346 5.654 7.5 1.458 7.5ZM10.625 14.583c2.749 0 3.958-1.21 3.958-3.958 0 2.749 1.21 3.958 3.959 3.958-2.75 0-3.959 1.21-3.959 3.959 0-2.75-1.21-3.959-3.958-3.959Z"></path>
        </g>
      </svg>
      <h3 className="font-bold ml-6">پربازدیدترین محصولات</h3>
    </div>
  );
}

