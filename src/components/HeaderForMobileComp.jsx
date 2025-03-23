export function HeaderForMobileComp({ className }) {
  return (
    <div className={`w-full h-14 ${className}`}>
      <div className="flex items-center justify-between h-14 p-4 border-b-[1px] border-x-gray-200">
        <button onClick={() => setIsVisible(!isVisible)}>
          <i className="fas fa-search text-xl"></i>
        </button>
        <img className="h-full" src="./images/download.svg" alt="icon" />
        <button>
          {" "}
          <i className="fas fa-location-dot text-xl"></i>
        </button>{" "}
      </div>
    </div>
  );
}
