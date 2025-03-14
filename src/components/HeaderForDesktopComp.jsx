import React from "react";
import { HeaderForDesktopItem } from "./HeaderForDesktopItem";

function HeaderDesktop() {
  return (
    <>
      <div className="w-full flex-col border-b-[1px] border-x-gray-200 relative">
        <div className="w-[80%] mx-auto flex items-center justify-between px-2 py-3 mb-2">
          <img
            className="w-[12.5%] h-[9.5%]"
            src="./images/download.svg"
            alt="icon"
          />
          <div className="flex items-center gap-6">
            <button>
              <img
                src="./images/svg1.svg"
                alt="Heart-icon"
                className="w-5 h-5"
              />
            </button>
            <button>
              <img
                src="./images/svg2.svg"
                alt="Shoppingbag-icon"
                className="w-5 h-5"
              />
            </button>
            <button>
              <img
                src="./images/svg3.svg"
                alt="User-icon"
                className="w-7 h-7"
              />
            </button>
            <button>
              <img src="./images/svg4.svg" alt="Map-icon" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="w-[80%] mx-auto flex items-center justify-between px-2">
          <ul className="flex items-center gap-7">
            <HeaderForDesktopItem />
            <li className="group cursor-pointer">
              <p className="hover:text-red-600"> مردانه</p>
              <div className="absolute bg-slate-400 flex flex-col hidden group-hover:block w-[100%] right-0 top-[15.3vh]">
                <div>Abbas hamidi</div>
                <div>Abbas hamidi</div>
                <div>Abbas hamidi</div>
                <div>Abbas hamidi</div>
                <div>Abbas hamidi</div>
              </div>
            </li>
            <li className="cursor-pointer">زنانه</li>
            <li className="cursor-pointer">بچه گانه</li>
            <li className="text-gray-200 cursor-pointer"> | </li>
            <li className="text-red-600 cursor-pointer">
              <p className="flex items-center gap-1">
                <i class="fa-solid fa-basket-shopping"></i>
                فروش ویژه
              </p>
            </li>
          </ul>
          <div className="relative w-[28%]">
            <input
              type="text"
              className="bg-gray-100 w-full h-[40px] rounded text-sm p-2 pr-8 focus:outline-none"
              placeholder="جستجو بین محصولات"
            />
            <i className="fa-solid fa-search absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderDesktop;
