
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import ChatbotIcon from '../components/ChatbotIcon';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setIsLoading(true);

    // Simulate signup process
    setTimeout(() => {
      // Store user session
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userName', `${formData.firstName} ${formData.lastName}`);
      localStorage.setItem('userPhone', formData.phone);
      localStorage.setItem('signupTime', new Date().toISOString());
      
      // Send welcome email notification (simulation)
      alert(`🎉 Welcome to Finance Fetish! Account created for ${formData.email}. Welcome email with login details sent! Check your inbox! 📧`);
      setIsLoading(false);
      
      // Redirect to home page
      window.location.href = '/';
    }, 2000);
  };

  const handleGoogleSignup = () => {
    // Simulate Google OAuth signup
    alert('Google signup integration would be connected here with Firebase/NextAuth.js');
    
    // Mock successful Google signup
    setTimeout(() => {
      const mockGoogleUser = 'newuser@gmail.com';
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('userEmail', mockGoogleUser);
      localStorage.setItem('signupTime', new Date().toISOString());
      localStorage.setItem('signupMethod', 'google');
      
      alert(`🎉 Google signup successful for ${mockGoogleUser}! Welcome to Finance Fetish! Welcome email sent! 📧`);
      window.location.href = '/';
    }, 2000);
  };

  const handleFacebookSignup = () => {
    // Simulate Facebook OAuth signup
    alert('Facebook signup integration would be connected here with Facebook SDK');
    
    // Mock successful Facebook signup
    setTimeout(() => {
      const mockFbUser = 'newuser@facebook.com';
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('userEmail', mockFbUser);
      localStorage.setItem('signupTime', new Date().toISOString());
      localStorage.setItem('signupMethod', 'facebook');
      
      alert(`🎉 Facebook signup successful for ${mockFbUser}! Welcome to Finance Fetish! Welcome email sent! 📧`);
      window.location.href = '/';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <Sidebar />
      <ChatbotIcon />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="animate-pulse absolute top-20 left-20 text-yellow-400 text-4xl opacity-20">🚀</div>
        <div className="animate-bounce absolute top-40 right-32 text-green-400 text-3xl opacity-20">💎</div>
        <div className="animate-pulse absolute bottom-40 left-32 text-blue-400 text-2xl opacity-20">📊</div>
        <div className="animate-bounce absolute bottom-60 right-20 text-purple-400 text-3xl opacity-20">⭐</div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="text-6xl font-bold font-['Pacifico'] text-yellow-400 mb-4">FF</div>
            <h1 className="text-3xl font-bold text-white mb-2">Join Finance Fetish</h1>
            <p className="text-gray-300">Start your wealth-building journey today!</p>
          </div>

          {/* Signup Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-200 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-200 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="Last name"
                  />
                </div>
              </div>

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
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Enter your phone"
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
                  placeholder="Create password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-200 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Confirm password"
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" required className="w-4 h-4 text-yellow-400 bg-white border-gray-300 rounded focus:ring-yellow-400" />
                <span className="ml-2 text-sm text-gray-200">
                  I agree to the <Link href="/terms" className="text-yellow-400 hover:text-yellow-300 cursor-pointer">Terms of Service</Link> and <Link href="/privacy" className="text-yellow-400 hover:text-yellow-300 cursor-pointer">Privacy Policy</Link>
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:from-green-400 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer whitespace-nowrap"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            {/* Social Signup */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-gray-300">Or sign up with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button 
                  onClick={handleGoogleSignup}
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300/30 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <i className="ri-google-fill text-red-400 w-5 h-5 flex items-center justify-center"></i>
                  <span className="ml-2">Google</span>
                </button>
                <button 
                  onClick={handleFacebookSignup}
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300/30 rounded-lg shadow-sm bg-white/5 text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <i className="ri-facebook-fill text-blue-400 w-5 h-5 flex items-center justify-center"></i>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>
            </div>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Already have an account?{' '}
                <Link href="/login" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors cursor-pointer">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 backdrop-blur rounded-lg p-4">
              <i className="ri-book-open-line text-blue-400 text-xl mb-2 w-5 h-5 flex items-center justify-center mx-auto"></i>
              <p className="text-xs text-gray-300">Premium Courses</p>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-lg p-4">
              <i className="ri-tools-line text-green-400 text-xl mb-2 w-5 h-5 flex items-center justify-center mx-auto"></i>
              <p className="text-xs text-gray-300">Free Tools</p>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-lg p-4">
              <i className="ri-robot-line text-purple-400 text-xl mb-2 w-5 h-5 flex items-center justify-center mx-auto"></i>
              <p className="text-xs text-gray-300">AI Assistant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
