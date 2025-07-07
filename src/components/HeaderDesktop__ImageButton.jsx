import React from "react";

export default function HeaderDesktop__ImageButton({ title, icon, src }) {
  return (
    <button className="cursor-pointer relative h-[300px] overflow-hidden w-[420px] rounded border border-gray-300">
      <img
        className="aspect-square h-full object-cover hover:scale-110 transition-transform w-full"
        src={src}
        alt={title}
      />
      <div className="text-white absolute bottom-3 left-4 bg-black/50 px-4 py-1 rounded-full">
        {title}
        <i className={`${icon ?? "fa-solid fa-door-open"} ps-2`}></i>
      </div>
    </button>
  );
}
