"use client"

import { motion } from "framer-motion"

import { TypingText } from "@/components"
import { fadeIn, staggerContainer } from "@/utils/motion"

export default function About() {
   return (
      <section className={`paddings relative z-10`}>
         <div className="gradient-02" />
         <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className={`inner-width mx-auto flex-center flex-col`}>
            <TypingText title="| About Metaversus" textStyles="text-center" />

            <motion.p
               variants={fadeIn("up", "tween", 0.2, 1)}
               className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white leading-[54px]">
               <span className="font-extrabold text-white">Metaverse </span>
               is a new thing in the future, where you can enjoy the virtual world by feeling like it&apos;s really
               real, you can feel what you feel in this metaverse world, because this is really the{" "}
               <span className="font-extrabold text-white">madness of the metaverse </span> of today, using only
               <span className="font-extrabold text-white"> VR</span> devices you can easily explore the metaverse world
               you want, turn your dreams into reality. Let&apos;s explore the madness of the metaverse by scrolling
               down
            </motion.p>

            <motion.img
               variants={fadeIn("up", "tween", 0.3, 1)}
               src="/arrow-down.svg"
               alt="arrow down"
               className="w-[18px] h-[28px] object-contain mt-[28px]"
            />
         </motion.div>
      </section>
   )
}
