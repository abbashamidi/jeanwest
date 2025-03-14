export function HeaderForDesktopItem({ title, icon, children }) {

  return (
    <li>
      <button className="hover:text-red-600 cursor-pointer flex items-center peer">
        { icon ? (<i className={`${icon} inline-block px-2`}></i>) : null}
        {title}
      </button>

      <div className="peer hidden peer-hover:block hover:block absolute inset-x-0 z-10 pt-[15px]">
        <div className="bg-white">
          {children}
        </div>
      </div>

      <div className="hidden peer-hover:block absolute inset-x-0 mt-[15px] h-screen bg-black/30 backdrop:blur-sm"></div>
    </li>
  );
}
