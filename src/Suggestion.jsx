import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

import useIsSmallScreen from "./Hooks/useIsSmallScreen";
import SuggestionItem from "./components/SuggestionItem";

export default function Suggestion() {
  const isSmall = useIsSmallScreen();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="mt-6 relative">
      <div className="flex justify-end gap-2 mb-4">
        <button
          ref={prevRef}
          className="swiper-button-prev-custom absolute right-16 top-1/2 -translate-y-1/2 p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="swiper-button-next-custom absolute left-16 top-1/2 -translate-y-1/2 p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="w-[81.5%] mx-auto mb-14 z-20">
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
          <h3 className="font-bold ml-6">پیشنهادات جین وست</h3>
        </div>

        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          spaceBetween={20}
          slidesPerGroup={2}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {/** اینجا همه‌ی SwiperSlideها بدون تغییر قابل استفاده هستند */}
          {[
            {
              src: "/images/SuggestionItems/image1.jpg",
              spancontentSmall: "پیراهن مردانه جینز",
              spancontentLarge: "پیراهن مردانه جینز کد ۳۴۵۶۸۱۹۰",
              price: "۱,۳۲۴,۷۵۰ تومان",
              detailSmall: "تخفیف با کد تخفیف",
              detailLarge: "بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف",
              percentage: "۴۷٪",
              prevPrice: "۲,۲۵۰,۹۰۰",
            },
            {
              src: "/images/SuggestionItems/image2.jpg",
              spancontentSmall: "پرفیوم جوتی جونز",
              spancontentLarge: "پرفیوم جوتی جونز کد ۱۴۱۴۲۵۶۷",
              price: "۴۹۹,۵۰۰ تومان",
              detailSmall: "اعمال تخفیف و فروش ویژه",
              detailLarge: "اعمال تخفیف و فروش ویژه",
              percentage: "۵۸٪",
              prevPrice: "۱,۱۱۰,۹۵۰",
            },
            {
              src: "/images/SuggestionItems/image3.jpg",
              spancontentSmall: "شومیز آستین بلند جین وست",
              spancontentLarge: "شومیز آستین بلند زنانه جین وست کد ۷۷۹۱۹۰۱۲",
              price: "۱,۸۵۴,۰۰۰ تومان",
              detailSmall: "اعمال تخفیف و فروش ویژه",
              detailLarge: "اعمال تخفیف و فروش ویژه",
              percentage: "۴۷٪",
              prevPrice: "۳,۱۰۰,۰۰۰",
            },
            {
              src: "/images/SuggestionItems/image4.jpg",
              spancontentSmall: "شلوار اسلش مردانه",
              spancontentLarge: "شلوار اسلش مردانه جین وست کد ۲۰۲۰۳۴۵۱",
              price: "۱,۵۸۹,۰۰۰ تومان",
              detailSmall: "اعمال تخفیف و فروش ویژه",
              detailLarge: "اعمال تخفیف و فروش ویژه",
              percentage: "۲۰٪",
              prevPrice: "۱,۸۹۰,۰۰۰",
            },
            {
              src: "/images/SuggestionItems/image5.jpg",
              spancontentSmall: "ست آستین بلند زنانه",
              spancontentLarge: "ست آستین بلند و جلیقه زنانه کد ...",
              price: "۴۹۹,۵۰۰ تومان",
              detailSmall: "تخفیف با کد تخفیف",
              detailLarge: "بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف",
              percentage: "‍۱۰٪",
              prevPrice: "۶۰۰,۰۰",
            },
            {
              src: "/images/SuggestionItems/image6.jpg",
              spancontentSmall: "نیم بوت زنانه جوتی جونز",
              spancontentLarge: "نیم بوت زنانه جوتی جونز کد ۹۰۹۰۲۱۳۴",
              price: "۳,۳۷۹,۵۰۰ تومان",
              detailSmall: "تخفیف در سبد خرید",
              detailLarge: "تخفیف فقط با افزودن به سبد خرید",
              percentage: "۱۰٪",
              prevPrice: "۳,۴۵۰,۹۰۰",
            },
            {
              src: "/images/SuggestionItems/image7.jpg",
              spancontentSmall: "اد پرفیوم مردانه جوتی",
              spancontentLarge: "اد پرفیوم مردانه جوتی جونز کد ۷۶۵۹۱۲۵۶",
              price: "۱,۵۹۹,۵۰۰ تومان",
              detailSmall: "تخفیف در سبد خرید",
              detailLarge: "تخفیف فقط با افزودن به سبد خرید",
              percentage: "۴۷٪",
              prevPrice: "۲,۲۵۰,۰۰۰",
            },
            {
              src: "/images/SuggestionItems/image8.jpg",
              spancontentSmall: "دامن زنانه جوتی جونز",
              spancontentLarge: "دامن زنانه جوتی جونز کد sw۱۲۳۹۲۰",
              price: "۵۰۹,۶۶۰ تومان",
              detailSmall: "تخفیف در سبد خرید",
              detailLarge: "تخفیف فقط با افزودن به سبد خرید",
              percentage: "۱۲٪",
              prevPrice: "۸۲۳,۰۰۰",
            },
            {
              src: "/images/SuggestionItems/image9.jpg",
              spancontentSmall: "پیراهن مردانه جوتی جونز",
              spancontentLarge: "پیراهن مردانه جوتی جونز Jootie Jones کد ...",
              price: "۱,۸۵۴,۴۷۰ تومان",
              detailSmall: "تخفیف در سبد خرید",
              detailLarge: "تخفیف فقط با افزودن به سبد خرید",
              percentage: "۴۷٪",
              prevPrice: "۳,۰۰۰,۹۵۰",
            },
            {
              src: "/images/SuggestionItems/image10.jpg",
              spancontentSmall: "کاپشن مردانه بالنو",
              spancontentLarge: "کاپشن مردانه بالنو Baleno کد ...",
              price: "۴,۵۰۴,۷۷۰ تومان",
              detailSmall: "تخفیف در سبد خرید",
              detailLarge: "تخفیف فقط با افزودن به سبد خرید",
              percentage: "۴۷٪",
              prevPrice: "۷,۱۲۱,۶۰۰",
            },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <SuggestionItem
                src={item.src}
                spancontent={
                  isSmall ? item.spancontentSmall : item.spancontentLarge
                }
                spancontent1={item.price}
                spancontent2={isSmall ? item.detailSmall : item.detailLarge}
                percentage={item.percentage}
                previousPrice={item.prevPrice}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
