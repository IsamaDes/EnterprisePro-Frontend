import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'; // Import axios

const EmailConfirmation = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const response = await axios.get(`/confirmation/${token}`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
        if (response.status === 200) {
          toast.success('Email confirmed successfully');
          navigate('/login'); // Redirect to login page
        } else {
          toast.error('Invalid or expired token');
        }
      } catch (error) {
        console.error('Error confirming email:', error); // Log error for debugging
        toast.error('Error confirming email');
      }
    };

    if (token) {
      confirmEmail();
    }
  }, [token, navigate]); // Add navigate to the dependency array

  return <div>Confirming your email...</div>;
};

export default EmailConfirmation;
