import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialIcons from "../components/SocialIcons";

const Landing = ({ setpageselected }) => {
  const isScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* image section */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isScreens ? (
          <div className="relative z-0 ml-5 before:absolute before:-top-20 before:-left-10 before:rounded-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-gray-700 before:z-[-1]">
            <img
              className="hover:filter hover:saturate-100 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]  rounded-full"
              alt="profile"
              src="assets/profile-image.webp"
            />
          </div>
        ) : (
          <img
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full"
            alt="profile"
            src="assets/profile-image.webp"
          />
        )}
      </div>

      {/* main section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* heading section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl  z-10 text-center md:text-start">
            Harold {""}
            <span
              className="xs:relative xs:text-red xs:font-semibold z-20 
              before:absolute before:-left-[36px] before:-top-[70px] before:z-[-1] ml-1 "
            >
              Galdo
            </span>
          </p>
          <p className="mt-10 mb-1 text-sm text-center md:text-start">
            Ingeniero de Sistemas con experiencia en Soporte TI y Desarrollador
            Web Full Stack. Certificado con:
          </p>
          <p className="text-gray-400 ">
            CCNA 1 y 2 by Cisco | Devops y Cloud Computing en Platzi | AZ-900 by
            Microsoft | Desarrollador Full-Stack por Tecsup
          </p>
        </motion.div>
        {/* call to actions */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-black rounded-sm py-3 px-7 font-semibold hover:text-red transition duration-500"
            onClick={() => setpageselected("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setpageselected("contact")}
            href="#contact"
          >
            <div className="bg-black hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialIcons />
        </motion.div>
      </div>
    </section>
  );
};
export default Landing;
