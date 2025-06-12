import FooterItem from "./FooterItem";
export default function FooterDesk({ className }) {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center w-[81.5%] mx-auto h-64`}
    >
      <img
        src="./images/download.svg"
        alt="icon"
        className="h-48 w-48 mx-auto my-auto"
      />
      <span className="text-lg block -mt-16 text-center">
        <i>JeanWest,Fits Best</i>
      </span>
      <div className="flex w-full ">
        <FooterItem
          litext1={"فروشگاه آنلاین"}
          litext2={"پوشاک مردانه"}
          litext3={"پوشاک زنانه"}
          litext4={"پوشاک بچهگانه"}
          litext5={"کیف و کفش"}
        />
        <FooterItem
          litext1={"خدمات مشتریان"}
          litext2={"شرایط تعویض کالا"}
          litext3={"باشگاه مشتریان"}
          litext4={"دعوت از دوستان"}
          litext5={"تماس با ما"}
        />
        <FooterItem
          litext1={"فروشگاه آنلاین"}
          litext2={"پوشاک مردانه"}
          litext3={"پوشاک زنانه"}
          litext4={"پوشاک بچهگانه"}
          litext5={""}
        />
        <FooterItem
          litext1={"فروشگاه آنلاین"}
          litext2={"پوشاک مردانه"}
          litext3={"پوشاک زنانه"}
          litext4={"پوشاک بچهگانه"}
          litext5={""}
        />
      </div>
      <p className="mt-14 text-gray-800  border-b-2 pb-10">
        در سال ۱۹۷۲، حدود پنجاه سال پیش، آلیستر نوروود اولین فروشگاه جین‌ وست را
        در شهر پِرت استرالیا تأسیس کرد که در آن پوشاک سادۀ جین عرضه می‌کرد. اما
        تنها پانزده سال بعد جین‌ وست توانست تأسیس صدمین شعبه خود را در استرالیا
        جشن بگیرد. با محبوبیت روزافزون این برند در بازار پرهیاهوی مد و فشن، در
        سال ۱۹۹۴ میلادی، جین‌ وست با داشتن ۱۵۰ شعبه در سرتاسر قارۀ اقیانوسیه،
        قدم به آن‌سوی آب‌ها گذاشت و توانست پوشاک خود را به بازار جهانی عرضه کند.
        امروزه جین‌ وست با بیش از 3000 شعبه در سراسر جهان یکی از بزرگ‌ترین
        فروشگاه‌های زنجیره‌ای پوشاک و یکی از محبوب‌ترین برندهای فست‌‌فشن و لباس
        روزمره در جهان به شمار می‌آید.
        <a href="#" className="font-bold text-black">
          بیشتر بخوانید
        </a>
      </p>
      <div className="flex justify-between items-center w-full mx-auto mt-5">
        <div className="flex gap-2 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            strokeWidth="1.5"
          >
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2V9ZM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            className="w-6 h-6"
            strokeWidth="1.5"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2c.312-1.732.466-3.49.46-5.25a29.005 29.005 0 0 0-.46-5.33Z"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 25"
            className="w-6 h-6"
            strokeWidth="1.5"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 2.5H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-10a5 5 0 0 0-5-5Z"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11.87a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.87ZM17.5 7h.01"
            ></path>
          </svg>
        </div>
        <p>©2025 | All rights reserved by JEANSWEST</p>
      </div>
    </div>
  );
}
