import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ShppingCardItem from "./ShoppingCardItem";

export default function ShoppingCardSwiper({ products, prevRef, nextRef, isSmall }) {
  return (
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
      {products.map((item, idx) => (
        <SwiperSlide key={idx}>
          <ShppingCardItem
            src={item.src}
            spancontent={isSmall ? item.titleShort : item.titleLong}
            spancontent1={item.price}
            spancontent2={isSmall ? item.discountShort : item.discountLong}
            percentage={item.percentage}
            previousPrice={item.previousPrice}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
