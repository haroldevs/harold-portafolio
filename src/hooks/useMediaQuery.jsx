import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setmatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setmatches(media);
    }
    const listener = () => setmatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
