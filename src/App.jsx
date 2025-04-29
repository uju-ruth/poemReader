import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RegisterPage from "./pages/AuthRegister";
import LoginPage from "./pages/AuthLogin";
import HomePage from "./pages/homePage";
import Subscription from "./pages/subscription";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
