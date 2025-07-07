import { useEffect, useRef, useState } from "react";

export function useHeaderForDesktopScrollEffect(threshold = 50, scrollDelta = 10) {
  const [hideList, setHideList] = useState(false);
  const prevScrollY = useRef(0);
  const lastScrollDirection = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollDiff = currentScroll - prevScrollY.current;

      if (Math.abs(scrollDiff) > scrollDelta) {
        if (scrollDiff > 0 && currentScroll > threshold) {
          if (lastScrollDirection.current !== "down") {
            setHideList(true);
            lastScrollDirection.current = "down";
          }
        } else if (scrollDiff < 0) {
          if (lastScrollDirection.current !== "up") {
            setHideList(false);
            lastScrollDirection.current = "up";
          }
        }
      }

      prevScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, scrollDelta]);

  return hideList;
}
