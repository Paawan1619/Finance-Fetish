
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import ChatbotIcon from '../components/ChatbotIcon';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      // Store user session
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('loginTime', new Date().toISOString());
      
      // Send welcome email notification (simulation)
      alert(`Welcome back! Login successful for ${formData.email}. Welcome email sent! 📧`);
      setIsLoading(false);
      
      // Redirect to home page
      window.location.href = '/';
    }, 1500);
  };

  const handleGoogleLogin = () => {
    // Simulate Google OAuth login
    alert('Google login integration would be connected here with Firebase/NextAuth.js');
    
    // Mock successful Google login
    setTimeout(() => {
      const mockGoogleUser = 'user@gmail.com';
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('userEmail', mockGoogleUser);
      localStorage.setItem('loginTime', new Date().toISOString());
      localStorage.setItem('loginMethod', 'google');
      
      alert(`Google login successful for ${mockGoogleUser}! Welcome email sent! 🎉`);
      window.location.href = '/';
    }, 2000);
  };

  const handleFacebookLogin = () => {
    // Simulate Facebook OAuth login
    alert('Facebook login integration would be connected here with Facebook SDK');
    
    // Mock successful Facebook login
    setTimeout(() => {
      const mockFbUser = 'user@facebook.com';
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('userEmail', mockFbUser);
      localStorage.setItem('loginTime', new Date().toISOString());
      localStorage.setItem('loginMethod', 'facebook');
      
      alert(`Facebook login successful for ${mockFbUser}! Welcome email sent! 🎉`);
      window.location.href = '/';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
      <Sidebar />
      <ChatbotIcon />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="animate-pulse absolute top-20 left-20 text-yellow-400 text-4xl opacity-20">₹</div>
        <div className="animate-bounce absolute top-40 right-32 text-green-400 text-3xl opacity-20">💰</div>
        <div className="animate-pulse absolute bottom-40 left-32 text-blue-400 text-2xl opacity-20">📈</div>
        <div className="animate-bounce absolute bottom-60 right-20 text-purple-400 text-3xl opacity-20">💎</div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="text-6xl font-bold font-['Pacifico'] text-yellow-400 mb-4">FF</div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back!</h1>
            <p className="text-gray-300">Sign in to access your finance dashboard</p>
          </div>

          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-200 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-yellow-400 bg-white border-gray-300 rounded focus:ring-yellow-400" />
                  <span className="ml-2 text-sm text-gray-200">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 px-6 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer whitespace-nowrap"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-gray-300">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button 
                  onClick={handleGoogleLogin}
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300/30 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <i className="ri-google-fill text-red-400 w-5 h-5 flex items-center justify-center"></i>
                  <span className="ml-2">Google</span>
                </button>
                <button 
                  onClick={handleFacebookLogin}
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300/30 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <i className="ri-facebook-fill text-blue-400 w-5 h-5 flex items-center justify-center"></i>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Don't have an account?{' '}
                <Link href="/signup" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors cursor-pointer">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/5 backdrop-blur rounded-lg p-4">
              <i className="ri-shield-check-line text-green-400 text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
              <p className="text-sm text-gray-300">Secure Login</p>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-lg p-4">
              <i className="ri-customer-service-2-line text-blue-400 text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
              <p className="text-sm text-gray-300">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
