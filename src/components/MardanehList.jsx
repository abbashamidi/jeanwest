export function MardanehList({ title, icon, buttons }) {
  return (
    <div>
      <button className="flex items-center gap-1">
        <i className={`${icon}`}></i>
        <strong className="text-sm">{title}</strong>
      </button>
      <div className="flex flex-col gap-2 pt-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className="text-sm text-gray-400 hover:text-black flex items-center gap-1 group"
          >
            {btn}
            <i className="fa-solid fa-arrow-left hidden group-hover:block"></i>
          </button>
        ))}
      </div>
    </div>
  );
}
