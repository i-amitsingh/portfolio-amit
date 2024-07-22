import {
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
          Contact Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-green-100 p-4 rounded-lg shadow-md transition-transform duration-300"
          >
            <MdEmail className="text-3xl text-green-500 mr-4" />
            <p className="text-lg text-gray-700">amitmansingh2003@gmail.com</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-green-100 p-4 rounded-lg shadow-md transition-transform duration-300"
          >
            <MdPhone className="text-3xl text-green-500 mr-4" />
            <p className="text-lg text-gray-700">+91 6387388712</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-blue-100 p-4 rounded-lg shadow-md transition-transform duration-300"
          >
            <FaLinkedin className="text-3xl text-blue-500 mr-4" />
            <a
              href="https://www.linkedin.com/in/ermtz"
              className="text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300"
              target="_blank"
            >
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-blue-100 p-4 rounded-lg shadow-md transition-transform duration-300"
          >
            <FaTwitterSquare className="text-3xl text-blue-500 mr-4" />
            <a
              href="https://www.x.com/iamit7245"
              className="text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300"
              target="_blank"
            >
              Twitter
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md transition-transform duration-300"
          >
            <FaGithubSquare className="text-3xl text-gray-800 mr-4" />
            <a
              href="https://www.github.com/i-amitsingh"
              className="text-lg text-gray-800 hover:text-gray-600 transition-colors duration-300"
              target="_blank"
            >
              Github
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-pink-100 p-4 rounded-lg shadow-md transition-transform duration-300"
          >
            <FaInstagramSquare className="text-3xl text-pink-500 mr-4" />
            <a
              href="https://www.instagram.com/iamit7245"
              className="text-lg text-pink-500 hover:text-pink-700 transition-colors duration-300"
              target="_blank"
            >
              Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
