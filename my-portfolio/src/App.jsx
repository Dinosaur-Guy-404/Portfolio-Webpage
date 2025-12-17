import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import { useMemo, useState } from 'react';
// import ProjectsDashboard from "./pages/ProjectsDashboard";
// import MemoryGame from "./projects/MemoryGame";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const bodyTheme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode]
    );

  const lightTheme = useMemo(() => createTheme({ palette: { mode: "light" } }), []);

  return (
    <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Toolbar />
      <ThemeProvider theme={bodyTheme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<ProjectsDashboard />} />
          <Route path="/projects/memory" element={<MemoryGame />} /> */}
        </Routes>
      <Footer />
      </ThemeProvider>
    </Router>
    </ThemeProvider>
  )
}

export default App
