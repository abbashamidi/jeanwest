import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useIsSmallScreen from "./Hooks/useIsSmallScreen";

import SuggestionItem from "./components/SuggestionItem";

export default function Suggestion() {
  const isSmall = useIsSmallScreen();
  return (
    <div>
      <div className="w-[81.5%] mx-auto mb-14">
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
          navigation={true}
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
          <SwiperSlide>
            <SuggestionItem
              src={"/images/SuggestionItems/image1.jpg"}
              spancontent={
                isSmall
                  ? "پیراهن مردانه جینز"
                  : "پیراهن مردانه جینز کد ۳۴۵۶۸۱۹۰"
              }
              spancontent1={"۱,۳۲۴,۷۵۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف با کد تخفیف"
                  : "بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف"
              }
              percentage={"۴۷٪"}
              previousPrice={"۲,۲۵۰,۹۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SuggestionItem
              src={"/images/SuggestionItems/image2.jpg"}
              spancontent={
                isSmall ? "پرفیوم جوتی جونز" : "پرفیوم جوتی جونز کد ۱۴۱۴۲۵۶۷"
              }
              spancontent1={"۴۹۹,۵۰۰ تومان"}
              spancontent2={"اعمال تخفیف و فروش ویژه"}
              percentage={"۵۸٪"}
              previousPrice={"۱,۱۱۰,۹۵۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SuggestionItem
              src={"/images/SuggestionItems/image3.jpg"}
              spancontent={
                isSmall
                  ? "شومیز آستین بلند جین وست"
                  : "شومیز آستین بلند زنانه جین وست کد ۷۷۹۱۹۰۱۲"
              }
              spancontent1={"۱,۸۵۴,۰۰۰ تومان"}
              spancontent2={"اعمال تخفیف و فروش ویژه"}
              percentage={"۴۷٪"}
              previousPrice={"۳,۱۰۰,۰۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SuggestionItem
              src={"/images/SuggestionItems/image4.jpg"}
              spancontent={
                isSmall
                  ? "شلوار اسلش مردانه"
                  : "شلوار اسلش مردانه جین وست کد ۲۰۲۰۳۴۵۱"
              }
              spancontent1={"۱,۵۸۹,۰۰۰ تومان"}
              spancontent2={"اعمال تخفیف و فروش ویژه"}
              percentage={"۲۰٪"}
              previousPrice={"۱,۸۹۰,۰۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SuggestionItem
              src={"/images/SuggestionItems/image5.jpg"}
              spancontent={
                isSmall
                  ? "ست آستین بلند زنانه"
                  : "ست آستین بلند و جلیقه زنانه کد ..."
              }
              spancontent1={"۴۹۹,۵۰۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف با کد تخفیف"
                  : "بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف"
              }
              percentage={"‍۱۰٪"}
              previousPrice={"۶۰۰,۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SuggestionItem
              src={"/images/SuggestionItems/image6.jpg"}
              spancontent={
                isSmall
                  ? "نیم بوت زنانه جوتی جونز"
                  : "نیم بوت زنانه جوتی جونز کد ۹۰۹۰۲۱۳۴"
              }
              spancontent1={"۳,۳۷۹,۵۰۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف در سبد خرید"
                  : "تخفیف فقط با افزودن به سبد خرید"
              }
              percentage={"۱۰٪"}
              previousPrice={"۳,۴۵۰,۹۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SuggestionItem
              src={"/images/SuggestionItems/image7.jpg"}
              spancontent={
                isSmall
                  ? "اد پرفیوم مردانه جوتی"
                  : "اد پرفیوم مردانه جوتی جونز کد ۷۶۵۹۱۲۵۶"
              }
              spancontent1={"۱,۵۹۹,۵۰۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف در سبد خرید"
                  : "تخفیف فقط با افزودن به سبد خرید"
              }
              percentage={"۴۷٪"}
              previousPrice={"۲,۲۵۰,۰۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SuggestionItem
              src={"/images/SuggestionItems/image8.jpg"}
              spancontent={
                isSmall
                  ? "دامن زنانه جوتی جونز"
                  : "دامن زنانه جوتی جونز کد sw۱۲۳۹۲۰"
              }
              spancontent1={"۵۰۹,۶۶۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف در سبد خرید"
                  : "تخفیف فقط با افزودن به سبد خرید"
              }
              percentage={"۱۲٪"}
              previousPrice={"۸۲۳,۰۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SuggestionItem
              src={"/images/SuggestionItems/image9.jpg"}
              spancontent={
                isSmall
                  ? "پیراهن مردانه جوتی جونز"
                  : "پیراهن مردانه جوتی جونز Jootie Jones کد ..."
              }
              spancontent1={"۱,۸۵۴,۴۷۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف در سبد خرید"
                  : "تخفیف فقط با افزودن به سبد خرید"
              }
              percentage={"۴۷٪"}
              previousPrice={"۳,۰۰۰,۹۵۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SuggestionItem
              src={"/images/SuggestionItems/image10.jpg"}
              spancontent={
                isSmall
                  ? "کاپشن مردانه بالنو"
                  : "کاپشن مردانه بالنو Baleno کد ..."
              }
              spancontent1={"۴,۵۰۴,۷۷۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف در سبد خرید"
                  : "تخفیف فقط با افزودن به سبد خرید"
              }
              percentage={"۴۷٪"}
              previousPrice={"۷,۱۲۱,۶۰۰"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
