import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience.jsx";
import jobs from "./data/jobs.js";
import ProjectExperience from "./components/ProjectExperience.jsx";
import projects from "./data/projects.js";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="container mx-auto p-6">
      <Hero />
      <About />
      <WorkExperience jobs={jobs} />
      <ProjectExperience projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
