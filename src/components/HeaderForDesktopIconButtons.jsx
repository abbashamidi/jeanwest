export default function HeaderForDesktopIconButtons() {
    return (
      <div className="flex items-center gap-6">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-current"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 5.572c6.333-6.44 17.19 5.52 0 15.178C-5.19 11.092 5.667-.868 12 5.572Z"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M15 8a3 3 0 1 1-6 0M4.636 5.629l-.757 12.5a2 2 0 0 0 1.996 2.121h12.25a2 2 0 0 0 1.997-2.121l-.758-12.5a2 2 0 0 0-1.996-1.879H6.632a2 2 0 0 0-1.996 1.879Z"
            ></path>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 24"
            className="w-6 h-6"
          >
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M12.5 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"></path>
              <path d="M20.5 21a8 8 0 0 0-16 0"></path>
            </g>
          </svg>
        </button>
        <button className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 1 1 12 0Z" />
              <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835" />
            </g>
          </svg>
        </button>
      </div>
    );
  }
  