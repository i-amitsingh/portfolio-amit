import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const getLinkClasses = (path) =>
    `hover:scale-105 transition-transform font-medium ${
      location.pathname === path ? "text-cyan-700" : "text-gray-700"
    }`;

  return (
    <nav className="flex w-screen px-6 py-4 justify-between items-center bg-white shadow-md fixed top-0 z-10">
      <div className="text-3xl text-cyan-700 cursor-pointer">
        <Link to="/" className="logo">
          Amit Singh
        </Link>
      </div>
      <ul className="hidden md:flex gap-6 text-lg">
        <li className={getLinkClasses("/about")}>
          <Link to="/about">About</Link>
        </li>
        <li className={getLinkClasses("/skills")}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={getLinkClasses("/projects")}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={getLinkClasses("/contact")}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="md:hidden">
        <button
          className="text-cyan-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md hidden flex-col gap-3 p-6 text-lg"
        id="mobileMenu"
      >
        <li className={getLinkClasses("/about")}>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li className={getLinkClasses("/skills")}>
          <Link to="/skills" onClick={toggleMenu}>
            Skills
          </Link>
        </li>
        <li className={getLinkClasses("/projects")}>
          <Link to="/projects" onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li className={getLinkClasses("/contact")}>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}

export default NavBar;
