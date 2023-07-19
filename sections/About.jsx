"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const About = () => (
   <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02"></div>
      About section
   </section>
);

export default About;
