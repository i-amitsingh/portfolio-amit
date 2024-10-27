import "./App.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-[80vw] mt-12">
        <Intro />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
