import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LinearGradient from "./components/LinearGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Aboutme from "./scenes/Aboutme";
function App() {
  const [pageselected, setpageselected] = useState("home");
  const [isTopOfPage, setisTopOfPage] = useState(true);
  const isScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopOfPage(true);
      if (window.scrollY !== 0) setisTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <h1 className="app bg-gradient-to-b from-black via-black to-gray-800">
      <Navbar
        isTopOfPage={isTopOfPage}
        pageselected={pageselected}
        setpageselected={setpageselected}
      />
      <div className="w-full px-16 mx-auto md:h-full bg-gradient-to-t from-black via-black to-gray-800  ">
        {isScreens && (
          <DotGroup
            pageselected={pageselected}
            setpageselected={setpageselected}
          />
        )}
        <Landing setpageselected={setpageselected} />
      </div>
      <LinearGradient />
      <div className="w-full px-16 mx-auto md:h-full bg-gradient-to-b from-black via-black to-gray-800 ">
        <Aboutme />
      </div>
      <LinearGradient />
      <div className="w-full px-16 mx-auto md:h-full bg-gradient-to-t from-black via-black to-gray-800 ">
        <MySkills />
      </div>
      <div className="w-full mx-auto bg-gradient-to-b from-black via-black to-gray-800 ">
        <Projects />
      </div>

      <div className="w-full px-16 mx-auto bg-gradient-to-t from-black via-black to-gray-800 pt-48">
        <Contact />
      </div>
      <LinearGradient />
      <Footer />
    </h1>
  );
}

export default App;
