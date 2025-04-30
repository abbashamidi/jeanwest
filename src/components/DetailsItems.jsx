export default function DetailsItems({src,span1,span2}) {
    return (
        <div className="flex items-center justify-center border-2 w-1/4 rounded-lg px-3 py-4 gap-3 h-3/4">
            <img src={src} alt="Random-image" className="h-12 w-12"/>
            <div className="flex flex-col items-start gap-1">
                <span className="block font-bold">{span1}</span>
                <span className="block text-gray-500">{span2}</span>

            </div>
        </div>
    )
}
