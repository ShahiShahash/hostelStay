import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials and authenticate admin here
    // For simplicity, let's assume admin credentials are hardcoded
    if (username === 'dineshjr' && password === 'dineshjr11') {
      // Admin authenticated, navigate to admin dashboard
      navigate('/admin'); // Navigate to admin dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" name="username" type="text" autoComplete="username" required
                     value={username} onChange={(e) => setUsername(e.target.value)}
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                     border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none 
                     focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required
                     value={password} onChange={(e) => setPassword(e.target.value)}
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                     border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none 
                     focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p className="text-red-500">{error}</p>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border 
                        border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" 
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 0a2 2 0 00-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V2a2 2 0 00-2-2zM6 6V4a4 4 0 118 0v2a6 6 0 
                  01-4 5.66V16h4v2H6v-2h4v-4.34A6 6 0 016 6zm2 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
