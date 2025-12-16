import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Toolbar } from "@mui/material";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
// import ProjectsDashboard from "./pages/ProjectsDashboard";
// import MemoryGame from "./projects/MemoryGame";

function App() {

  return (
    <Router>
      <Navbar />
      <Toolbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<ProjectsDashboard />} />
        <Route path="/projects/memory" element={<MemoryGame />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
