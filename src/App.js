import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import Alert from "./Components/Alert"
import React, { useDebugValue, useReducer, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [label, setLabel] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      setLabel("dark")
      showAlert("Success!", "Light mode enabled.")
    }
    else {
      setMode("dark")
      setLabel("light")
      showAlert("Success!", "Dark mode enabled.")
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {

    setAlert(
      {
        msg: message,
        type: type
      }
    )

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} label={label} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextArea heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;