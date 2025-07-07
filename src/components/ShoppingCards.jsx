import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useIsSmallScreen from "../Hooks/useIsSmallScreen";
import ShppingCardItem from "./ShoppingCardItem";
import { useRef } from "react";

export default function ShoppingCard({ className }) {
  const isSmall = useIsSmallScreen();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`mt-6 relative ${className}`}>
      <div className="flex justify-end gap-2 mb-4">
        <div>
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
            {/* فلش چپ وکتور */}
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
          <h3 className="font-bold ml-6">پربازدیدترین محصولات</h3>
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
          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image10.jpg"}
              spancontent={
                isSmall
                  ? "هودی زنانه جوتی جینز"
                  : "هودی زنانه جوتی جینز کد ۳۳۷۷۱۲۶۱"
              }
              spancontent1={"۷۴۹,۵۰۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف با افزودن به سبد"
                  : "تخفیف فقط با افزودن به سبد خرید"
              }
              percentage={"۴۷٪"}
              previousPrice={"۱,۳۸۰,۳۲۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image2.jpg"}
              spancontent={
                isSmall
                  ? "کاپشن زنانه جین وست"
                  : "کاپشن زنانه جین وست کد ۱۴۲۲۳۵۰۱"
              }
              spancontent1={"۴,۴۹۹,۵۰۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف با افزودن به سبد"
                  : "تخفیف فقط با افزودن به سبد خرید"
              }
              percentage={"۶۰٪"}
              previousPrice={"۹,۸۷۰,۳۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image9.jpg"}
              spancontent={
                isSmall
                  ? "پلیور مردانه جین وست"
                  : "پلیور مردانه جین وست کد ۱۴۱۹۶۵۱۹"
              }
              spancontent1={"۱,۶۴۹,۵۰۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف با افزودن به سبد"
                  : "تخفیف فقط با افزودن به سبد خرید"
              }
              percentage={"۲۰٪"}
              previousPrice={"۱,۸۳۰,۹۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image8.jpg"}
              spancontent={
                isSmall
                  ? "دورس زنانه جین وست"
                  : "دورس زنانه جین وست  کد ۱۴۲۷۱۰۰۰۱"
              }
              spancontent1={"۷۴۹,۵۰۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف با کد ویژه"
                  : "بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف"
              }
              percentage={"۱۵٪"}
              previousPrice={"۹۶۰,۱۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image1.jpg"}
              spancontent={
                isSmall
                  ? "کاپشن مردانه جوتی جونز"
                  : "کاپشن مردانه جوتی جونز کد ۲۷۳۴۵۶۱۲"
              }
              spancontent1={"۸۹۰,۹۰۰ تومان"}
              spancontent2={
                isSmall ? "۵۰٪ تخفیف همه کالاها" : "۵۰ درصد تخفیف تمامی کالاها "
              }
              percentage={"۴۷٪"}
              previousPrice={"۱,۶۵۰,۱۲۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image7.jpg"}
              spancontent={
                isSmall ? "ژاکت مردانه ومبلی" : "ژاکت مردانه ومبلی کد ۲۴۳۳۵۵۶۷"
              }
              spancontent1={"۵۳۴,۷۰۰ تومان"}
              spancontent2={
                isSmall ? "فروش ویژه و تخفیف" : "اعمال تخفیف و فروش ویژه"
              }
              percentage={"۴۷٪"}
              previousPrice={"۱,۳۱۵,۵۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image6.jpg"}
              spancontent={
                isSmall
                  ? "شلوار پارچه‌ای جین وست"
                  : "شلوار پارچه ایی جین وست کد ۱۲۳۴۵۶۷۸"
              }
              spancontent1={"۷۵۰,۰۰۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف بیش از ۲۰٪"
                  : "۵۰ بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف"
              }
              percentage={"۳۰٪"}
              previousPrice={"۱,۰۴۰,۰۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image3.jpg"}
              spancontent={
                isSmall
                  ? "هودی اسپورت مک لارن"
                  : "هودی اسپورت مک لارن کد ۹۸۷۵۶۴۳۱"
              }
              spancontent1={"۴۰۰,۰۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف با کد ویژه"
                  : "۵۰ بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف"
              }
              percentage={"۴۷٪"}
              previousPrice={"۸۱۹,۰۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image5.jpg"}
              spancontent={
                isSmall
                  ? "نیم بوت زمستانه آر کی"
                  : "نیم بوت زمستانه آر کی کد ۳۲۱۴۵۶۷۸"
              }
              spancontent1={isSmall ? "۷۴۹ هزار" : "۷۴۹,۵۰۰ تومان"}
              spancontent2={
                isSmall ? "فروش ویژه و تخفیف" : "اعمال تخفیف و فروش ویژه"
              }
              percentage={"۴۰٪"}
              previousPrice={"۱,۴۳۰,۰۰۰"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image4.jpg"}
              spancontent={
                isSmall
                  ? "پیراهن نخی جین وست"
                  : "پیراهن نخی جین وست کد ۲۹۸۴۷۶۱۰"
              }
              spancontent1={"۳۵۰,۷۵۰ تومان"}
              spancontent2={
                isSmall
                  ? "تخفیف با کد ویژه"
                  : "بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف"
              }
              percentage={"۴۰٪"}
              previousPrice={"۸۹۰,۹۱۰"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
