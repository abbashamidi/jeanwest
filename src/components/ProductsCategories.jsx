import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import ProductsCategoriesItem from "./ProductsCategoriesItem";

export default function ProductsCategories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="mt-6 relative">
      <div className="flex justify-end gap-2 mb-4">
        <button
          ref={prevRef}
          className="swiper-button-prev-custom absolute right-16 top-40 -translate-y-1/2 p-2 rounded-full"
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
          className="swiper-button-next-custom absolute left-16 top-40 -translate-y-1/2 p-2 rounded-full"
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
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
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
    </div>
  );
}
