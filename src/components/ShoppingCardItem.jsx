import IconTag from "./Icons/IconTag";

export default function ShoppingCardItem({
  src,
  spancontent,
  spancontent1,
  spancontent2,
  percentage,
  previousPrice,
}) {
  return (
    <div className="w-full flex flex-col group rounded overflow-hidden">
      <div className="relative overflow-hidden aspect-[3/4]">
        <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">
          <img
            src={src}
            alt="shoppingcartphoto"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="absolute text-white bg-black top-2 sm:top-3 left-0 py-0.5 px-1.5 sm:py-1.5 sm:px-3 rounded-lg text-[11px] sm:text-xs -ml-1">
          {percentage}
        </span>

        <span className="opacity-0 group-hover:opacity-100 transition-all hover:text-red-500 duration-300 absolute right-4 top-2.5">
          <i className="fa-solid fa-heart bg-gray-300 rounded-full p-2"></i>
        </span>
      </div>

      <div className="flex flex-col gap-2.5 py-2 px-2">
        <span className="text-xs line-clamp-2">{spancontent}</span>
        <div className="flex gap-2 items-center">
          <span className="text-gray-500 line-through">{previousPrice}</span>
          <b className="text-xs">{spancontent1}</b>
        </div>
        <span className="text-xs flex items-center gap-1 text-blue-950 line-clamp-1">
          <IconTag />
          {spancontent2} 🔥
        </span>
      </div>
    </div>
  );
}
