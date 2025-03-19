export function HeaderForDesktopItem({ title, icon, children, isRed }) {
  return (
    <li>
      <button className="hover:text-red-600 cursor-pointer flex items-center peer">
        <span className={`text-sm ${isRed ? "text-red-600" : ""}`}>
          {icon ? <i className={`${icon} inline-block px-2`}></i> : null}
          {title}
        </span>
      </button>

      <div className="peer hidden peer-hover:block hover:block absolute inset-x-0 z-20 pt-[17px] peer-has(+ peer:hover:text-red-600)">
        <div className="bg-white">{children}</div>
      </div>

      <div className="hidden peer-hover:block absolute inset-x-0 mt-[17px] h-screen bg-black/30 backdrop:blur-sm"></div>
    </li>
  );
}
