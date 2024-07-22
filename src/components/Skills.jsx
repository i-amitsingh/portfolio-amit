import { motion } from "framer-motion";
import { SiCplusplus } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  // FaJava,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  // SiPostgresql,
  // SiDocker,
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="w-screen mx-auto bg-white p-8">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">
              Frontend
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <SkillCard
                icon={<FaHtml5 className="text-orange-500" />}
                name="HTML"
              />
              <SkillCard
                icon={<FaCss3Alt className="text-blue-500" />}
                name="CSS"
              />
              <SkillCard
                icon={<FaJsSquare className="text-yellow-500" />}
                name="JavaScript"
              />
              <SkillCard
                icon={<FaReact className="text-blue-500" />}
                name="React.JS"
              />
              <SkillCard
                icon={<RiNextjsFill className="text-black" />}
                name="Next.JS"
              />
              <SkillCard
                icon={<RiTailwindCssFill className="text-cyan-600" />}
                name="Tailwind CSS"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-green-700">
              Backend
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <SkillCard
                icon={<FaNodeJs className="text-green-500" />}
                name="Node.js"
              />
              <SkillCard
                icon={<SiExpress className="text-black" />}
                name="Express.js"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-red-700">
              Database
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <SkillCard
                icon={<FaDatabase className="text-gray-700" />}
                name="SQL"
              />
              <SkillCard
                icon={<SiMongodb className="text-green-500" />}
                name="MongoDB"
              />
              {/* <SkillCard
                icon={<SiPostgresql className="text-blue-500" />}
                name="PostgreSQL"
              /> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-purple-700">
              Programming Languages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <SkillCard
                icon={<FaJsSquare className="text-yellow-500" />}
                name="JavaScript"
              />
              <SkillCard
                icon={<SiCplusplus className="text-blue-500" />}
                name="C++"
              />
              {/* <SkillCard
                icon={<FaJava className="text-red-500" />}
                name="Java"
              /> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-teal-700">Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {/* <SkillCard
                icon={<SiDocker className="text-blue-500" />}
                name="Docker"
              /> */}
              <SkillCard
                icon={<SiGithub className="text-black" />}
                name="GitHub"
              />
              <SkillCard
                icon={<SiVisualstudiocode className="text-blue-500" />}
                name="VS Code"
              />
              <SkillCard
                icon={<SiPostman className="text-orange-500" />}
                name="Postman"
              />
              <SkillCard
                icon={<SiMongodb className="text-green-500" />}
                name="MongoDB Compass"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const SkillCard = ({ icon, name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300"
    >
      <p className="text-4xl">{icon}</p>
      <p className="mt-4 font-medium text-center text-lg text-gray-800">
        {name}
      </p>
    </motion.div>
  );
};

export default Skills;
