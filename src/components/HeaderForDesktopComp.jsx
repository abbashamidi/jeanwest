import React from "react";
import { HeaderForDesktopItem } from "./HeaderForDesktopItem";

function HeaderDesktop() {
  return (
    <div className="w-full flex-col border-b-[1px] border-x-gray-200 relative">
      <div className="w-[80%] mx-auto flex items-center justify-between px-2 py-3 mb-2">
        <img
          className="w-[12.5%] h-[9.5%]"
          src="./images/download.svg"
          alt="icon"
        />
        <div className="flex items-center gap-6">
          <button>
            <img src="./images/svg1.svg" alt="Heart-icon" className="w-5 h-5" />
          </button>
          <button>
            <img
              src="./images/svg2.svg"
              alt="Shoppingbag-icon"
              className="w-5 h-5"
            />
          </button>
          <button>
            <img src="./images/svg3.svg" alt="User-icon" className="w-7 h-7" />
          </button>
          <button>
            <img src="./images/svg4.svg" alt="Map-icon" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="w-4/5 mx-auto flex items-center py-2">
        <ul className="flex items-center gap-7 grow">
          <HeaderForDesktopItem title={"جدیدترین"} icon={"fa-solid fa-fire"}>
            <h1>mahdi</h1>
          </HeaderForDesktopItem>
        </ul>

        <div className="bg-gray-100 rounded p-1 flex flex-row w-3/12">
          <input
            type="text"
            className="grow text-sm focus:outline-none bg-transparent"
            placeholder="جستجو بین محصولات"
          />

          <i className="fa-solid fa-search text-gray-500 text-lg px-2"></i>
        </div>
      </div>
    </div>
  );
}

export default HeaderDesktop;
