import React, { useEffect, useState } from "react";
import { FaHandHoldingHeart, FaUserFriends, FaDonate } from "react-icons/fa";
import { motion } from "framer-motion";

const Achievements = () => {
  const [count, setCount] = useState(0);
  const target = 1432800;

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(Math.floor(duration / target), 1);

    const counter = setInterval(() => {
      start += Math.floor(target / (duration / stepTime));
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-orange-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Achievement */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600">Served Over</p>
          <motion.h1
            className="text-5xl font-bold text-orange-600"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {count.toLocaleString()}
          </motion.h1>
          <p className="text-gray-600 text-lg mt-2">
            Children in 190 countries in the world
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 shadow-md rounded-lg"
          >
            <FaDonate className="text-4xl text-orange-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Donate Money</h2>
            <p className="text-gray-600">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 shadow-md rounded-lg"
          >
            <FaUserFriends className="text-4xl text-orange-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Be a Volunteer</h2>
            <p className="text-gray-600">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 shadow-md rounded-lg"
          >
            <FaHandHoldingHeart className="text-4xl text-orange-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Make Donation</h2>
            <p className="text-gray-600">
              Even the all-powerful Pointing has no control about the blind
              texts. It is an almost unorthographic.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
