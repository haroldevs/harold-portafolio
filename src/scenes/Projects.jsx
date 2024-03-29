import React, { useState } from "react";
import styled from "styled-components";
import delupeimg from "../assets/portafolio/delupeimg.jpg";
import ModalProjects from "../components/ModalProjects";
import imgReact from "../assets/herramientas/react.webp";
import imgSemantic from "../assets/herramientas/semantic.webp";
import imgFormik from "../assets/herramientas/formik.webp";
import imgSass from "../assets/herramientas/sass.webp";
import imgDjango from "../assets/herramientas/django.webp";
import imgRailway from "../assets/herramientas/railway.webp";
import imgVercel from "../assets/herramientas/vercel.webp";
import veterinaria from "../assets/portafolio/veterinaria.png";
import imgvite from "../assets/portafolio/vite.png";
import imgtailwind from "../assets/portafolio/tailwind.png";
import miskilla from "../assets/portafolio/miskilla.png";
import imgnextjs from "../assets/portafolio/imgnextjs.png";
import imgtypescript from "../assets/portafolio/imgtypescript.png";
import compuusa from "../assets/portafolio/compuusa.webp";
import control_de_gastos from "../assets/portafolio/gastos.webp";
import cotizadorCriptos from "../assets/portafolio/cotizadorCriptos.PNG";
import crmCliente from "../assets/portafolio/crmCliente.PNG";
import rrdv6 from "../assets/portafolio/rrdv6.png";
const Projects = () => {
  const [estadoModal1, setestadoModal1] = useState(false);
  const [estadoModal2, setestadoModal2] = useState(false);
  const [estadoModal3, setestadoModal3] = useState(false);
  const [estadoModal4, setestadoModal4] = useState(false);
  const [estadoModal5, setestadoModal5] = useState(false);
  const [estadoModal6, setestadoModal6] = useState(false);
  const [estadoModal7, setestadoModal7] = useState(false);
  const project = [
    {
      id: 1,
      src: delupeimg,
      lnk: "https://www.youtube.com/watch?v=NZpmGftWXcE",
      cde: "https://github.com/haroldevs/demos/blob/main/README.md",
      alte: "proyecto de lupe",
      themodal: () => setestadoModal1(!estadoModal1),
    },
    {
      id: 2,
      src: veterinaria,
      lnk: "https://main--citas-mascota.netlify.app/",
      cde: "https://github.com/haroldevs/citas-react",
      alte: "mini proyecto veterinaria",
      themodal: () => setestadoModal2(!estadoModal2),
    },
    {
      id: 3,
      src: miskilla,
      lnk: "https://miskikillatravel.com/",
      cde: "https://github.com/haroldevs/demos/blob/main/README.md",
      alte: "proyecto Miski killa travel",
      themodal: () => setestadoModal3(!estadoModal3),
    },
    {
      id: 4,
      src: compuusa,
      lnk: "https://tienda.compuusa.com.pe/",
      cde: "https://github.com/haroldevs/demos/blob/main/README.md",
      alte: "proyecto Compuusa",
      themodal: () => setestadoModal4(!estadoModal4),
    },
    {
      id: 5,
      src: control_de_gastos,
      lnk: "https://main--control-de-presupuesto-y-gasto.netlify.app/",
      cde: "https://github.com/haroldevs/control-gastos",
      alte: "mini proyecto de control de gastos",
      themodal: () => setestadoModal5(!estadoModal5),
    },
    {
      id: 6,
      src: cotizadorCriptos,
      lnk: "https://cotizador-de-criptos-con-soles.netlify.app/",
      cde: "https://github.com/haroldevs/criptos-react",
      alte: "mini proyecto de criptos",
      themodal: () => setestadoModal6(!estadoModal6),
    },
    {
      id: 7,
      src: crmCliente,
      lnk: "https://crmclientetoview.netlify.app/",
      cde: "F",
      alte: "mini proyecto de crm clientes",
      themodal: () => setestadoModal7(!estadoModal7),
    },
  ];
  return (
    <div id="projects" className="pt-48 pb-48 mb-64 md:h-screen ">
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Pro<span className="text-red">jects</span>
          </p>
          <p className="py-2">Te invito a que veas mis proyectos</p>
        </div>

        <div className="grid sm:gridcols-2 md:grid-cols-3 gap-8 px-12 sm:px-20">
          {project.map(({ id, src, lnk, cde, alte, themodal }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              {/* img 1280 x 720 */}
              <img
                src={src}
                alt={alte}
                className="rounded-md duration-200 hover:scale-105   "
                onClick={themodal}
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
      {/* todos mis modales */}
      {/* modal del proyecto 1 */}
      <ModalProjects
        estado={estadoModal1}
        cambiarEstado={setestadoModal1}
        titulo={"Proyecto deLupe "}
        mostrarOverlay={true}
        posicionModal={"center"}
      >
        <Contenido>
          <p>Proyecto hecho con ReactJS + Django REST framework</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "2rem",
            }}
          >
            <div>
              <TitleInfo>Front-End</TitleInfo>
              <ul>
                <li>
                  <CuadroInfo>
                    <img src={imgReact} alt="React"></img>ReactJS
                  </CuadroInfo>
                </li>
                <li>
                  <CuadroInfo>
                    <img src={imgSemantic} alt="Semantic UI React"></img>
                    SemanticUI
                  </CuadroInfo>
                </li>
                <li>
                  <CuadroInfo>
                    <img src={imgFormik} alt="Formik"></img>
                    Formik
                  </CuadroInfo>
                </li>
                <li>
                  <CuadroInfo>
                    <img src={imgSass} alt="Sass"></img>
                    Sass
                  </CuadroInfo>
                </li>
              </ul>
            </div>
            <div>
              <TitleInfo>Back-End</TitleInfo>
              <ul>
                <li>
                  <CuadroInfo>
                    <img src={imgDjango} alt="Django REST"></img>
                    Django REST
                  </CuadroInfo>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <TitleInfo style={{ marginTop: "1rem" }}>Deploy</TitleInfo>
            <ul>
              <li style={{ marginBottom: ".6rem" }}>
                <CuadroInfo>
                  <img src={imgRailway} alt="Railway"></img>
                  Railway
                </CuadroInfo>
              </li>
              <li>
                <CuadroInfo>
                  <img src={imgVercel} alt="Vercel"></img>
                  Vercel
                </CuadroInfo>
              </li>
            </ul>
          </div>
          <Boton onClick={() => setestadoModal1(!estadoModal1)}>Volver</Boton>
        </Contenido>
      </ModalProjects>
      {/* modal del proyecto 2 */}
      <ModalProjects
        estado={estadoModal2}
        cambiarEstado={setestadoModal2}
        titulo={"Mini Proyecto Citas Veterinaria LocalStorage"}
        mostrarOverlay={true}
        posicionModal={"center"}
      >
        <Contenido>
          <p>Proyecto hecho con Vite + Tailwind</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "2rem",
            }}
          >
            <div>
              <TitleInfo>Front-End</TitleInfo>
              <ul>
                <li>
                  <CuadroInfo>
                    <img src={imgvite} alt="Vite"></img>Vite
                  </CuadroInfo>
                </li>
              </ul>
            </div>
          </div>

          <Boton onClick={() => setestadoModal2(!estadoModal2)}>Volver</Boton>
        </Contenido>
      </ModalProjects>
      {/* modal del proyecto 3 */}
      <ModalProjects
        estado={estadoModal3}
        cambiarEstado={setestadoModal3}
        titulo={"Proyecto Miski Killa Travel"}
        mostrarOverlay={true}
        posicionModal={"center"}
      >
        <Contenido>
          <p>Proyecto haciendose con NextJS + Typescript + Tailwind</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "2rem",
            }}
          >
            <div>
              <TitleInfo>Front-End</TitleInfo>
              <ul>
                <li>
                  <CuadroInfo>
                    <img src={imgnextjs} alt="Nextjs"></img>Nextjs
                  </CuadroInfo>
                </li>
                <li>
                  <CuadroInfo>
                    <img src={imgtypescript} alt="TypeScript"></img>TypeScript
                  </CuadroInfo>
                </li>
                <li>
                  <CuadroInfo>
                    <img src={imgtailwind} alt="Tailwind"></img>
                    Tailwind
                  </CuadroInfo>
                </li>
              </ul>
            </div>
          </div>

          <Boton onClick={() => setestadoModal3(!estadoModal3)}>Volver</Boton>
        </Contenido>
      </ModalProjects>
      {/* modal del proyecto 4 */}
      <ModalProjects
        estado={estadoModal4}
        cambiarEstado={setestadoModal4}
        titulo={"Proyecto Compuusa"}
        mostrarOverlay={true}
        posicionModal={"center"}
      >
        <Contenido>
          <p>Proyecto haciendose con NextJS + Typescript + Tailwind</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "2rem",
            }}
          >
            <div>
              <TitleInfo>Front-End</TitleInfo>
              <ul>
                <li>
                  <CuadroInfo>
                    <img src={imgnextjs} alt="Nextjs"></img>Nextjs
                  </CuadroInfo>
                </li>
                <li>
                  <CuadroInfo>
                    <img src={imgtypescript} alt="TypeScript"></img>TypeScript
                  </CuadroInfo>
                </li>
                <li>
                  <CuadroInfo>
                    <img src={imgtailwind} alt="Tailwind"></img>
                    Tailwind
                  </CuadroInfo>
                </li>
              </ul>
            </div>
          </div>

          <Boton onClick={() => setestadoModal4(!estadoModal4)}>Volver</Boton>
        </Contenido>
      </ModalProjects>
      {/* modal del proyecto 5 */}
      <ModalProjects
        estado={estadoModal5}
        cambiarEstado={setestadoModal5}
        titulo={"Mini Proyecto de Control de Gastos"}
        mostrarOverlay={true}
        posicionModal={"center"}
      >
        <Contenido>
          <p>Proyecto haciendose con React</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "2rem",
            }}
          >
            <div>
              <TitleInfo>Front-End</TitleInfo>
              <ul>
                <li>
                  <CuadroInfo>
                    <img src={imgReact} alt="React"></img>React
                  </CuadroInfo>
                </li>
                <li>
                  <CuadroInfo>
                    <img src={imgtailwind} alt="Tailwind"></img>
                    Tailwind
                  </CuadroInfo>
                </li>
              </ul>
            </div>
          </div>

          <Boton onClick={() => setestadoModal5(!estadoModal5)}>Volver</Boton>
        </Contenido>
      </ModalProjects>
      {/* modal del proyecto 6 */}
      <ModalProjects
        estado={estadoModal6}
        cambiarEstado={setestadoModal6}
        titulo={"Mini Proyecto de Criptos value"}
        mostrarOverlay={true}
        posicionModal={"center"}
      >
        <Contenido>
          <p>Proyecto haciendose con React</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "2rem",
            }}
          >
            <div>
              <TitleInfo>Front-End</TitleInfo>
              <ul>
                <li>
                  <CuadroInfo>
                    <img src={imgReact} alt="React"></img>React
                  </CuadroInfo>
                </li>
              </ul>
            </div>
          </div>

          <Boton onClick={() => setestadoModal6(!estadoModal6)}>Volver</Boton>
        </Contenido>
      </ModalProjects>
      {/* modal del proyecto 7 */}
      <ModalProjects
        estado={estadoModal7}
        cambiarEstado={setestadoModal7}
        titulo={"Mini Proyecto de CRM - Clientes"}
        mostrarOverlay={true}
        posicionModal={"center"}
      >
        <Contenido>
          <p>Proyecto haciendose con React + Tailwind + React Router Dom v6</p>
          <p>
            Para ejecutar este proyecto debe instalar json-server usar archivo
            db.json para su fake api - rest
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "2rem",
            }}
          >
            <div>
              <TitleInfo>Front-End</TitleInfo>
              <ul>
                <li>
                  <CuadroInfo>
                    <img src={imgReact} alt="React"></img>React
                  </CuadroInfo>
                </li>
                <li>
                  <CuadroInfo>
                    <img src={imgtailwind} alt="Tailwind"></img>
                    Tailwind
                  </CuadroInfo>
                </li>
                <li>
                  <CuadroInfo>
                    <img src={rrdv6} alt="React Router Dom v6"></img>
                    React Router Dom v6
                  </CuadroInfo>
                </li>
              </ul>
            </div>
          </div>

          <Boton onClick={() => setestadoModal7(!estadoModal7)}>Volver</Boton>
        </Contenido>
      </ModalProjects>
    </div>
  );
};

export default Projects;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
const Boton = styled.button`
  display: block;
  margin-top: 1.7rem;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: red;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    background: #670f22;
  }
`;

const CuadroInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.6rem;
  align-items: center;

  img {
    max-width: 20px;
  }
`;

const TitleInfo = styled.h5`
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  justify-content: center;
`;
