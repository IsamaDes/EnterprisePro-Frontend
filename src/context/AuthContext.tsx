import React, { createContext, useState, ReactNode, useContext, FC } from "react";
import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormData {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
  password: string;
}

interface AuthContextType {
  user: any;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  register: (formData: FormData) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const BASE_URL = "http://localhost:5000";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    location: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegistrationSuccess = () => {
    toast.success("Account successfully created");
    alert("Registration successful! Redirecting to login...");
    navigate("/update-information");
  };

  const handleLoginSuccess = (response: any) => {
    setUser(response.data.user);
    localStorage.setItem('token', response.data.token); // Store token in local storage
    toast.success("Login Successful");
    navigate("/company-dashboard");
  };

  const register = async (formData: FormData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/register`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 201) {
        handleRegistrationSuccess();
      }
    } catch (error: any) {
      if (isAxiosError(error) && error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("Error creating account");
      }
      console.error("Error registering user:", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        handleLoginSuccess(response);
      }
    } catch (error) {
      toast.error("Login failed");
      console.error("Error logging in:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');  // Remove the token on logout
    navigate("/login");
  };

  const value = {
    user,
    formData,
    setFormData,
    register,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
