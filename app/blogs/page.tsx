'use client';

import Sidebar from '../components/Sidebar';
import Link from 'next/link';

export default function Blogs() {
  const featuredBlogs = [
    {
      id: 1,
      title: "10 Best Mutual Funds to Invest in 2024",
      excerpt: "Discover the top-performing mutual funds that can help you build wealth in the current market scenario. Our experts analyze risk, returns, and portfolio composition.",
      author: "Paawan Sharma",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Mutual Funds",
      image: "https://readdy.ai/api/search-image?query=Modern%20mutual%20funds%20investment%20analysis%20with%20colorful%20charts%20and%20Indian%20market%20data%2C%20professional%20financial%20blog%20illustration&width=600&height=400&seq=blog1&orientation=landscape"
    },
    {
      id: 2,
      title: "Cryptocurrency Regulation in India: What Investors Need to Know",
      excerpt: "Stay updated with the latest cryptocurrency regulations in India and understand how they impact your investment strategy. Expert insights on legal compliance.",
      author: "Chhavi Soni",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Cryptocurrency",
      image: "https://readdy.ai/api/search-image?query=Cryptocurrency%20regulation%20in%20India%20with%20legal%20documents%20and%20Bitcoin%20symbols%2C%20professional%20regulatory%20analysis%20illustration&width=600&height=400&seq=blog2&orientation=landscape"
    },
    {
      id: 3,
      title: "SIP vs Lump Sum: Which Investment Strategy Works Best?",
      excerpt: "Compare systematic investment plans with lump sum investments. Learn when to choose each strategy based on market conditions and your financial goals.",
      author: "Devyansh Pawar",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Investment Strategy",
      image: "https://readdy.ai/api/search-image?query=SIP%20vs%20lump%20sum%20investment%20comparison%20with%20charts%20and%20Indian%20rupee%20symbols%2C%20educational%20finance%20visualization&width=600&height=400&seq=blog3&orientation=landscape"
    }
  ];

  const recentBlogs = [
    {
      id: 4,
      title: "How to Build an Emergency Fund in India",
      excerpt: "Learn the importance of emergency funds and practical steps to build one that suits Indian financial needs and income patterns.",
      author: "Rishita Thakur",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Personal Finance",
      image: "https://readdy.ai/api/search-image?query=Emergency%20fund%20savings%20with%20Indian%20currency%20and%20piggy%20bank%2C%20financial%20security%20illustration&width=400&height=300&seq=blog4&orientation=landscape"
    },
    {
      id: 5,
      title: "Tax Saving Investments Under Section 80C",
      excerpt: "Maximize your tax savings with smart investment choices. Complete guide to Section 80C investments for the current financial year.",
      author: "Taniya Thakur",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Tax Planning",
      image: "https://readdy.ai/api/search-image?query=Tax%20saving%20investments%20with%20Section%2080C%20documents%20and%20Indian%20tax%20forms%2C%20professional%20tax%20planning%20illustration&width=400&height=300&seq=blog5&orientation=landscape"
    },
    {
      id: 6,
      title: "Real Estate Investment Trusts (REITs) in India",
      excerpt: "Explore REITs as an alternative investment option. Understand how to invest in commercial real estate without buying property directly.",
      author: "Paawan Sharma",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Real Estate",
      image: "https://readdy.ai/api/search-image?query=REITs%20investment%20in%20India%20with%20commercial%20buildings%20and%20financial%20charts%2C%20modern%20real%20estate%20investment%20illustration&width=400&height=300&seq=blog6&orientation=landscape"
    },
    {
      id: 7,
      title: "Credit Score Improvement: A Complete Guide",
      excerpt: "Boost your credit score with proven strategies. Learn how credit scores work in India and actionable tips to improve your creditworthiness.",
      author: "Chhavi Soni",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Credit Management",
      image: "https://readdy.ai/api/search-image?query=Credit%20score%20improvement%20with%20financial%20charts%20and%20Indian%20banking%20symbols%2C%20credit%20management%20illustration&width=400&height=300&seq=blog7&orientation=landscape"
    },
    {
      id: 8,
      title: "IPO Investment Strategy for Beginners",
      excerpt: "Navigate the IPO market with confidence. Learn how to evaluate IPOs, understand risks, and make informed investment decisions.",
      author: "Devyansh Pawar",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "IPO & Stocks",
      image: "https://readdy.ai/api/search-image?query=IPO%20investment%20strategy%20with%20stock%20market%20charts%20and%20Indian%20stock%20exchange%20data%2C%20beginner-friendly%20illustration&width=400&height=300&seq=blog8&orientation=landscape"
    },
    {
      id: 9,
      title: "Financial Planning for Millennials in India",
      excerpt: "Tailored financial advice for the millennial generation. From career planning to retirement savings, build wealth in your 20s and 30s.",
      author: "Rishita Thakur",
      date: "February 22, 2024",
      readTime: "6 min read",
      category: "Financial Planning",
      image: "https://readdy.ai/api/search-image?query=Young%20Indian%20millennials%20financial%20planning%20with%20modern%20lifestyle%20and%20investment%20goals%2C%20contemporary%20finance%20illustration&width=400&height=300&seq=blog9&orientation=landscape"
    }
  ];

  const categories = [
    "All", "Mutual Funds", "Stocks", "Cryptocurrency", "Real Estate", 
    "Tax Planning", "Personal Finance", "Investment Strategy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Sidebar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with expert analysis, market trends, and actionable financial advice
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  index === 0 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-purple-100 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Blogs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="space-y-8">
              {featuredBlogs.map((blog, index) => (
                <div key={blog.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-102`}>
                  <div className="lg:w-1/2">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-64 lg:h-full object-cover object-top"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{blog.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{blog.excerpt}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">By {blog.author}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{blog.date}</span>
                      </div>
                      <span className="text-sm text-purple-600 font-semibold">{blog.readTime}</span>
                    </div>
                    <Link href={`/blogs/${blog.id}`} className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer">
                      Read More 
                      <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Blogs Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentBlogs.map((blog) => (
                <Link key={blog.id} href={`/blogs/${blog.id}`} className="block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">{blog.author}</p>
                        <p className="text-xs text-gray-500">{blog.date}</p>
                      </div>
                      <span className="text-xs text-purple-600 font-semibold">{blog.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-purple-100">
              Get the latest financial insights delivered to your inbox
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}