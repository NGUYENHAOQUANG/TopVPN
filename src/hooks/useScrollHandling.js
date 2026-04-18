import { useEffect, useRef, useState } from "react";

const useScrollHandling = () => {
  // lưu giá trị up hay down
  const [scrollDirection, setScrollDirection] = useState(null);
  //  tạo ref lưu vị trí hiện tại
  const previousScrollPosition = useRef(0);
  //tạo biến lựu vị trí hiện tại của scroll
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);
    return () => {
      window.removeEventListener("scroll", scrollTracking);
    };
  }, []);

  return { scrollDirection, scrollPosition };
};

export default useScrollHandling;
