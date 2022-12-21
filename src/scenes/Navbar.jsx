import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, pageselected, setpageselected }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${pageselected === lowerCasePage ? "text-red" : ""}
         hover:text-red transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setpageselected(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, pageselected, setpageselected }) => {
  const [isMenuToggled, setisMenuToggled] = useState(false);
  const isScreens = useMediaQuery("(min-width:768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-black";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="sans text-3xl font-bold font-nameofharold">HAROLDEVS</h4>
        {/* DESKTOP NAV */}
        {isScreens ? (
          <div className="flex justify-between gap-16 sans text-sm font-semibold">
            <Link
              page="Home"
              pageselected={pageselected}
              setpageselected={setpageselected}
            />
            <Link
              page="AboutMe"
              pageselected={pageselected}
              setpageselected={setpageselected}
            />
            <Link
              page="Skills"
              pageselected={pageselected}
              setpageselected={setpageselected}
            />
            <Link
              page="Projects"
              pageselected={pageselected}
              setpageselected={setpageselected}
            />
            <Link
              page="Contact"
              pageselected={pageselected}
              setpageselected={setpageselected}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setisMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}
        {/* mobile menu popup */}
        {!isScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full w-[300px] bg-gradient-to-b from-gray-800 via-black to-gray-700">
            {/* close icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setisMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/menu-icon.svg" />
              </button>
            </div>
            {/* menu items */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
              <Link
                page="Home"
                pageselected={pageselected}
                setpageselected={setpageselected}
              />
              <Link
                page="AboutMe"
                pageselected={pageselected}
                setpageselected={setpageselected}
              />
              <Link
                page="Skills"
                pageselected={pageselected}
                setpageselected={setpageselected}
              />
              <Link
                page="Projects"
                pageselected={pageselected}
                setpageselected={setpageselected}
              />
              <Link
                page="Contact"
                pageselected={pageselected}
                setpageselected={setpageselected}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
