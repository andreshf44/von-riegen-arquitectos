import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Studio from "./pages/Studio/Studio";
import Architecture from "./pages/Architecture/Architecture";
import Approach from "./pages/Architecture/Approach";
import Education from "./pages/Architecture/Education";
import Projects from "./pages/Architecture/Projects/ArchitectureProjects";
import ProjectDetail from "./pages/Architecture/Projects/ArchitectureProjectDetail";
import Regularization from "./pages/Regularization/Regularization";
import LandDivision from "./pages/LandDivision/LandDivision";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/estudio" element={<Studio />} />

      <Route path="/arquitectura" element={<Architecture />} />
      <Route path="/arquitectura/enfoque" element={<Approach />} />
      <Route path="/arquitectura/educacion" element={<Education />} />
      <Route path="/arquitectura/proyectos" element={<Projects />} />
      <Route path="/arquitectura/proyectos/:slug" element={<ProjectDetail />}/>

      <Route path="/regularizacion" element={<Regularization />}/>

      <Route path="/division-predios" element={<LandDivision />}/>
    </Routes>
  );
}

export default App;