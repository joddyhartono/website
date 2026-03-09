import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import projects from "./data/projects.js";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="container mx-auto p-6">
      <Hero />
      <About />
      <Experience projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
