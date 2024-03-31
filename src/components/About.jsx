import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Tech from "./Tech";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>A quick intro</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello! 👋 My name is Anthony and I'm a skilled software engineer with
        years of experience. I've worked with both frontend frameworks like
        ReactJS, and NextJS but I've also spent a good portion developing on the
        backend with languages like Python, Java, and Go. I'm always interested
        in solving difficult problems and welcome all collaboration.
      </motion.p>
      <Tech />
    </>
  );
};

export default SectionWrapper(About, "about");
