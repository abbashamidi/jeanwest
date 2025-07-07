import DetailsItems from "./DetailsItems";

export default function Details({ className }) {
  return (
    <div
      className={`w-[81.5%] mx-auto flex flex-col md:flex-row md:justify-center gap-4 ${
        className || ""
      }`}
    >
      <DetailsItems
        src={"images/DetailsImages/img1.png"}
        span1={"تعویض آنلاین"}
        span2={
          "اگر محصول خریداری شده با سلیقه یا نیاز شما مطابقت نداشت، امکان تعویض آنلاین کالا فراهم شده است."
        }
      />
      <DetailsItems
        src={"images/DetailsImages/img2.png"}
        span1={"ارسال ۲ ساعته"}
        span2={
          "امکان ارسال تمامی سفارش ها با بسته بندی مناسب به هر نقطه از ایران وجود دارد."
        }
      />
      <DetailsItems
        src={"images/DetailsImages/img3.webp"}
        span1={"ضمانت بازگشت"}
        span2={
          "تا 7 روز پس از تحویل کالا امکان بازگشت یا تعویض کالا فراهم شده است."
        }
      />
      <DetailsItems
        src={"images/DetailsImages/img4.png"}
        span1={"ضمانت اصالت"}
        span2={"تمامی محصولات دارای برچسب اصالت کالا و کنترل کیفی هستند."}
      />
    </div>
  );
}
