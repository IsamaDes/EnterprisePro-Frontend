import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import HomePage from "./pages/HomePage";
import UpdateInformationPage from "./pages/UpdateInfoPage";
import SignupPage from "./pages/SignupPage";
import DirectorDetailsPage from "./pages/DirectorDetailsPage";
import BusinessDashboardPage from "./pages/BusinessDashboardPage";
import CompanyDashboardPage from "./pages/companyPages/CompanyDashboardPage";
import { AuthProvider } from "./context/AuthContext";
import AdminDetailsPage from "./pages/AdminDetailsPage";
import SettingsPage from "./pages/companyPages/SettingsPage";
import CompanyKycPage from "./pages/companyPages/CompanyKycPage";
import EmailConfirmation from "./components/ConfirmEmail/EmailConfirmation";
import ConfirmEmail from "./components/ConfirmEmail/ConfirmEmail";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/update-information" element={<UpdateInformationPage />} />
          <Route path="/director-details" element={<DirectorDetailsPage/>} />
          <Route path="/admin-details" element={<AdminDetailsPage/>} />
          <Route path="/company-dashboard" element={<CompanyDashboardPage />} />
          <Route path="/business-dashboard" element={<BusinessDashboardPage />} />
          <Route path="/kyc" element={<CompanyKycPage />} />
          <Route path="/company-settings" element={<SettingsPage />} />

          <Route path="/confirmation/:token" element={<EmailConfirmation />} />  
          <Route path="/confirm-email" element={<ConfirmEmail/>} />          
      

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

