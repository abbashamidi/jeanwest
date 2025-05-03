export default function Banner2({ src }) {
  return (
    <>
      <div className="w-[81.5%] mx-auto h-56 mb-32 rounded mt-10 border-b-4 border-gray-300">
        <img src={src} alt="banner-photo" className="rounded" />
      </div>
      <hr className="w-[81.5%] border-1 border-gray-300 mx-auto" />
    </>
  );
}
