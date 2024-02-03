import "./App.css";
import ProjectsPage from "./components/ProjectsPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./home/HomePage";
import Form from "./components/Mitra";

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <span className="logo">
          <img src="" alt="logo" width={"49"} height={"99"} />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Daftar Menu
        </NavLink>
        <NavLink to="/Mitra" className="button rounded">
          Join
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/Mitra" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
