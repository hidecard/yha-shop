import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/Navbar';

function VerifyEmail() {
  const { token } = useParams();
  const { verifyEmail } = useAuth();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      try {
        const response = await verifyEmail(token);
        setMessage(response.message);
        setTimeout(() => navigate('/signin'), 3000);
      } catch (err) {
        setMessage(err.message || 'Verification failed');
      }
    };
    verify();
  }, [token, verifyEmail, navigate]);

  return (
    <div className="min-h-screen bg-yha-gray-light">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-yha-orange mb-6">Email Verification</h2>
          <p className="text-yha-gray">{message || 'Verifying your email...'}</p>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;