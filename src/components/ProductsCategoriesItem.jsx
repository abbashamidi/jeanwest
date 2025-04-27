export default function ProductsCategoriesItem({ src, title }) {
  return (
    <div className="flex flex-col rounded-lg border-2">
      <img src={src} alt="product-photo" className="w-60 h-40 rounded-t-lg" />
      <div className="flex justify-between px-4 py-2 items-center border">
        <span className="font-bold">{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5">
          <g
            stroke="#000"
            stroke-width="1.5"
          >
            <path d="M3.342 9.983h12.492M8.344 4.99 3.335 10l5.01 5.01"></path>
          </g>
          <defs>
            <clipPath id="arrow-left-tail_svg__a">
              <path fill="#fff" d="M0 0h20v20H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
