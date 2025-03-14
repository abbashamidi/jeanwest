export function HeaderForDesktopItem({ title, icon, children }) {

  return (
    <li>
      <button className="hover:text-red-600 cursor-pointer flex items-center peer">
        { icon ? (<i className={`${icon} inline-block px-2`}></i>) : null}
        {title}
      </button>

      <div className="peer hidden peer-hover:block hover:block absolute inset-x-0 z-10 pt-[15px]">
        <div className="bg-red-100 h-52">
          {children}
        </div>
      </div>

      <div className="hidden peer-hover:block absolute inset-x-0 mt-3.5 h-screen bg-black/10 backdrop:blur-sm"></div>
    </li>
  );
}
