export function SearchBar() {
  return (
    <>
      <div className="bg-gray-100 rounded relative p-1 w-4/12 focus-within:bg-white focus-within:w-5/12 max-h-[36px] transition-all duration-300 ease-in-out border border-transparent focus-within:border-gray-200 group">
        {/* آیکون ذره‌بین */}
        <i className="absolute top-1/2 left-3 -translate-y-1/2 fa-solid fa-search text-gray-500 text-lg"></i>

        {/* اینپوت */}
        <input
          type="text"
          className="w-full text-xs focus:outline-none bg-transparent px-5"
          placeholder="جستجو بین محصولات"
        />

        {/* نتایج پیشنهادی */}
        <div className="w-full opacity-0 group-focus-within:opacity-100 absolute rounded pt-3 px-3 border inset-x-0 top-[28px] bg-white text-center z-10 transition-opacity duration-300">
          <div className="my-2">
            <span className="text-xs flex items-center gap-1.5">
              <i className="fas fa-fire"></i>
              جستجوهای پرطرفدار
            </span>
          </div>
          <div className="text-xs flex gap-2 py-3 flex-wrap">
            {["شلوار جین", "پالتو", "کاپشن", "جوراب ساق بلند", "کفش"].map(
              (item) => (
                <span
                  key={item}
                  className="border border-gray-200 py-1 px-3.5 flex items-center gap-1 hover:cursor-pointer rounded"
                >
                  {item}
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
