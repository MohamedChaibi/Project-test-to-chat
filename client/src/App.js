import React, { useEffect } from "react";
import './App.css';
import Navbar  from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import { useDispatch } from "react-redux";
import { current } from "./JS/Actions/user"
import ProductList from "./Components/ProductList";


function App() {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch ()
  useEffect(() => {
    if (token) dispatch(current())
  }, [dispatch, token]);
  
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/register" element={< Register />} />
        <Route path="/login" element={< Login />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/products" element={< ProductList />} />
        <Route path="/*" element={< Error />} />
      </Routes>
    </div>
  );
};

export default App;
