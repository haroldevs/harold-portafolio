import React from "react";
import installNode from "../assets/portafolio/installNode.jpg";
import navbar from "../assets/portafolio/arrayDestruct.jpg";
import reactParallax from "../assets/portafolio/reactParallax.jpg";
import reactSmooth from "../assets/portafolio/reactSmooth.jpg";
import reactWeather from "../assets/portafolio/reactWeather.jpg";
import delupeimg from "../assets/portafolio/delupeimg.jpg";
const Projects = () => {
  const project = [
    {
      id: 1,
      src: delupeimg,
      lnk: "https://www.youtube.com/watch?v=NZpmGftWXcE",
      cde: "https://github.com/haroldevs/demos/blob/main/README.md",
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div id="projects" className="pt-48 pb-48 md:h-screen ">
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Pro<span className="text-red">jects</span>
          </p>
          <p className="py-2">Te invito a que veas mis proyectos</p>
        </div>

        <div className="grid sm:gridcols-2 md:grid-cols-3 gap-8 px-12 sm:px-20">
          {project.map(({ id, src, lnk, cde }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-4 py-2 m-4 duration-200 hover:scale-105">
                  <a href={lnk} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={cde} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
