export function HeaderForMobile__SearchOverlay({ show, onClose, items }) {
    return (
      <div
        className={`fixed inset-0 z-10 bg-white
          transition-all duration-300 ease-in-out text-xs
          ${
            show
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col absolute w-full top-0 border-b pt-1.5 pb-3 gap-1.5 px-4">
          <div className="flex w-80 py-2 gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              className="w-6 h-6 stroke-1"
              onClick={onClose}
            >
              <g stroke="currentColor">
                <path d="M16.658 9.983H4.167M11.656 4.99 16.665 10l-5.01 5.01"></path>
              </g>
            </svg>
            <span>جست و جو</span>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              className="bg-gray-200 focus:outline-none w-full rounded py-2.5 pl-10 pr-2 transition-colors duration-300 hover:bg-white border border-transparent hover:border-gray-200"
              placeholder="جست و جو بین محصولات"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
            >
              <g stroke="currentColor" strokeWidth={1.5}>
                <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3"></path>
              </g>
            </svg>
          </div>
        </div>
  
        <div className="flex flex-col absolute w-full top-24 pt-1.5 pb-3 gap-1.5 px-4">
          <div className="flex w-80 py-4 gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              className="w-5 h-5 stroke-1"
            >
              <path
                stroke="currentColor"
                d="M5.667 9.667A1.667 1.667 0 0 0 7.333 8c0-.92-.333-1.333-.666-2C5.952 4.571 6.517 3.297 8 2c.333 1.667 1.333 3.267 2.667 4.333 1.333 1.067 2 2.334 2 3.667a4.667 4.667 0 0 1-9.334 0c0-.769.289-1.53.667-2a1.667 1.667 0 0 0 1.667 1.667Z"
              ></path>
            </svg>
            <span>جستجوهای پرطرفدار</span>
          </div>
          <div className="w-full">
            <ul className="flex flex-row gap-2 flex-wrap">
              {items.map((item, index) => (
                <li key={index} className="py-1.5 px-4 border rounded-lg">
                  <a href="#" className="flex items-center gap-2.5">
                    {item}
                    <i className="fa-solid fa-arrow-left"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  