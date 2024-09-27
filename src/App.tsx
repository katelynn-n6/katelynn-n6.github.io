import "./App.css";
import NavBar from "./NavBar";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import SiteFooter from "./SiteFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <SiteFooter />
    </>
  );
}

export default App;
