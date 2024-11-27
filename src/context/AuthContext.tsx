import { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextProps {
  user: any;
  login: (email: string, password: string) => Promise<void>
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const login = async(email: string, password: string) => {
      try{
       const response = await axios.post( '/api/auth/login', {email, password});
       setUser(response.data.user);

      }catch(error){
       console.error('Login Failed', error);
       throw error;
      }

  }


  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
