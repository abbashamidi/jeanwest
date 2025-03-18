import React from "react";
import { HeaderForDesktopItem } from "./HeaderForDesktopItem";
import { MardanehList } from "./MardanehList";

function HeaderDesktop({ className }) {
  return (
    <div className={`w-full border-b ${className}`}>
      <div className="h-14 w-[80%] mx-auto flex items-center justify-between px-2 py-3 mb-2">
        <img className="h-full py-2" src="./images/download.svg" alt="icon" />
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
        <ul className="flex items-center gap-7 grow text-sm">
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
                buttons={["صندل","کیف","کفش","چمدان"]}
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
          <HeaderForDesktopItem title={"فروش ویژه"} icon={"fas fa-ticket"} isRed={true}></HeaderForDesktopItem>
        </ul>

        <div className="bg-gray-100 rounded p-1 flex flex-row w-3/12">
          <input
            type="text"
            className="w-full text-sm focus:outline-none bg-transparent"
            placeholder="جستجو بین محصولات"
          />

          <i className="fa-solid fa-search text-gray-500 text-lg px-2"></i>
        </div>
      </div>
    </div>
  );
}

function ImageButton({ title, icon, src }) {
  return (
    <button className="cursor-pointer relative h-[300px] overflow-hidden aspect-square rounded border border-gray-300">
      <img
        className="aspect-square h-full object-cover hover:scale-110 transition-transform"
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

export default HeaderDesktop;
