import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
