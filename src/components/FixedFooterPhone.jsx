import { useState } from "react";

const navItems = [
  { icon: "./images/Home.svg", label: "خانه" },
  { icon: "./images/Categories.svg", label: "دسته بندی ها" },
  { icon: "./images/ShoppingCart.svg", label: "سبد خرید" },
  { icon: "./images/Profile.svg", label: "پروفایل" },
];

export default function FixedFooterPhone({ className }) {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first item (Home)

  return (
    <div className={`${className}`}>
      <div className="fixed bottom-0 w-full bg-white border-t py-3 flex justify-evenly items-center shadow-md z-40 h-[68px]">
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex flex-col items-center text-xs cursor-pointer transition-colors duration-200 
              ${
                activeIndex === index
                  ? "text-black border-t-2 border-black"
                  : "text-gray-500 border-t-2 border-transparent"
              }
              pt-2 w-full justify-center`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`w-5 h-5 mb-1 transition-all duration-200 ${
                activeIndex === index ? "grayscale-0" : "grayscale"
              }`}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
