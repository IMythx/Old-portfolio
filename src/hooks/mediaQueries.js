import { useState } from "react";

const useQuery = () => {
  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(max-width: 992px)").matches
  );
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 580px)").matches
  );

  window
    .matchMedia("(max-width: 992px)")
    .addEventListener("change", (e) => setIsTablet(e.matches));
  window
    .matchMedia("(max-width: 580px)")
    .addEventListener("change", (e) => setIsMobile(e.matches));

  return { isTablet, isMobile };
};

export default useQuery;
