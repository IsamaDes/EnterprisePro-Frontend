import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

// Configure axios base URL
axios.defaults.baseURL = 'https://enterprisepro-backend.onrender.com';

const EmailConfirmation = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        // Use the route as configured in your backend
        const response = await axios.get(`/confirmation/${token}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 200) {
          toast.success('Email confirmed successfully');
          navigate('/login');
        }
      } catch (error) {
        console.error('Detailed confirmation error:', error);
        
        if (axios.isAxiosError(error)) {
          if (error.response) {
            // The request was made and the server responded with a status code
            switch (error.response.status) {
              case 400:
                toast.error('Invalid confirmation token');
                break;
              case 404:
                toast.error('Confirmation link not found or expired');
                break;
              case 500:
                toast.error('Server error during email confirmation');
                break;
              default:
                toast.error('Error confirming email');
            }
          } else if (error.request) {
            // The request was made but no response was received
            toast.error('No response from server. Please check your network connection.');
          } else {
            // Something happened in setting up the request
            toast.error('Error setting up confirmation request');
          }
        }
      }
    };

    if (token) {
      confirmEmail();
    }
  }, [token, navigate]);

  return (
    <div>
      <p>Confirming your email... Please wait.</p>
    </div>
  );
};

export default EmailConfirmation;