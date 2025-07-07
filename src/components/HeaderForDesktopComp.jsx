import React, { useEffect, useState, useRef } from "react";
import { HeaderForDesktopItem } from "./HeaderForDesktopItem";
import { MardanehList } from "./MardanehList";
import { SearchBar } from "./searchBar";
import HeaderDesktop__ImageButton from "./HeaderDesktop__ImageButton";
import { useHeaderForDesktopScrollEffect } from "./useHeaderForDesktopScrollEffect";
import {
  mensClothingButtons,
  mensBagsShoesButtons,
  mensPerfumeButtons,
  mensAccessoriesButtons,
  womensClothingButtons,
  womensBagsShoesButtons,
  womensPerfumeButtons,
  womensAccessoriesButtons,
  kidsBoysClothingButtons,
  kidsGirlsClothingButtons,
  kidsBagsShoesButtons,
  kidsAccessoriesButtons,
} from "./ButtonsForDesktop";
import HeaderForDesktopIconButtons from "./HeaderForDesktopIconButtons";

export default function HeaderDesktop({ className }) {
  const hideList = useHeaderForDesktopScrollEffect(50, 10);

  return (
    <div className={`sticky top-0 z-10 bg-white w-full border-b ${className}`}>
      <div className="h-14 w-[80%] mx-auto flex items-center justify-between px-2 py-2 mb-2">
        <img className="h-full py-2" src="./images/download.svg" alt="icon" />
        <HeaderForDesktopIconButtons />
      </div>

      <div
        className={`w-4/5 mx-auto flex pb-1 items-center transition-all duration-300 ${
          hideList ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <ul className="flex items-center gap-7 grow text-xs">
          <HeaderForDesktopItem title={"جدیدترین"} icon={"fa-solid fa-fire"}>
            <div className="flex w-4/5 justify-evenly items-center mx-auto p-4 gap-4">
              <HeaderDesktop__ImageButton
                title={"مردانه"}
                src={"/images/li-hover-divs/image1.jpg"}
              />
              <HeaderDesktop__ImageButton
                title={"زنانه"}
                src={"/images/li-hover-divs/image2.jpg"}
              />
              <HeaderDesktop__ImageButton
                title={"بچگانه"}
                src={"/images/li-hover-divs/image3.png"}
              />
            </div>
          </HeaderForDesktopItem>
          <HeaderForDesktopItem title={"مردانه"}>
            <div className="flex items-start justify-evenly py-3">
              <MardanehList
                title={"پوشاک مردانه"}
                icon={"fa-solid fa-shirt"}
                buttons={mensClothingButtons}
              />
              <MardanehList
                title={"کیف و کفش مردانه"}
                icon={"fa-solid fa-shoe-prints"}
                buttons={mensBagsShoesButtons}
              />
              <MardanehList
                title={"عطر و ادکلن مردانه"}
                icon={"far fa-clock"}
                buttons={mensPerfumeButtons}
              />
              <MardanehList
                title={"اکسسوری و زیورآلات مردانه"}
                icon={"far fa-clock"}
                buttons={mensAccessoriesButtons}
              />
              <MardanehList
                title={"همه محصولات مردانه"}
                icon={"fas fa-ticket"}
                buttons={[""]} // خالی میمونه طبق گفته شما
                hasImage={"./images/li-hover-divs/image1.jpg"}
              />
            </div>
          </HeaderForDesktopItem>
          <HeaderForDesktopItem title={"زنانه"}>
            <div className="flex items-start justify-evenly py-3">
              <MardanehList
                title={"پوشاک زنانه"}
                icon={"fa-solid fa-shirt"}
                buttons={womensClothingButtons}
              />
              <MardanehList
                title={"کیف و کفش زنانه"}
                icon={"fa-solid fa-shoe-prints"}
                buttons={womensBagsShoesButtons}
              />
              <MardanehList
                title={"عطر و ادکلن زنانه"}
                icon={"far fa-clock"}
                buttons={womensPerfumeButtons}
              />
              <MardanehList
                title={"اکسسوری و زیورآلات"}
                icon={"far fa-clock"}
                buttons={womensAccessoriesButtons}
              />
              <MardanehList
                title={"مشاهده همه محصولات"}
                icon={"fas fa-ticket"}
                buttons={[""]}
                hasImage={"./images/li-hover-divs/image2.jpg"}
              />
            </div>
          </HeaderForDesktopItem>
          <HeaderForDesktopItem title={"بچه گانه"}>
            <div className="flex items-start justify-evenly py-3">
              <MardanehList
                title={"پوشاک پسرانه"}
                icon={"fa-solid fa-shirt"}
                buttons={kidsBoysClothingButtons}
              />
              <MardanehList
                title={"پوشاک دخترانه"}
                icon={"fa-solid fa-shoe-prints"}
                buttons={kidsGirlsClothingButtons}
              />
              <MardanehList
                title={"کیف و کفش بچه گانه"}
                icon={"far fa-clock"}
                buttons={kidsBagsShoesButtons}
              />
              <MardanehList
                title={"اکسسوری و زیورآلات بچه گانه"}
                icon={"far fa-clock"}
                buttons={kidsAccessoriesButtons}
              />
              <MardanehList
                title={"همه محصولات مردانه"}
                icon={"fas fa-ticket"}
                buttons={[""]}
                hasImage={"./images/li-hover-divs/image3.png"}
              />
            </div>
          </HeaderForDesktopItem>

          <span className="text-gray-400">|</span>
          <HeaderForDesktopItem
            title={"فروش ویژه"}
            icon={"fas fa-ticket"}
            isRed={true}
          >
            <div className="flex w-4/5 justify-evenly items-center mx-auto p-4 gap-4">
              <HeaderDesktop__ImageButton
                title={"خرید"}
                src={"/images/ListPics/pic1.jpg"}
              />
              <HeaderDesktop__ImageButton
                title={"خرید"}
                src={"/images/ListPics/pic2.jpg"}
              />
              <HeaderDesktop__ImageButton
                title={"خرید"}
                src={"/images/ListPics/pic3.jpg"}
              />
            </div>
          </HeaderForDesktopItem>
        </ul>
        <SearchBar />
      </div>
    </div>
  );
}
