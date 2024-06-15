import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main-container">
      <Home />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
