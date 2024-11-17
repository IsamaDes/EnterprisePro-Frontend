// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from "./pages/HomePage";
// import UpdateInformationPage from "./pages/UpdateInfoPage";
// import "./App.css";
// import SignupPage from "./pages/SignupPage";
// import KycPage from "./pages/KycPage";
// import DirectorDetailsPage from "./pages/DirectorDetailsPage";
// import BusinessDashboardPage from "./pages/BusinessDashboardPage";
// import CompanyDashboardPage from "./pages/CompanyDashboardPage";
// import { AuthProvider } from "./context/AuthContext";  // Import AuthProvider

// const App: React.FC = () => {
//   return (
//     <AuthProvider>
//      <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/register" element={<SignupPage />} />
//         <Route path="/update-information" element={<UpdateInformationPage />} />
//         <Route path="/director-information" element={<DirectorDetailsPage/>} />
//         <Route path="/dashboard" element={<CompanyDashboardPage />} />
//         <Route path="/business-dashboard" element={<BusinessDashboardPage />} />
//       <Route path="/kyc" element={<KycPage />} />
//     </Routes>
//     </Router>
//   </AuthProvider>
//   );
// };

// export default App;




import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import UpdateInformationPage from "./pages/UpdateInfoPage";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import KycPage from "./pages/KycPage";
import DirectorDetailsPage from "./pages/DirectorDetailsPage";
import BusinessDashboardPage from "./pages/BusinessDashboardPage";
import CompanyDashboardPage from "./pages/CompanyDashboardPage";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/Login/Login";
import AdminDetailsPage from "./pages/AdminDetailsPage";

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
          <Route path="/dashboard" element={<CompanyDashboardPage />} />
          <Route path="/business-dashboard" element={<BusinessDashboardPage />} />
          <Route path="/kyc" element={<KycPage />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;