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
    <div className="bg-gradient-to-r from-gray-900 from-10% via-gray-800 via-30% to-gray-900 to-90%">
      <Navbar
        isTopOfPage={isTopOfPage}
        pageselected={pageselected}
        setpageselected={setpageselected}
      />
      <div className="w-full px-16 mx-auto md:h-full  ">
        {isScreens && (
          <DotGroup
            pageselected={pageselected}
            setpageselected={setpageselected}
          />
        )}
        <Landing setpageselected={setpageselected} />
      </div>
      <LinearGradient />
      <div className="w-full px-16 mx-auto md:h-full  ">
        <Aboutme />
      </div>
      <LinearGradient />
      <div className="w-full px-16 mx-auto md:h-full  ">
        <MySkills />
      </div>
      <div className="w-full mx-auto  ">
        <Projects />
      </div>

      <div className="w-full px-16 mx-auto ">
        <Contact />
      </div>
      <LinearGradient />
      <Footer />
    </div>
  );
}

export default App;
