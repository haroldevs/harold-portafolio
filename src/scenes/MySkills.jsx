import LinearGradient from "../components/LinearGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-10 pb-24 ">
      {/* header & image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-20">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-semibold text-4xl mb-5">
            My <span className="text-red">Skills</span>
          </p>
          <LinearGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Mis 3 principales habilidades que sobresalen ante otras son:
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-6 before:-left-10 
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                className="z-10"
                alt="skills"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img className="z-10" alt="skills" src="assets/skills-image.png" />
          )}
        </div>
      </div>
      {/* skills */}
      <div className="md:flex md:justify-between  gap-32 ">
        {/* experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-28">
            <div className="z-10">
              <p className="font-semibold text-5xl">01</p>
              <p className="font-semibold text-3xl mt-3">Experiencia</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-1">
            De cada trabajo he sacado el máximo provecho y se lo que hay que
            hacer para implementarlo o solucionarlo.
          </p>
        </motion.div>

        {/* Innovatite */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-28">
            <div className="z-10">
              <p className="font-semibold text-5xl">02</p>
              <p className="font-semibold text-3xl mt-3">Innovador</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-1">
            Me gusta siempre implementar algo nuevo acerca del mundo de los
            sistemas, aunque no lo pidan. Y si no conozco del tema entonces me
            capacito.
          </p>
        </motion.div>

        {/* Imaginative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-28">
            <div className="z-10">
              <p className="font-semibold text-5xl">03</p>
              <p className="font-semibold text-3xl mt-3">Resiliente</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-1">
            Aprendí de grandes personas como debo afrontar incidentes para
            solucionarlos y fortalecer la seguridad desde la gestión hasta la
            implementación
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default MySkills;
