'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import ChatbotIcon from '../components/ChatbotIcon';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate password reset process
    setTimeout(() => {
      setIsEmailSent(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 relative overflow-hidden">
      <Sidebar />
      <ChatbotIcon />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="animate-pulse absolute top-20 left-20 text-yellow-400 text-4xl opacity-20">🔑</div>
        <div className="animate-bounce absolute top-40 right-32 text-green-400 text-3xl opacity-20">📧</div>
        <div className="animate-pulse absolute bottom-40 left-32 text-blue-400 text-2xl opacity-20">🔒</div>
        <div className="animate-bounce absolute bottom-60 right-20 text-purple-400 text-3xl opacity-20">✨</div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="text-6xl font-bold font-['Pacifico'] text-yellow-400 mb-4">FF</div>
            <h1 className="text-3xl font-bold text-white mb-2">Forgot Password?</h1>
            <p className="text-gray-300">Don't worry, we'll help you reset it!</p>
          </div>

          {/* Reset Form or Success Message */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            {!isEmailSent ? (
              <form onSubmit={handleResetPassword} className="space-y-6">
                <div className="text-center mb-6">
                  <i className="ri-mail-line text-4xl text-yellow-400 mb-4 w-10 h-10 flex items-center justify-center mx-auto"></i>
                  <p className="text-gray-200">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer whitespace-nowrap"
                >
                  {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-check-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Check Your Email!</h2>
                <p className="text-gray-200 mb-6">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className="text-gray-300 text-sm mb-6">
                  Don't see the email? Check your spam folder or try again.
                </p>
                <button
                  onClick={() => setIsEmailSent(false)}
                  className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors cursor-pointer"
                >
                  Try Different Email
                </button>
              </div>
            )}

            {/* Back to Login */}
            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Remember your password?{' '}
                <Link href="/login" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors cursor-pointer">
                  Back to Login
                </Link>
              </p>
            </div>
          </div>

          {/* Help Options */}
          <div className="mt-8 bg-white/5 backdrop-blur rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Need More Help?</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center text-gray-300">
                <i className="ri-customer-service-2-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                <span>Contact Support: support@financefetish.com</span>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <i className="ri-phone-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                <span>Call us: +91-9876543210</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}