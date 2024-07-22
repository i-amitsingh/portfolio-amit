import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto p-8">
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About Me
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            Hi 👋, I am Amit Singh, I am an Electronics and Communication
            Engineering (ES & IoT) student at the{" "}
            <span className="font-semibold italic text-blue-500">
              Indian Institute of Information Technology, Ranchi
            </span>
            , with a CGPA of 8.58. Proficient in C++ and JavaScript, I have
            honed my skills through hands-on experience with a wide range of
            technologies and frameworks, including React.js, Node.js, Next.js,
            and MongoDB.
            <p className="text-lg text-gray-700 leading-relaxed mb-4 mt-4">
              I have successfully led and contributed to several projects, such
              as a robust blogging platform, a dynamic music academy website,
              and an engaging weather app, which showcase my expertise in both
              frontend and backend development. My projects have involved
              implementing secure authentication systems, designing responsive
              user interfaces, and developing efficient RESTful APIs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              As the Lead of the Product Design & Management Wing at the House
              of Geeks, I have demonstrated strong leadership and mentoring
              abilities, managing large-scale hackathons and organizing
              workshops to foster innovation and skill development among my
              peers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              My passion for technology and commitment to continuous learning
              drive me to take on new challenges and contribute effectively to
              any team.
            </p>
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Education
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">
              Bachelor of Technology in ECE (ES & IoT)
            </h3>
            <p className="text-lg text-gray-600">
              Indian Institute of Information Technology Ranchi, 2021 - 2025
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                Graphic Designer Intern
              </h3>
              <p className="text-lg text-gray-600">WOOHMAMA</p>
              <p className="text-gray-700 mt-2">
                Contributed to brand strategy through remote collaboration,
                delivering high-quality designs aligned with communication
                goals.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;
