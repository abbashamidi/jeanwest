import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import ProductsCategoriesItem from "./ProductsCategoriesItem";

export default function ProductsCategories() {
  return (
    <div className="w-[81.5%] mx-auto mb-14">
      <div className="flex items-center gap-1.5 pb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          className="w-6 h-6"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M3.125 3.958c0-.46.373-.833.833-.833h3.75c.46 0 .834.373.834.833v3.75c0 .46-.373.834-.834.834h-3.75a.833.833 0 0 1-.833-.834v-3.75ZM3.125 12.292c0-.46.373-.834.833-.834h3.75c.46 0 .834.373.834.834v3.75c0 .46-.373.833-.834.833h-3.75a.833.833 0 0 1-.833-.833v-3.75ZM11.458 14.167a2.708 2.708 0 1 1 5.417 0 2.708 2.708 0 0 1-5.417 0ZM11.458 3.958c0-.46.373-.833.834-.833h3.75c.46 0 .833.373.833.833v3.75c0 .46-.373.834-.833.834h-3.75a.833.833 0 0 1-.834-.834v-3.75Z"
          ></path>
        </svg>
        <h3 className="font-bold ml-6">دسته بندی محصولات</h3>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={16}
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
          <ProductsCategoriesItem
            src={"images/ProductsCategoriesImages/image4.jpg"}
            title={"پوشاک مردانه"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCategoriesItem
            src={"images/ProductsCategoriesImages/image3.jpg"}
            title={"پوشاک زنانه"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCategoriesItem
            src={"images/ProductsCategoriesImages/image1.jpg"}
            title={"پوشاک بچگانه"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCategoriesItem
            src={"images/ProductsCategoriesImages/image2.jpg"}
            title={"کیف و کفش"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCategoriesItem
            src={"images/ProductsCategoriesImages/image5.jpg"}
            title={"اکسسوری"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
