export function HeaderForMobile__TopButtons({ onSearchClick }) {
    return (
      <div className="flex items-center justify-between h-14 p-4 border-b border-x-gray-200 bg-white">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <g stroke="currentColor" strokeWidth={1.5}>
              <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 1 1 12 0Z"></path>
              <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"></path>
            </g>
          </svg>
        </button>
  
        <img className="h-full" src="./images/download.svg" alt="icon" />
  
        <button onClick={onSearchClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <g stroke="currentColor" strokeWidth={1.5}>
              <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3"></path>
            </g>
          </svg>
        </button>
      </div>
    );
  }
  