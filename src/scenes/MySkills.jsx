import LinearGradient from "../components/LinearGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* header & image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            tempore dignissimos ad
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
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
      <div className="md:flex md:justify-between mt-16 gap-32">
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-semibold text-5xl">01</p>
              <p className="font-semibold text-3xl mt-3">Experience</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            rem totam eos molestias,
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-semibold text-5xl">02</p>
              <p className="font-semibold text-3xl mt-3">Innovatative</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            rem totam eos molestias,
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-semibold text-5xl">03</p>
              <p className="font-semibold text-3xl mt-3">Imaginative</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            rem totam eos molestias,
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default MySkills;