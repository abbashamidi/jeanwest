import IconTag from "./Icons/IconTag";

export default function ShoppingCardItem({
  src,
  spancontent,
  spancontent1,
  spancontent2,
}) {
  return (
    <div className="w-full rounded flex flex-col group">
      <div className="w-full h-80 relative overflow-hidden">
        <img
          src={src}
          alt="shoppingcartphoto"
          className="w-full h-full object-cover"
        />
        <span className="absolute text-white bg-black top-3 left-0 py-0.5 px-3 rounded-lg -ml-1">
          ۵۰٪
        </span>
        <span className="opacity-0 group-hover:opacity-100 transition-all hover:text-red-500 duration-300 absolute right-4 top-2.5">
          <i className="fa-solid fa-heart bg-gray-300 rounded-full p-2"></i>
        </span>
      </div>
      <div className="flex flex-col gap-2.5 py-2 px-2">
        <span className="text-xs">{spancontent}</span>
        <b className="text-xs">{spancontent1}</b>
        <span className="text-xs flex items-center gap-1 text-blue-950">
          <IconTag />
          {spancontent2} 🔥
        </span>
      </div>
    </div>
  );
}
