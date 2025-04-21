import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/Navbar';

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, loading, error } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await signup(data);
      console.log('SignUp response:', response);
      navigate('/signin');
    } catch (err) {
      console.error('SignUp error:', err.message);
    }
  };

  return (
    <div className="min-h-screen bg-yha-gray-light">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-yha-orange mb-6 text-center">Sign Up</h2>
          {error && <p className="text-yha-orange mb-4 text-center">{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-yha-gray mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yha-orange ${errors.name ? 'border-yha-orange' : 'border-yha-gray-light'}`}
              />
              {errors.name && <p className="text-yha-orange mt-1">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-yha-gray mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yha-orange ${errors.email ? 'border-yha-orange' : 'border-yha-gray-light'}`}
              />
              {errors.email && <p className="text-yha-orange mt-1">{errors.email.message}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-yha-gray mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yha-orange ${errors.password ? 'border-yha-orange' : 'border-yha-gray-light'}`}
              />
              {errors.password && <p className="text-yha-orange mt-1">{errors.password.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yha-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition disabled:bg-orange-400"
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;