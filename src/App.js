import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import Color from "./components/Color";
import About from "./components/About";
// import Color from "./components/Color";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // we are passing state variable as a prop into the components
  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlt("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlt("Dark mode has been enabled", "success");
    }
  };

  const [Alt, setAlt] = useState(null);
  const showAlt = (message, type) => {
    setAlt({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlt(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About me" Mode={Mode} toggleMode={toggleMode} />
        <Alert Alert={Alt} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlt={showAlt} heading="Enter the text to analyse below" Mode={Mode} />} />  
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
