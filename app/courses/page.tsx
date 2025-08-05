'use client';

import Sidebar from '../components/Sidebar';
import Link from 'next/link';

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Stock Market Fundamentals",
      price: "₹2,999",
      originalPrice: "₹5,999",
      duration: "8 weeks",
      level: "Beginner",
      students: "2,500+",
      rating: 4.8,
      image: "https://readdy.ai/api/search-image?query=Modern%20stock%20market%20education%20course%20with%20charts%20graphs%20and%20financial%20data%2C%20professional%20learning%20environment%20with%20Indian%20currency%20symbols&width=600&height=400&seq=course1&orientation=landscape",
      description: "Master the basics of stock market investing with comprehensive lessons on analysis, portfolio building, and risk management."
    },
    {
      id: 2,
      title: "Mutual Funds Mastery",
      price: "₹2,499",
      originalPrice: "₹4,999",
      duration: "6 weeks",
      level: "Beginner",
      students: "3,200+",
      rating: 4.9,
      image: "https://readdy.ai/api/search-image?query=Mutual%20funds%20investment%20education%20with%20diverse%20portfolio%20visualization%2C%20Indian%20financial%20market%20focus%20with%20rupee%20symbols&width=600&height=400&seq=course2&orientation=landscape",
      description: "Learn how to build wealth through systematic mutual fund investments and SIP strategies tailored for Indian investors."
    },
    {
      id: 3,
      title: "Cryptocurrency Trading",
      price: "₹3,999",
      originalPrice: "₹7,999",
      duration: "10 weeks",
      level: "Advanced",
      students: "1,800+",
      rating: 4.7,
      image: "https://readdy.ai/api/search-image?query=Cryptocurrency%20trading%20education%20with%20Bitcoin%20charts%20and%20digital%20currency%20analysis%2C%20modern%20fintech%20learning%20environment&width=600&height=400&seq=course3&orientation=landscape",
      description: "Advanced course on cryptocurrency trading, blockchain technology, and digital asset portfolio management."
    },
    {
      id: 4,
      title: "Personal Finance Planning",
      price: "₹1,999",
      originalPrice: "₹3,999",
      duration: "5 weeks",
      level: "Beginner",
      students: "4,100+",
      rating: 4.9,
      image: "https://readdy.ai/api/search-image?query=Personal%20finance%20planning%20education%20with%20budget%20charts%20savings%20goals%20and%20Indian%20family%20financial%20planning%20concepts&width=600&height=400&seq=course4&orientation=landscape",
      description: "Complete guide to personal financial planning, budgeting, saving strategies, and wealth building for Indians."
    },
    {
      id: 5,
      title: "Real Estate Investment",
      price: "₹3,499",
      originalPrice: "₹6,999",
      duration: "8 weeks",
      level: "Intermediate",
      students: "1,500+",
      rating: 4.6,
      image: "https://readdy.ai/api/search-image?query=Real%20estate%20investment%20education%20with%20property%20analysis%20charts%20and%20Indian%20real%20estate%20market%20trends%20visualization&width=600&height=400&seq=course5&orientation=landscape",
      description: "Learn profitable real estate investment strategies, property analysis, and market timing in the Indian context."
    },
    {
      id: 6,
      title: "Options & Derivatives",
      price: "₹4,999",
      originalPrice: "₹9,999",
      duration: "12 weeks",
      level: "Advanced",
      students: "900+",
      rating: 4.8,
      image: "https://readdy.ai/api/search-image?query=Options%20and%20derivatives%20trading%20education%20with%20complex%20financial%20charts%20and%20Indian%20stock%20exchange%20data%20visualization&width=600&height=400&seq=course6&orientation=landscape",
      description: "Master advanced derivatives trading including options strategies, futures contracts, and risk hedging techniques."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Sidebar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your financial future with expert-led courses designed specifically for Indian investors
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <div className="flex items-center text-green-600">
                <i className="ri-check-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                Lifetime Access
              </div>
              <div className="flex items-center text-blue-600">
                <i className="ri-certificate-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                Certification
              </div>
              <div className="flex items-center text-purple-600">
                <i className="ri-team-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                Expert Support
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((parseInt(course.originalPrice.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',', ''))) / parseInt(course.originalPrice.replace('₹', '').replace(',', ''))) * 100)}% OFF
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.level}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`ri-star${i < Math.floor(course.rating) ? '-fill' : '-line'} w-4 h-4 flex items-center justify-center`}></i>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">{course.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{course.students} students</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="ri-time-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                        {course.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-green-600">{course.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                  </div>
                  
                  <Link href={`/payment?type=course&id=${course.id}&price=${course.price}`} className="block w-full bg-gradient-to-r from-blue-600 to-green-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-blue-500 hover:to-green-500 transform hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Student Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=Happy%20Indian%20student%20success%20story%20with%20financial%20growth%20chart%2C%20professional%20portrait%20with%20confident%20expression&width=200&height=200&seq=student1&orientation=squarish" 
                  alt="Student 1"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h4 className="font-bold text-gray-900 mb-2">Rahul Sharma</h4>
                <p className="text-gray-600 text-sm">"Increased my portfolio by 150% in just 6 months after taking the Stock Market course!"</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=Successful%20Indian%20woman%20investor%20with%20financial%20portfolio%20growth%2C%20professional%20and%20confident%20appearance&width=200&height=200&seq=student2&orientation=squarish" 
                  alt="Student 2"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h4 className="font-bold text-gray-900 mb-2">Priya Patel</h4>
                <p className="text-gray-600 text-sm">"Finally understood mutual funds and started my SIP journey. Best investment decision ever!"</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=Young%20Indian%20entrepreneur%20with%20successful%20business%20growth%2C%20modern%20professional%20setting&width=200&height=200&seq=student3&orientation=squarish" 
                  alt="Student 3"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h4 className="font-bold text-gray-900 mb-2">Amit Kumar</h4>
                <p className="text-gray-600 text-sm">"Crypto course helped me navigate the volatile market and make consistent profits!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}