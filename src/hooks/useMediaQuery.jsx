import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setmatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setmatches((prevMatches) => media.matches);
    }
    const listener = () => setmatches((prevMatches) => media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [query, matches]);

  return matches;
};

export default useMediaQuery;
