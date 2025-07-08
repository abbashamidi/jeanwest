import { useRef } from "react";
import useIsSmallScreen from "../Hooks/useIsSmallScreen";
import ShoppingCardSwiper from "./ShoppingCardSwiper";
import ShoppingCardHeader from "./ShoppingCardHeader";

export default function ShoppingCard({ className }) {
  const isSmall = useIsSmallScreen();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const products = [
    {
      src: "/images/ShppingCardItem/image10.jpg",
      titleShort: "هودی زنانه جوتی جینز",
      titleLong: "هودی زنانه جوتی جینز کد ۳۳۷۷۱۲۶۱",
      price: "۷۴۹,۵۰۰ تومان",
      discountShort: "تخفیف با افزودن به سبد",
      discountLong: "تخفیف فقط با افزودن به سبد خرید",
      percentage: "۴۷٪",
      previousPrice: "۱,۳۸۰,۳۲۰",
    },
    {
      src: "/images/ShppingCardItem/image2.jpg",
      titleShort: "کاپشن زنانه جین وست",
      titleLong: "کاپشن زنانه جین وست کد ۱۴۲۲۳۵۰۱",
      price: "۴,۴۹۹,۵۰۰ تومان",
      discountShort: "تخفیف با افزودن به سبد",
      discountLong: "تخفیف فقط با افزودن به سبد خرید",
      percentage: "۶۰٪",
      previousPrice: "۹,۸۷۰,۳۰۰",
    },
    {
      src: "/images/ShppingCardItem/image9.jpg",
      titleShort: "پلیور مردانه جین وست",
      titleLong: "پلیور مردانه جین وست کد ۱۴۱۹۶۵۱۹",
      price: "۱,۶۴۹,۵۰۰ تومان",
      discountShort: "تخفیف با افزودن به سبد",
      discountLong: "تخفیف فقط با افزودن به سبد خرید",
      percentage: "۲۰٪",
      previousPrice: "۱,۸۳۰,۹۰۰",
    },
    {
      src: "/images/ShppingCardItem/image8.jpg",
      titleShort: "دورس زنانه جین وست",
      titleLong: "دورس زنانه جین وست  کد ۱۴۲۷۱۰۰۰۱",
      price: "۷۴۹,۵۰۰ تومان",
      discountShort: "تخفیف با کد ویژه",
      discountLong: "بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف",
      percentage: "۱۵٪",
      previousPrice: "۹۶۰,۱۰۰",
    },
    {
      src: "/images/ShppingCardItem/image1.jpg",
      titleShort: "کاپشن مردانه جوتی جونز",
      titleLong: "کاپشن مردانه جوتی جونز کد ۲۷۳۴۵۶۱۲",
      price: "۸۹۰,۹۰۰ تومان",
      discountShort: "۵۰٪ تخفیف همه کالاها",
      discountLong: "۵۰ درصد تخفیف تمامی کالاها ",
      percentage: "۴۷٪",
      previousPrice: "۱,۶۵۰,۱۲۰",
    },
    {
      src: "/images/ShppingCardItem/image7.jpg",
      titleShort: "ژاکت مردانه ومبلی",
      titleLong: "ژاکت مردانه ومبلی کد ۲۴۳۳۵۵۶۷",
      price: "۵۳۴,۷۰۰ تومان",
      discountShort: "فروش ویژه و تخفیف",
      discountLong: "اعمال تخفیف و فروش ویژه",
      percentage: "۴۷٪",
      previousPrice: "۱,۳۱۵,۵۰۰",
    },
    {
      src: "/images/ShppingCardItem/image6.jpg",
      titleShort: "شلوار پارچه‌ای جین وست",
      titleLong: "شلوار پارچه ایی جین وست کد ۱۲۳۴۵۶۷۸",
      price: "۷۵۰,۰۰۰ تومان",
      discountShort: "تخفیف بیش از ۲۰٪",
      discountLong: "۵۰ بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف",
      percentage: "۳۰٪",
      previousPrice: "۱,۰۴۰,۰۰۰",
    },
    {
      src: "/images/ShppingCardItem/image3.jpg",
      titleShort: "هودی اسپورت مک لارن",
      titleLong: "هودی اسپورت مک لارن کد ۹۸۷۵۶۴۳۱",
      price: "۴۰۰,۰۰ تومان",
      discountShort: "تخفیف با کد ویژه",
      discountLong: "۵۰ بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف",
      percentage: "۴۷٪",
      previousPrice: "۸۱۹,۰۰۰",
    },
    {
      src: "/images/ShppingCardItem/image5.jpg",
      titleShort: "نیم بوت زمستانه آر کی",
      titleLong: "نیم بوت زمستانه آر کی کد ۳۲۱۴۵۶۷۸",
      price: "۷۴۹ هزار",
      discountShort: "فروش ویژه و تخفیف",
      discountLong: "اعمال تخفیف و فروش ویژه",
      percentage: "۴۰٪",
      previousPrice: "۱,۴۳۰,۰۰۰",
    },
    {
      src: "/images/ShppingCardItem/image4.jpg",
      titleShort: "پیراهن نخی جین وست",
      titleLong: "پیراهن نخی جین وست کد ۲۹۸۴۷۶۱۰",
      price: "۳۵۰,۷۵۰ تومان",
      discountShort: "تخفیف با کد ویژه",
      discountLong: "بیش از ۲۰ درصد تخفیف با اعمال کد تخفیف",
      percentage: "۴۰٪",
      previousPrice: "۸۹۰,۹۱۰",
    },
  ];

  return (
    <div className={`mt-6 relative ${className}`}>
      {/* محتوا وسط‌چین برای هدر و اسلایدر */}
      <div className="w-[81.5%] mx-auto mb-14 z-20">
        {/* Header */}
        <ShoppingCardHeader />

        {/* Navigation Buttons */}
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

        {/* Swiper */}
        <ShoppingCardSwiper
          products={products}
          prevRef={prevRef}
          nextRef={nextRef}
          isSmall={isSmall}
        />
      </div>
    </div>
  );
}
