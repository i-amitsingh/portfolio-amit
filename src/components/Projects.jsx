import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Medium",
    description:
      "A blogging platform enabling users to create, edit, and delete posts. Implemented secure authentication using JWT, developed RESTful APIs, and designed a responsive interface.",
    techStack: ["React.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://medium-395q.vercel.app/",
    githubLink: "https://github.com/i-amitsingh/medium",
  },
  {
    title: "Music Academy",
    description:
      "A dynamic music academy website with server-side rendering, a cohesive design, and engaging animations.",
    techStack: ["Next.js", "Tailwind CSS", "Aceternity UI"],
    liveLink: "https://music-school-academy.vercel.app/",
    githubLink: "https://github.com/i-amitsingh/music-academy",
  },
  {
    title: "HooBank",
    description:
      "A modern banking interface with a modular codebase, cohesive styling, and engaging user interactions.",
    techStack: ["React.js", "Tailwind CSS"],
    liveLink: "https://hoobank-ui-project.netlify.app/",
    githubLink: "https://github.com/i-amitsingh/hoobank",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application fetching real-time data from OpenWeatherMap API and displaying current conditions and forecasts.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://i-amitsingh.github.io/weather_app/",
    githubLink: "https://github.com/i-amitsingh/weather_app",
  },
];

function Projects() {
  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block bg-cyan-700 text-white px-3 py-1 my-1 rounded-full text-sm mr-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition"
                >
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
