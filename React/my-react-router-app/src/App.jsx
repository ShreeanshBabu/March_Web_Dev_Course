// React -Router Dom
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React from "react";
import Home from "./HomePage";
import About from "./AboutPage";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App