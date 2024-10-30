import "./App.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "../Footer";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-[80vw] mt-6 md:mt-12 mb-2">
        <Intro />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
