import React from "react";
import './App.css';
import Navbar  from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Error from "./Pages/Error";


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>My Project</h1>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/register" element={< Register />} />
        <Route path="/login" element={< Login />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/*" element={< Error />} />
      </Routes>
    </div>
  );
};

export default App;
