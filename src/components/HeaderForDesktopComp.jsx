import React, { useEffect, useState, useRef } from "react";
import { HeaderForDesktopItem } from "./HeaderForDesktopItem";
import { MardanehList } from "./MardanehList";
import { SearchBar } from "./searchBar";

export default function HeaderDesktop() {
  const [hideList, setHideList] = useState(false); // این رو در خارج از useEffect نگه دارید
  const prevScrollY = useRef(0);
  const lastScrollDirection = useRef("down");
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollDiff = currentScroll - prevScrollY.current;

      // اگر اسکرول به مقدار مشخصی تغییر کرده باشه
      if (Math.abs(scrollDiff) > 10) {
        // از 10 پیکسل فاصله استفاده کردیم
        if (scrollDiff > 0 && currentScroll > 50) {
          // اسکرول به پایین و بیشتر از 50 پیکسل
          if (lastScrollDirection.current !== "down") {
            setHideList(true);
            lastScrollDirection.current = "down";
          }
        } else if (scrollDiff < 0) {
          // اسکرول به بالا
          if (lastScrollDirection.current !== "up") {
            setHideList(false);
            lastScrollDirection.current = "up";
          }
        }
      }

      prevScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // این اثر فقط یکبار در mount شدن اجرا میشه

  return (
    <div className={"sticky top-0 z-10 bg-white w-full border-b"}>
      <div className="h-14 w-[80%] mx-auto flex items-center justify-between px-2 py-2 mb-2">
        <img className="h-full py-2" src="./images/download.svg" alt="icon" />
        <div className="flex items-center gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-current"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 5.572c6.333-6.44 17.19 5.52 0 15.178C-5.19 11.092 5.667-.868 12 5.572Z"
            />
          </svg>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M15 8a3 3 0 1 1-6 0M4.636 5.629l-.757 12.5a2 2 0 0 0 1.996 2.121h12.25a2 2 0 0 0 1.997-2.121l-.758-12.5a2 2 0 0 0-1.996-1.879H6.632a2 2 0 0 0-1.996 1.879Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`w-4/5 mx-auto flex pb-1 items-center transition-all duration-300 ${
          hideList ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <ul className="flex items-center gap-7 grow text-xs">
          <HeaderForDesktopItem title={"جدیدترین"} icon={"fa-solid fa-fire"}>
            <div className="flex w-4/5 justify-evenly items-center mx-auto p-4 gap-4">
              <ImageButton
                title={"مردانه"}
                src={"/images/li-hover-divs/image1.jpg"}
              />
              <ImageButton
                title={"زنانه"}
                src={"/images/li-hover-divs/image2.jpg"}
              />
              <ImageButton
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
                buttons={[
                  "تاپ",
                  "شلوارک ",
                  "پیراهن",
                  "تیشرت و پولوشرت",
                  "کت و شلوار",
                  "پلیور و ژاکت ",
                  "کاپشن و پالتو",
                  "ست لباس",
                  "شلوار",
                ]}
              />
              <MardanehList
                title={"کیف و کفش مردانه"}
                icon={"fa-solid fa-shoe-prints"}
                buttons={["چمدان", "کفش", "کیف", "صندل"]}
              />
              <MardanehList
                title={"عطر و ادکلن مردانه"}
                icon={"far fa-clock"}
                buttons={["عطر و ادکلن"]}
              />
              <MardanehList
                title={"اکسسوری و زیورآلات مردانه"}
                icon={"far fa-clock"}
                buttons={[
                  "لباس زیر",
                  "چتر",
                  "دستکش و کلاه",
                  "ساعت",
                  "کمربند",
                  "جوراب",
                  "عینک",
                ]}
              />
              <MardanehList
                title={"همه محصولات مردانه"}
                icon={"fas fa-ticket"}
                buttons={[""]}
                hasImage={"./images/li-hover-divs/image1.jpg"}
              />
            </div>
          </HeaderForDesktopItem>
          <HeaderForDesktopItem title={"زنانه"}>
            <div className="flex items-start justify-evenly py-3">
              <MardanehList
                title={"پوشاک زنانه"}
                icon={"fa-solid fa-shirt"}
                buttons={[
                  "شلوارک",
                  "تاپ",
                  "کاپشن و پالتو",
                  "کت و شلوار",
                  "شلوار",
                  "شومیز و پیراهن",
                  "ست لباس",
                  "پلیور و ژاکت",
                  "دامن",
                  "تیشرت",
                  "مانتو و بلوز",
                  "لباس شنا",
                  "لباس زیر",
                ]}
              />
              <MardanehList
                title={"کیف و کفش زنانه"}
                icon={"fa-solid fa-shoe-prints"}
                buttons={["صندل", "کیف", "کفش", "چمدان"]}
              />
              <MardanehList
                title={"عطر و ادکلن زنانه"}
                icon={"far fa-clock"}
                buttons={["عطر و ادکلن زنانه"]}
              />
              <MardanehList
                title={"اکسسوری و زیورآلات"}
                icon={"far fa-clock"}
                buttons={[
                  "شال و روسری",
                  "جوراب",
                  "عینک",
                  "کمربند",
                  "دستکش و کلاه",
                  "چتر",
                  "ساعت",
                  "دفترچه",
                  "استرج",
                  "زیورآلات",
                  "دستبند",
                ]}
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
                buttons={[
                  "پیراهن",
                  "پلیور",
                  "تاپ",
                  "شلوار",
                  "ساپورت",
                  "لباس شنا",
                  "شلوارک",
                  "بلوز",
                  "کت و شلوار",
                  "کاپشن و پالتو",
                  "تیشرت",
                  "لباس زیر",
                  "ست لباس",
                ]}
              />
              <MardanehList
                title={"پوشاک دخترانه"}
                icon={"fa-solid fa-shoe-prints"}
                buttons={[
                  "پلیور",
                  "لباس شنا",
                  "کت و شلوار",
                  "تاپ",
                  "شلوارک",
                  "ست لباس",
                  "لباس زیر",
                  "شلوار",
                  "کاپشن و پالتو",
                  "دامن",
                  "ساپورت",
                  "شال و روسری",
                  "تیشرت",
                  "بلوز",
                  "شومیز و پیراهن",
                  "مانتو",
                  "پلیور و ژاکت",
                ]}
              />
              <MardanehList
                title={"کیف و کفش بچه گانه"}
                icon={"far fa-clock"}
                buttons={["صندل", "کیف", "کفش", "چمدان"]}
              />
              <MardanehList
                title={"اکسسوری و زیورآلات بچه گانه"}
                icon={"far fa-clock"}
                buttons={[
                  "اسباب بازی",
                  "کمربند",
                  "جوراب",
                  "چتبر",
                  "دستکش و کلاه",
                  "عینک",
                  "ساعت",
                  "استرج",
                  "دستبند",
                  "عروسک",
                ]}
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
              <ImageButton title={"خرید"} src={"/images/ListPics/pic1.jpg"} />
              <ImageButton title={"خرید"} src={"/images/ListPics/pic2.jpg"} />
              <ImageButton title={"خرید"} src={"/images/ListPics/pic3.jpg"} />
            </div>
          </HeaderForDesktopItem>
        </ul>
        <SearchBar />
      </div>
    </div>
  );

  function ImageButton({ title, icon, src }) {
    return (
      <button className="cursor-pointer relative h-[300px] overflow-hidden w-[420px] rounded border border-gray-300">
        <img
          className="aspect-square h-full object-cover hover:scale-110 transition-transform w-full"
          src={src}
          alt="photo"
        />
        <div className="text-white absolute bottom-3 left-4 bg-black/50 px-4 py-1 rounded-full">
          {title}
          <i className={`${icon ?? "fa-solid fa-door-open"} ps-2`}></i>
        </div>
      </button>
    );
  }
}
