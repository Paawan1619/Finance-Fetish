
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Admin credentials
  const ADMIN_CREDENTIALS = {
    username: 'admin@financefetish.com',
    password: 'FF@2024Admin'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    setTimeout(() => {
      if (credentials.username === ADMIN_CREDENTIALS.username && 
          credentials.password === ADMIN_CREDENTIALS.password) {
        // Store admin session
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminLoginTime', new Date().toISOString());
        localStorage.setItem('adminEmail', credentials.username);
        
        // Send welcome email notification (simulation)
        alert(`Welcome Admin! Login successful. Welcome email sent to ${credentials.username}! 📧`);
        router.push('/admin');
      } else {
        setError('Invalid credentials. Please check your username and password.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
      <Sidebar />
      
      {/* Finance Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=secure%20financial%20data%20center%20with%20computer%20servers%2C%20modern%20banking%20technology%20infrastructure%2C%20cybersecurity%20systems%20with%20blue%20and%20green%20digital%20patterns%2C%20professional%20IT%20security%20environment%2C%20encrypted%20data%20protection%20setup&width=1920&height=1080&seq=admin_bg_001&orientation=landscape')`
        }}
      ></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="text-6xl font-bold font-['Pacifico'] text-yellow-400 mb-4">FF</div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
            <p className="text-gray-300">Secure access to Finance Fetish dashboard</p>
          </div>

          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-200 mb-2">
                  Admin Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Enter admin username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-200 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Enter admin password"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:from-red-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer whitespace-nowrap"
              >
                {isLoading ? 'Authenticating...' : 'Access Admin Panel'}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
              <p className="text-yellow-200 text-xs text-center font-semibold">
                Demo Credentials:
              </p>
              <p className="text-yellow-100 text-xs text-center mt-1">
                Username: admin@financefetish.com<br />
                Password: FF@2024Admin
              </p>
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/5 backdrop-blur rounded-lg p-4">
              <i className="ri-shield-check-line text-green-400 text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
              <p className="text-sm text-gray-300">Encrypted Login</p>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-lg p-4">
              <i className="ri-eye-line text-blue-400 text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
              <p className="text-sm text-gray-300">Access Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
