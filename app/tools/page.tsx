'use client';

import Sidebar from '../components/Sidebar';
import Link from 'next/link';

export default function Tools() {
  const freeTools = [
    {
      id: 1,
      name: "SIP Calculator",
      description: "Calculate returns on your systematic investment plans",
      icon: "ri-calculator-line",
      href: "/tools/sip-calculator"
    },
    {
      id: 2,
      name: "EMI Calculator",
      description: "Calculate your loan EMIs and plan your finances",
      icon: "ri-home-line",
      href: "/tools/emi-calculator"
    },
    {
      id: 3,
      name: "Inflation Calculator",
      description: "Understand the impact of inflation on your money",
      icon: "ri-line-chart-line",
      href: "/tools/inflation-calculator"
    }
  ];

  const premiumTools = [
    {
      id: 4,
      name: "Portfolio Analyzer",
      description: "Advanced portfolio analysis and optimization",
      icon: "ri-pie-chart-line",
      price: "₹999",
      href: "/payment?type=tool&id=4&price=999"
    },
    {
      id: 5,
      name: "Stock Screener Pro",
      description: "Advanced stock screening with 50+ parameters",
      icon: "ri-search-line",
      price: "₹1,499",
      href: "/payment?type=tool&id=5&price=1499"
    },
    {
      id: 6,
      name: "Risk Assessment Tool",
      description: "Comprehensive risk analysis for your investments",
      icon: "ri-shield-check-line",
      price: "₹799",
      href: "/payment?type=tool&id=6&price=799"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Sidebar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Tools</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful calculators and analyzers to make smarter financial decisions
            </p>
          </div>

          {/* Free Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-green-600">Free</span> Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {freeTools.map((tool) => (
                <Link key={tool.id} href={tool.href} className="block bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 cursor-pointer">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className={`${tool.icon} text-white text-2xl w-6 h-6 flex items-center justify-center`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{tool.description}</p>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold inline-block">
                      Free to Use
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Premium Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-blue-600">Premium</span> Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {premiumTools.map((tool) => (
                <Link key={tool.id} href={tool.href} className="block bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 cursor-pointer">
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className={`${tool.icon} text-white text-2xl w-6 h-6 flex items-center justify-center`}></i>
                      </div>
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        PRO
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{tool.description}</p>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{tool.price}</div>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold">
                      Buy Now
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tool Features */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Our Tools?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-speed-line text-green-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Lightning Fast</h4>
                <p className="text-gray-600 text-sm">Get instant results with our optimized calculators</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-blue-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Highly Accurate</h4>
                <p className="text-gray-600 text-sm">Precise calculations based on latest market data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-purple-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Mobile Friendly</h4>
                <p className="text-gray-600 text-sm">Use on any device, anywhere, anytime</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-download-line text-yellow-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Export Reports</h4>
                <p className="text-gray-600 text-sm">Download detailed reports and analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}