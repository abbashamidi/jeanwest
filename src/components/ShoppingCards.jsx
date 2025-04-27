import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import ShppingCardItem from "./ShoppingCardItem";

export default function ShppingCard({ className }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-[81.5%] mx-auto">
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
          پربازدیدترین محصولات
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={2}
          className="mySwiper"
        >
          {/* Your Products */}
          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image10.jpg"}
              spancontent={"هودی زنانه جوتی جینز کد ۳۳۷۷۱۲۶۱"}
              spancontent1={"۷۴۹,۵۰۰ تومان"}
              spancontent2={"۵۰ درصد تخفیف تمامی کالاها "}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image2.jpg"}
              spancontent={"کاپشن زنانه جین وست کد ۱۴۲۲۳۵۰۱"}
              spancontent1={"۴,۴۹۹,۵۰۰ تومان"}
              spancontent2={"۵۰ درصد تخفیف تمامی کالاها "}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image9.jpg"}
              spancontent={"پلیور مردانه جین وست کد ۱۴۱۹۶۵۱۹"}
              spancontent1={"۱,۶۴۹,۵۰۰ تومان"}
              spancontent2={"۵۰ درصد تخفیف تمامی کالاها "}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image8.jpg"}
              spancontent={"دورس زنانه جین وست  کد ۱۴۲۷۱۰۰۰۱"}
              spancontent1={"۷۴۹,۵۰۰ تومان"}
              spancontent2={"۵۰ درصد تخفیف تمامی کالاها "}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image1.jpg"}
              spancontent={"کاپشن مردانه جوتی جونز کد ۲۷۳۴۵۶۱۲"}
              spancontent1={"۸۹۰,۹۰۰ تومان"}
              spancontent2={"۵۰ درصد تخفیف تمامی کالاها "}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image7.jpg"}
              spancontent={"ژاکت مردانه ومبلی کد ۲۴۳۳۵۵۶۷"}
              spancontent1={"۵۳۴,۷۰۰ تومان"}
              spancontent2={"۵۰ درصد تخفیف تمامی کالاها "}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image6.jpg"}
              spancontent={"شلوار پارچه ایی جین وست کد ۱۲۳۴۵۶۷۸"}
              spancontent1={"۷۵۰,۰۰۰ تومان"}
              spancontent2={"۵۰ درصد تخفیف تمامی کالاها "}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image3.jpg"}
              spancontent={"هودی اسپورت مک لارن کد ۹۸۷۵۶۴۳۱"}
              spancontent1={"۴۰۰,۰۰ تومان"}
              spancontent2={"۵۰ درصد تخفیف تمامی کالاها "}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image5.jpg"}
              spancontent={"نیم بوت زمستانه آر کی کد ۳۲۱۴۵۶۷۸"}
              spancontent1={"۷۴۹,۵۰۰ تومان"}
              spancontent2={"۵۰ درصد تخفیف تمامی کالاها "}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ShppingCardItem
              src={"/images/ShppingCardItem/image4.jpg"}
              spancontent={"پیراهن نخی جین وست کد ۲۹۸۴۷۶۱۰"}
              spancontent1={"۳۵۰,۷۵۰ تومان"}
              spancontent2={"۵۰ درصد تخفیف تمامی کالاها "}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
