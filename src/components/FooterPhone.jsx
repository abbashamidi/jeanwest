import { useState } from "react";
import BottomSlideModal from "./‌BottomSlideModal";
import Details from "./Details";
export default function FooterPhone({ className }) {
  const [showInfoBox, setShowInfoBox] = useState(false);

  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-3 w-[90%] mx-auto shadow-xl border rounded-xl text-xs bg-white py-2 mb-20">
        <div className="flex justify-between items-start px-4 py-3">
          <div className="space-y-3">
            <div className="flex items-center gap-1">
              <img
                src="./src/assets/Call.svg"
                alt="Phone Call"
                className="w-4 h-4"
              />
              <p className="text-[10px]">فروشگاه اینترنتی جین وست</p>
            </div>
            <p className="text-gray-500 text-[10px]">
              ساعات کاری، هر روز هفته به صورت شبانه‌روزی
            </p>
          </div>
          <div>
            <span className="inline-flex items-center gap-1 bg-gray-100 py-1 px-2 rounded-lg border text-gray-700">
              ۰۲۱ـ۹۱۰۱۵۱۰۵
              <img
                src="./src/assets/Arrow.svg"
                alt="Arrow SVG"
                className="w-4 h-4"
              />
            </span>
          </div>
        </div>

        <div className="flex justify-between items-start px-4 py-3">
          <div className="space-y-3">
            <div className="flex items-center gap-1">
              <img
                src="./src/assets/Call.svg"
                alt="Phone Call"
                className="w-4 h-4"
              />
              <p className="text-[10px]">فروشگاه زنجیره‌ای جین وست</p>
            </div>
            <p className="text-gray-500 text-[10px]">
              هر روز هفته به غیر از روزهای تعطیل از ساعت ۱۰:۱۵ الی ۲۲:۳۰
            </p>
          </div>
          <div>
            <span className="inline-flex items-center gap-1 bg-gray-100 py-1 px-2 rounded-lg border text-gray-700">
              ۰۲۱ـ۴۵۱۲۴
              <img
                src="./src/assets/Arrow.svg"
                alt="Arrow SVG"
                className="w-4 h-4"
              />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 py-4 px-2">
          <div className="flex justify-between w-full text-center">
            {[
              { img: "img1.png", text: "تعویض آنلاین" },
              { img: "img2.png", text: "ارسال ۲ ساعته" },
              { img: "img3.webp", text: "ضمانت بازگشت" },
              { img: "img4.png", text: "ضمانت اصالت" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center space-y-1 w-1/4"
              >
                <img
                  src={`./images/DetailsImages/${item.img}`}
                  alt={item.text}
                  className="w-10 h-10"
                />
                <span className="text-[10px]">{item.text}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowInfoBox(true)} // <-- Add this line
            className="w-full bg-gray-200 hover:bg-gray-300 transition-colors px-4 py-2 rounded-md flex items-center justify-center gap-2 text-gray-800"
          >
            <img
              src="./images/Info.svg"
              alt="Info svg"
              className="w-3.5 h-3.5"
            />
            اطلاعات بیشتر
          </button>
        </div>
      </div>

      <BottomSlideModal
        isOpen={showInfoBox}
        onClose={() => setShowInfoBox(false)}
      >
        <div className="overflow-y-auto max-h-[calc(100%-100px)] px-2">
          <Details className="flex-col !gap-2 !items-stretch" />
        </div>
      </BottomSlideModal>
    </div>
  );
}
