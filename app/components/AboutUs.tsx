'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const timelineEvents = [
    { year: "2020", event: "Founded Finance Fetish with a vision to democratize financial education" },
    { year: "2021", event: "Launched our first comprehensive investment course series" },
    { year: "2022", event: "Introduced advanced financial calculators and planning tools" },
    { year: "2023", event: "Expanded to serve over 50,000 active learners worldwide" },
    { year: "2024", event: "Partnered with leading financial institutions for exclusive content" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Finance Fetish</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering individuals to take control of their financial future through education, tools, and community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Vision */}
          <div className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-eye-fill text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To create a world where everyone has the knowledge and tools necessary to achieve financial independence and build lasting wealth through informed decision-making.
            </p>
          </div>

          {/* Mission */}
          <div className={`text-center transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-target-fill text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide comprehensive, accessible, and practical financial education combined with powerful tools that enable individuals to make smart investment decisions and achieve their financial goals.
            </p>
          </div>

          {/* Timeline */}
          <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-time-fill text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Journey</h3>
            <div className="space-y-4">
              {timelineEvents.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 transform transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.year}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-2">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Active Learners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600">Expert Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">25+</div>
            <div className="text-gray-600">Financial Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
}