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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aut,
            aliquam et iusto voluptates possimus, nihil est cumque ab reiciendis
            dolorem obcaecati officiis blanditiis minus nemo quis voluptatem
            harum magnam. Dolores ipsa, eveniet nam expedita rerum aliquid quo
            consequuntur architecto facere facilis tempore unde fugiat
            voluptatibus quos dolore corporis doloribus doloremque nostrum quam
            magnam libero commodi at? Aperiam, repellendus labore. Reprehenderit
            in rem incidunt similique quod sint, repellendus dignissimos. Ea
            quas aliquid natus, porro odit recusandae iusto inventore aut magni
            dicta consequuntur, id animi reprehenderit consequatur repellendus,
            illo ullam amet! Nihil quas velit debitis asperiores repellendus
            earum ad, tenetur recusandae. Deserunt incidunt amet sunt in dicta,
            unde numquam praesentium voluptatem maxime voluptate odio minima,
            perferendis quae molestias asperiores ipsam illum. Cumque
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutme;
