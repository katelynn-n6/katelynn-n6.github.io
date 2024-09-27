import "./App.css";
import NavBar from "./NavBar";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import SiteFooter from "./SiteFooter";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
      <SiteFooter />
    </>
  );
}

export default App;
