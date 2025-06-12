export default function ProductsCategoriesItem({ src, title }) {
  return (
    <div className="flex flex-col rounded-lg border-2 overflow-hidden w-full">
      <img src={src} alt="product-photo" className="w-full h-40 object-cover" />
      <div className="flex justify-between px-4 py-2 items-center border-t">
        <span className="text-xs">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          className="w-5 h-5"
        >
          <g stroke="#000" strokeWidth="1.5">
            <path d="M3.342 9.983h12.492M8.344 4.99 3.335 10l5.01 5.01" />
          </g>
        </svg>
      </div>
    </div>
  );
}
