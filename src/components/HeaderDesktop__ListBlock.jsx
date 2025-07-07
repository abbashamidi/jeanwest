import React from "react";

export default function HeaderDesktop__ListBlock({
  title,
  icon,
  buttons,
  hasImage,
}) {
  return (
    <div className="flex flex-col gap-3 px-4 text-sm">
      <div className="flex items-center gap-2 font-bold mb-2">
        {icon && <i className={`${icon} text-gray-600`}></i>}
        <span>{title}</span>
      </div>

      {buttons && buttons.map((btnText, index) => (
        btnText.trim() !== "" && (
          <button key={index} className="text-right hover:text-red-600 transition-colors">
            {btnText}
          </button>
        )
      ))}

      {hasImage && (
        <img
          src={hasImage}
          alt={title}
          className="w-full max-w-[140px] object-cover mt-2 rounded"
        />
      )}
    </div>
  );
}
