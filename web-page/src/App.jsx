import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import all pages
import Home from "./pages/Home";
import Participations from "./pages/Participations";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import About from "./pages/About";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/participations" element={<Participations/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
  
}

export default App;
