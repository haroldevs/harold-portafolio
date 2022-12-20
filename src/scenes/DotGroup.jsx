import AnchorLink from "react-anchor-link-smooth-scroll";
const DotGoup = ({ pageselected, setpageselected }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${pageselected === "home" ? selectedStyles : "bg-dark-grey"}
         w-3 h-3 rounded-full`}
        href={"#home"}
        onClick={() => setpageselected("home")}
      />
      <AnchorLink
        className={`${
          pageselected === "skills" ? selectedStyles : "bg-dark-grey"
        }
         w-3 h-3 rounded-full`}
        href={"#skills"}
        onClick={() => setpageselected("skills")}
      />
      <AnchorLink
        className={`${
          pageselected === "projects" ? selectedStyles : "bg-dark-grey"
        }
         w-3 h-3 rounded-full`}
        href={"#projects"}
        onClick={() => setpageselected("projects")}
      />
      <AnchorLink
        className={`${
          pageselected === "contact" ? selectedStyles : "bg-dark-grey"
        }
         w-3 h-3 rounded-full`}
        href={"#contact"}
        onClick={() => setpageselected("contact")}
      />
    </div>
  );
};
export default DotGoup;
