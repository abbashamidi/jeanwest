export function MardanehList({ title, icon, buttons, hasImage }) {
  return (
    <div className="min-h-[200px] px-2 py-1">
      <button className="flex items-center gap-1">
        <i className={`${icon}`}></i>
        <strong className="text-sm">{title}</strong>
      </button>
      {hasImage && (
        <img src={hasImage} className="w-60 h-56 my-2 rounded"/>
      )}
      <div className="flex flex-col gap-2.5 pt-2 items-start justify-center">
        {buttons.map((btn) => (
          <button className="text-sm text-gray-400 hover:text-black flex items-center gap-1 group">
            {btn}
            <i className="fa-solid fa-arrow-left opacity-0 group-hover:opacity-100"></i>
          </button>
        ))}
      </div>
    </div>
  );
}
