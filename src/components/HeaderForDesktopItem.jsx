export function HeaderForDesktopItem() {
  return (
    <li className="hover:text-red-600 py-3 group">
      <button className="flex flex-row items-center gap-1 cursor-pointer">
        <i className="fa-solid fa-fire"></i>
        جدیدترین
      </button>
      <div className="absolute w-[100%] right-0" id="parent">
        <div className="hidden group-hover:flex px-10 items-center justify-evenly py-8 w-[87%] mx-auto">
          <div className="relative">
            <button className="cursor-pointer">
              <img
                className="w-[394px] h-[316px] rounded border border-gray-300"
                src="/images/li-hover-divs/image1.jpg"
                alt="photo"
              />
              <p className="absolute left-4 bottom-3 text-white">
                مردانه
                <i className="fa-solid fa-door-open"></i>
              </p>
            </button>
          </div>
          <div className="relative px-3">
            <button className="cursor-pointer">
              <img
                className="w-[394px] h-[316px] rounded border border-gray-300"
                src="/images/li-hover-divs/image2.jpg"
                alt="photo"
              />
              <p className="absolute left-4 bottom-3 text-white">
                زنانه
                <i className="fa-solid fa-door-open"></i>
              </p>
            </button>
          </div>
          <div className="relative px-3">
            <button className="cursor-pointer">
              <img
                className="w-[394px] h-[316px] rounded border border-gray-300"
                src="/images/li-hover-divs/image3.png"
                alt="photo"
              />
              <p className="absolute left-4 bottom-3 text-white">
                بچه گانه
                <i className="fa-solid fa-door-open"></i>
              </p>
            </button>
          </div>
        </div>
        <div className="w-full h-[34.6vh] bg-black/50 backdrop-blur-sm z-10"></div>
      </div>
    </li>
  );
}
