import { useState,useEffect } from "react";
export function SearchBar() {
  return (
    <>
      <div className="bg-gray-100 rounded relative p-1 w-4/12 focus-within:bg-white focus-within:w-5/12 max-h-[36px] transition-all duration-300 ease-in-out border border-transparent focus-within:border-gray-200 group">
        <input
          type="text"
          className="w-full text-sm focus:outline-none bg-transparent px-3"
          placeholder="جستجو بین محصولات"
        />
        <div className="w-full opacity-0 group-focus-within:opacity-100 absolute rounded pt-3 px-3 border inset-x-0 top-[32.1px] bg-white text-center z-10 transition-opacity duration-300">
          <div className="my-2">
            <span className="text-sm flex items-center gap-1.5">
              <i className="fas fa-fire"></i>
              جستجوهای پرطرفدار
            </span>
          </div>
          <div className="text-sm flex gap-2 py-3  flex-wrap">
            <span className="border border-gray-200 py-1 px-3.5 flex items-center gap-1 hover:cursor-pointer rounded">
                شلوار جین
                <i className="fa-solid fa-arrow-left"></i>
            </span>
            <span className="border border-gray-200 py-1 px-3.5 flex items-center gap-1 hover:cursor-pointer rounded">
                پالتو
                <i className="fa-solid fa-arrow-left"></i>
            </span>
            <span className="border border-gray-200 py-1 px-3.5 flex items-center gap-1 hover:cursor-pointer rounded">
                کاپشن
                <i className="fa-solid fa-arrow-left"></i>
            </span>
            <span className="border border-gray-200 py-1 px-3.5 flex items-center gap-1 hover:cursor-pointer rounded">
                جوراب ساق بلند
                <i className="fa-solid fa-arrow-left"></i>
            </span>
            <span className="border border-gray-200 py-1 px-3.5 flex items-center gap-1 hover:cursor-pointer rounded">
                کفش
                <i className="fa-solid fa-arrow-left"></i>
            </span>
          </div>
        </div>
        <i className="absolute top-1 left-1 fa-solid fa-search text-gray-500 text-lg px-2"></i>
      </div>
    </>
  );
}
