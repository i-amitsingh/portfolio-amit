import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center justify-center px-8 pt-10">
      <section className="text-center py-20">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi 👋, I am Amit Singh
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Full Stack Developer
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="https://leetcode.com/u/I_amitsingh/"
            target="_blank"
            className="px-4 py-2 bg-cyan-700 text-white rounded-lg shadow-md hover:bg-cyan-800 transition"
          >
            Leetcode
          </Link>
          <Link
            to="https://drive.google.com/drive/folders/13CfqSAmqIGui6sNOkE0O3Xy9wNsu06M6?usp=drive_link"
            target="_blank"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 transition"
          >
            Resume
          </Link>
        </motion.div>
      </section>

      <section className="max-w-4xl text-center py-10">
        <p className="text-lg md:text-xl text-gray-600">
          I am a passionate Full Stack Developer with experience in building
          dynamic and responsive web applications. Explore my portfolio to see
          my skills and projects in action.
        </p>
      </section>
    </div>
  );
}

export default Home;
