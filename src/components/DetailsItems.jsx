export default function DetailsItems({ src, span1, span2 }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 border p-3 rounded-lg mb-2 text-xs">
      <img src={src} alt={span1} className="h-9 w-9 min-w-[36px] md:ml-2"/>
      <div className="text-right">
        <p className="font-semibold text-black mb-1">{span1}</p>
        <p className="text-gray-500 leading-snug text-[11px]">{span2}</p>
      </div>
    </div>
  );
}
