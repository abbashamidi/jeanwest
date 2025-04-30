export default function Banner({src}) {
    return (
        <div className="w-[81.5%] mx-auto h-56 mb-56 rounded">
            <img src={src} alt="banner-photo" className="rounded"/>
        </div>
    )
}