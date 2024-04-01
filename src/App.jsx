import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Project from "./components/Project/project";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Project></Project>
    </>
  );
}

export default App;
