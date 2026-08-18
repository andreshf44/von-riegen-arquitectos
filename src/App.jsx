import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Studio from "./pages/Studio/Studio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/estudio" element={<Studio />} />
    </Routes>
  );
}

export default App;