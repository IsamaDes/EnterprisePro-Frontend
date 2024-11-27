import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://enterprisepro-backend.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

const EmailConfirmation = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => { const confirmEmail = async () => { try { const response = await api.get(`/api/confirmation/${token}`); if (response.status === 200) { toast.success('Email confirmed successfully'); navigate('/login'); 
    // Redirect to login page on success 
    } } catch (error) { 
      console.error('Error confirming email:', error); 
      if (axios.isAxiosError(error)) { 
        switch (error.response?.status) { 
          case 400: toast.error('Invalid confirmation token'); 
          break; 
          case 404: toast.error('Confirmation link not found or expired'); 
          break; 
          case 500: toast.error('Server error during email confirmation'); 
          break; 
          default: toast.error(`Unexpected error: ${error.response?.status}`); 
        } 
      } else { 
        toast.error('Error setting up confirmation request');
       }
       }
       }; if (token) { 
        confirmEmail();

        } }, [token, navigate]); 
        return ( <div> 
          <h2>Email Confirmation</h2>
           <p>Processing your confirmation... Please wait.</p> 
        </div> 
        ); 
      }; 
      export default EmailConfirmation