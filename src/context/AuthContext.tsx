import React, {createContext, useState, ReactNode, useContext, FC}  from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {toast}  from 'react-toastify';



interface FormData {
    businessName: string,
        contactPerson: string,
        email: string,
        phone: string,
        location: string,
        password: string,
}


interface AuthContextType{
    user: any;

    formData: FormData; 

    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    register: (formData: FormData) => void
    // register: (businessName: string, contactPerson: string, email: string, phone: string, location: string, password: string ) => void;
    login: (email: string, password: string) => void;
    logout:() => void;
    
    }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';


export const AuthProvider: FC<{children: ReactNode}> = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        businessName: "",
        contactPerson: "",
        email: "",
        phone: "",
        location: "",
        password: "",
    })

    const register = async(formData: FormData)=>{
        try {
            const response = await axios.post(
              // "http://localhost:5000/api/auth/register",
              `${BASE_URL}/api/auth/register`,
              formData,
              { headers: { "Content-Type": "application/json" } }
            );
      
            if (response.status === 201) {
              toast.success("Account successfully created");
              alert("Registration successful! Redirecting to login...");
              navigate("/update-information");
            }
          } catch (error: any) {
            toast.error("Error creating account");
            console.error("Error registering user:", error);
          }
    }


    const login = async(email: string, password: string) => {
        try{
            const response = await axios.post(
              //  "http://localhost:5000/api/auth/login",
              // `${BASE_URL}/api/auth/login`,
              `${BASE_URL}/auth/login`,

              {email, password},
              { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200){
                setUser(response.data.user);
                toast.success("Login Successfull");
                navigate("/dashboard")
            }
        }catch(error){
             toast.error("Login failed");
             console.error("Error logging in:", error);

        }
    };


       



    const logout = () => {
        setUser(null);
        navigate("/login");

    }

    const value = {
        user,
        formData,
        setFormData,
        register,
        login,
        logout,
      };

      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

      

}


//Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};