import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative h-screen bg-[url('/images/bg_1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="py-16 font-medium text-6xl w-2xl leading-tight"
        >
          Doing Nothing is Not An Option of Our Life
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
