// ConfirmEmail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const ConfirmEmail = () => {
  const { token } = useParams(); // Extract token from URL
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const response = await fetch(`/confirmation/${token}`, {
          method: 'GET', // Explicitly set the method to GET
        });
        if (response.ok) {
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

export default ConfirmEmail;
