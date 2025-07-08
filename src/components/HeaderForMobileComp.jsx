import { useState, useEffect } from "react";
import { HeaderForMobile__TopButtons } from "./HeaderForMobile__TopButtons";
import { HeaderForMobile__SearchOverlay } from "./HeaderForMobile__SearchOverlay";

export function HeaderForMobileComp({ className }) {
  const items = ["شلوار جین", "پالتو", "جوراب", "کلاه", "دستکش"];
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => setShowSearch((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showSearch);
  }, [showSearch]);

  return (
    <div className={`w-full h-14 ${className} sticky top-0 z-50`}>
      <HeaderForMobile__TopButtons onSearchClick={handleClick} />
      <HeaderForMobile__SearchOverlay
        show={showSearch}
        onClose={handleClick}
        items={items}
      />
    </div>
  );
}
