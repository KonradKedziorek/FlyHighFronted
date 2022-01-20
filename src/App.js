import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact="exact" path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
