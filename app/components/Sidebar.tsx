
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatch by not rendering scroll-dependent styles until mounted
  if (!mounted) {
    return (
      <>
        {/* Top Navigation Bar - Static version for SSR */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center h-20 relative">
              {/* Left Side Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute left-0 text-2xl transition-colors cursor-pointer text-white hover:text-yellow-400"
              >
                <i className="w-6 h-6 flex items-center justify-center ri-menu-line"></i>
              </button>

              {/* Center Logo */}
              <Link href="/" className="flex flex-col items-center">
                <div className="text-3xl font-bold font-['Pacifico'] text-yellow-400">FF</div>
                <span className="text-sm font-semibold font-['Pacifico'] text-white">Finance Fetish</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Sidebar Menu */}
        <div className="fixed inset-0 z-40 opacity-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-2xl transform -translate-x-full">
            <div className="flex flex-col h-full">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-4xl font-bold font-['Pacifico'] mb-2">FF</div>
                    <p className="text-blue-100 font-['Pacifico']">Finance Fetish</p>
                  </div>
                  <button className="text-white hover:text-gray-200 transition-colors cursor-pointer">
                    <i className="ri-close-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto py-6"></div>
              <div className="p-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  © 2024 Finance Fetish. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const menuItems = [
    { name: 'Home', href: '/', icon: 'ri-home-line' },
    { name: 'Courses', href: '/courses', icon: 'ri-book-open-line' },
    { name: 'Tools', href: '/tools', icon: 'ri-tools-line' },
    { name: 'Blogs', href: '/blogs', icon: 'ri-article-line' },
    { name: 'FinancePal AI', href: '/chatbot', icon: 'ri-robot-line' },
    { name: 'Login', href: '/login', icon: 'ri-login-box-line' },
    { name: 'Admin', href: '/admin/login', icon: 'ri-admin-line' }
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-black/30 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center h-20 relative">
            {/* Left Side Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`absolute left-0 text-2xl transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              <i className={`w-6 h-6 flex items-center justify-center ${isOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>

            {/* Center Logo */}
            <Link href="/" className="flex flex-col items-center">
              <div className={`text-3xl font-bold font-['Pacifico'] transition-colors ${
                isScrolled ? 'text-blue-600' : 'text-yellow-400'
              }`}>FF</div>
              <span className={`text-sm font-semibold font-['Pacifico'] transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>Finance Fetish</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar */}
        <div className={`absolute left-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-4xl font-bold font-['Pacifico'] mb-2">FF</div>
                  <p className="text-blue-100 font-['Pacifico']">Finance Fetish</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                >
                  <i className={`${item.icon} text-xl mr-4 w-5 h-5 flex items-center justify-center`}></i>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                © 2024 Finance Fetish. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
