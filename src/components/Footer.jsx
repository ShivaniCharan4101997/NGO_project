import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-bold mb-4 hover:text-orange-400">
            About Us
          </h2>
          <p className="text-sm leading-relaxed">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <motion.div
            className="flex gap-4 mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram />
            </motion.a>
          </motion.div>
        </div>

        {/* Recent Blog */}
        <div>
          <h2 className="text-xl font-bold mb-4 hover:text-orange-400">
            Recent Blog
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Helping Hands in Rural Areas
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How Small Donations Create Big Change
              </a>
            </li>
          </ul>
        </div>

        {/* Site Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 hover:text-orange-400">
            Site Links
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Causes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Have a Question */}
        <div>
          <h2 className="text-xl font-bold mb-4 hover:text-orange-400">
            Have a Question?
          </h2>
          <p className="text-sm">123 Welfare St, Hope City</p>
          <p className="text-sm mt-1">Phone: +91 12345 67890</p>
          <p className="text-sm mt-1">Email: info@welfare.org</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-sm text-gray-400">
        ©2025 All rights reserved | Made with 💖 by{" "}
        <span className="text-white font-semibold">Shivani Charan</span>
      </div>
    </footer>
  );
};

export default Footer;
