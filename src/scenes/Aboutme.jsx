import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
const Aboutme = () => {
  return (
    <section id="aboutme" className="pt-10 ">
      <div className="md:flex md:justify-between md:gap-8 ">
        <div className="mt-16 md:mt-0">
          <div className="mt-10">
            <img
              className="rounded-2xl h-[300px] lg:h-[600px] mx-auto "
              alt="about me"
              src="assets/aboutme.webp"
            />
          </div>
        </div>
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="font-semibold text-4xl  mt-10">
            About <span className="text-red">Me</span>
          </h2>
          <div className="text-gray-100 ">
            <p className="py-2 font-medium">¡Hola, un gusto me presento!</p>
            <p className="pb-2">
              Soy un{" "}
              <span className="font-semibold">Ingeniero de Sistemas</span> que
              le fascina el mundo de los Sistemas y Tecnologias de la
              Información.
            </p>
            <p className="pb-2">
              Empezé con Redes y Cableado Estructurado de forma FreeLance desde
              el año 2019 para LAN CENTERS y Colegios.
            </p>
            <p className="pb-2">
              Hice Soporte TI desde el año 2020 para todos los funcionarios de
              una Municipalidad distrital y en un Contact Center para 400
              usuarios.
            </p>
            <p className="pb-2">
              Desde el año 2022 estoy enfocado en el Desarrollo Web donde
              trabajo de forma FreeLance para emprendimientos y un E-commerce
              para una franquicia en Perú
            </p>
            <p className="pb-2">
              También me fascina el campo de la investigación por lo que realize
              una Arquitectura VPC en AWS y utilizando la Norma ISO/IEC
              27001:2014 para una entidad pública
            </p>
            <p className="pb-2">
              Y para concluir, deseo realizar mi Maestria en Data Science
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutme;
