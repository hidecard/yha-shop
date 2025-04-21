import { useState } from 'react';
import axios from 'axios';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, data);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      const errorMessage = err.response?.data?.message || `Registration failed: ${err.message}`;
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const login = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, data);
      localStorage.setItem('token', response.data.token);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      const errorMessage = err.response?.data?.message || `Login failed: ${err.message}`;
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return { signup, login, loading, error };
};