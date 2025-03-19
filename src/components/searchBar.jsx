export function SearchBar() {
  return (
    <>
      <div className="bg-gray-100 rounded relative p-1 w-3/12 focus-within:bg-white focus-within:w-4/12 max-h-[36px] transition-all duration-300 ease-in-out border border-transparent focus-within:border-gray-200">
        <input
          type="text"
          className="w-full text-sm focus:outline-none bg-transparent px-2"
          placeholder="جستجو بین محصولات"
        />
        <div className="w-full absolute rounded pt-3 px-3 border inset-x-0 top-[32.1px] bg-white text-center z-10 transition-opacity duration-300">
          <span className="text-sm flex items-center gap-1">
            <i className="fas fa-fire"></i>
            جستجوهای پرطرفدار
          </span>
        </div>
        <i className="absolute top-1 left-1 fa-solid fa-search text-gray-500 text-lg px-2"></i>
      </div>
    </>
  );
}
