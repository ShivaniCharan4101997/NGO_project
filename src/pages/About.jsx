import React from "react";
import { motion } from "framer-motion"; // ✅ Correct import
import Container from "../ui/Container";

const About = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[75vh] bg-[url('/images/bg_6.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* About Content Section */}
      <Container>
        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/bg_3.jpg"
              alt="About"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              Welcome to Welfare
            </h2>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Established Since 1898
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
              <br />
              <br />
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and". But nothing the copy said could convince her and so it
              didn’t take long until a few insidious Copy Writers ambushed her,
              made her drunk with Longe and Parole and dragged her into their
              agency, where they abused her.
            </p>
          </motion.div>
        </section>
      </Container>
    </div>
  );
};

export default About;
