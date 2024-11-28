// import { useParams, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://enterprisepro-backend.onrender.com',
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// const EmailConfirmation = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => { const confirmEmail = async () => { 
//     try { const response = await api.get(`/api/confirmation/${token}`); 
//     if (response.status === 200) { 
//       toast.success('Email confirmed successfully'); 
//       navigate('/login'); 
//     // Redirect to login page on success 
//     } } catch (error) { 
//       console.error('Error confirming email:', error); 
//       if (axios.isAxiosError(error)) { 
//         switch (error.response?.status) { 
//           case 400: toast.error('Invalid confirmation token'); 
//           break; 
//           case 404: toast.error('Confirmation link not found or expired'); 
//           break; 
//           case 500: toast.error('Server error during email confirmation'); 
//           break; 
//           default: toast.error(`Unexpected error: ${error.response?.status}`); 
//         } 
//       } else { 
//         toast.error('Error setting up confirmation request');
//        }
//        }
//        }; if (token) { 
//         confirmEmail();

//         } }, [token, navigate]); 
//         return ( <div> 
//           <h2>Email Confirmation</h2>
//            <p>Processing your confirmation... Please wait.</p> 
//         </div> 
//         ); 
//       }; 
//       export default EmailConfirmation




import  { useState,  FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from 'react-router-dom';


const EmailConfirmation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate(); // Navigation hook




  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try{
        toast.success('Login successful!');
        navigate('https://enterprisepro-frontend.onrender.com/login')

    }catch(error){
        toast.error('Login failed. Please check your credentials and try again.');
    }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6"> Click to Login</h2>
        <form onSubmit={handleSubmit}>
         
          
          <button type="submit" className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${ isSubmitting ? 'opacity-50 cursor-not-allowed' : '' }`} disabled={isSubmitting} > {isSubmitting ? 'Submitting...' : 'Login'} 

          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EmailConfirmation;
