
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  
  const slogans = [
    "Grow Money Wisely",
    "Money Grow Wisely", 
    "Wisely Grow Money",
    "Grow Wisely Money",
    "Money Wisely Grow",
    "Wisely Money Grow"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Finance Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=professional%20financial%20trading%20floor%20with%20multiple%20screens%20showing%20stock%20charts%2C%20graphs%2C%20and%20financial%20data%2C%20modern%20office%20environment%20with%20computers%20and%20monitors%20displaying%20colorful%20market%20analytics%2C%20investment%20banking%20workplace%20with%20blue%20and%20green%20color%20scheme%2C%20high-tech%20financial%20technology%20setup%2C%20clean%20corporate%20atmosphere&width=1920&height=1080&seq=hero_bg_001&orientation=landscape')`
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Logo Section */}
        <div className="mb-16">
          <div className="text-8xl md:text-9xl font-bold font-['Pacifico'] text-yellow-400 mb-4 drop-shadow-2xl">FF</div>
          <h1 className="text-3xl md:text-4xl font-bold font-['Pacifico'] text-white drop-shadow-lg">Finance Fetish</h1>
        </div>

        {/* Dynamic Slogan */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span 
              key={currentSlogan}
              className="inline-block animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 drop-shadow-lg"
            >
              {slogans[currentSlogan]}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Master your financial future with expert guidance, premium courses, and powerful tools designed for success.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer whitespace-nowrap"
          >
            Start Your Journey
          </button>
          <Link 
            href="/courses"
            className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/30 shadow-2xl cursor-pointer whitespace-nowrap inline-block text-center"
          >
            Explore Courses
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50K+</div>
            <div className="text-sm text-gray-300">Happy Learners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">100+</div>
            <div className="text-sm text-gray-300">Premium Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">25+</div>
            <div className="text-sm text-gray-300">Financial Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-sm text-gray-300">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
}
