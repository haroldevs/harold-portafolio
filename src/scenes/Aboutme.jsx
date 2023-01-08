import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
const Aboutme = () => {
  const isScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="aboutme" className="pt-10 ">
      <div className="md:flex md:justify-between md:gap-8 ">
        <div className="mt-16 md:mt-0">
          {isScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
              before:w-full before:h-full "
            >
              <img
                className="z-10 mt-10 w-4/6 rounded-2xl"
                alt="about me"
                src="assets/aboutme.webp"
              />
            </div>
          ) : (
            <img
              className="z-10 rounded-2xl mx-auto w-3/5"
              alt="about me"
              src="assets/aboutme.webp"
            />
          )}
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
          <p className="font-semibold text-4xl  mt-10">
            About <span className="text-red">Me</span>
          </p>
          <p className="mt-6 pb-10">
            Soy un <strong>Ingeniero de Sistemas</strong> apasionado del mundo
            de las tecnologías de la información, desde el año del 2019 empecé
            con Cableado Estructurado para Lan Centers, en el año 2021 seguí con
            SOPORTE TI para una Municipalidad distrital y Contact Center, desde
            el año 2022 inicié en el hermoso de la programación tanto en el
            desarrollo frontend con ReactJS y backend con Django y también en el
            despliegue de soluciones de tecnologías de información utilizando
            AWS y AZURE.
            <br />
            De cada experiencia laboral que he tenido tengo los mejores
            recuerdos, vivencias y aventuras de mi vida profesional porque ante
            eventos de incidentes o problemas, he podido solucionarlo y obtener
            la gratitud de compañeros, jefes y clientes aplicando tanto ética
            profesional y moral como persona.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutme;
