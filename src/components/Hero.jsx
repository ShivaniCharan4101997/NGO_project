import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-screen bg-[url('/images/bg_1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl"
        >
          Doing Nothing is Not An Option of Our Life
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
