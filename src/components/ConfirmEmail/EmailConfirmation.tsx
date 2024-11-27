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

  useEffect(() => {
    const confirmEmail = async () => {
      console.log('Confirmation Token:', token);
      console.log('Full URL:', `/api/confirmation/${token}`);

      try {
        const response = await api.get(`/api/confirmation/${token}`);

        console.log('Full Response:', response);

        if (response.status === 200) {
          toast.success('Email confirmed successfully');
          navigate('/login');
        }
      } catch (error) {
        console.error('Full Error Object:', error);

        if (axios.isAxiosError(error)) {
          console.error('Axios Error Details:', {
            status: error.response?.status,
            data: error.response?.data,
            headers: error.response?.headers
          });

          if (error.response) {
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
                toast.error(`Unexpected error: ${error.response.status}`);
            }
          } else if (error.request) {
            toast.error('No response from server. Check network connection.');
            console.error('Request made but no response:', error.request);
          } else {
            toast.error('Error setting up confirmation request');
            console.error('Error setting up request:', error.message);
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
      <h2>Email Confirmation</h2>
      <p>Processing your confirmation... Please wait.</p>
    </div>
  );
};

export default EmailConfirmation;