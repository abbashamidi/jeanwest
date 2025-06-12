export default function Banner2({ src }) {
  return (
    <div className="w-[90%] sm:w-[85%] md:w-[81.5%] mx-auto rounded overflow-hidden">
      <div
        className="w-full mx-auto mb-14 rounded overflow-hidden relative"
        style={{ height: "clamp(200px, 40vh, 420px)" }}
      >
        <img
          src={src}
          alt="banner-photo"
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>
    </div>
  );
}
