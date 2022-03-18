import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./components/Pages/SignUpPage";
import LoginPage from "./components/Pages/LoginPage";
import ResetPasswordPage from "./components/Pages/ResetPasswordPage";
import HomePage from "./components/Pages/HomePage";
import EditPersonalDataPage from "./components/Pages/EditPersonalDataPage";
import ChangePasswordPage from "./components/Pages/ChangePasswordPage";


function App() {
  return (
    <nav>
      <BrowserRouter>
        <Routes>
          <Route exact="exact" path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/ResetPassword" element={<ResetPasswordPage />} />
          <Route path="/EditPersonalData" element={<EditPersonalDataPage/>}/>
          <Route path="/ChangePassword" element={<ChangePasswordPage/>}/>
        </Routes>
      </BrowserRouter>
      </nav>
  );
}

export default App;
