
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import ChatbotIcon from '../components/ChatbotIcon';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('emails');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Mock data for contact emails - this would come from a database
  const [contactEmails, setContactEmails] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      subject: 'Course Inquiry',
      message: 'I want to know more about the Stock Market Fundamentals course. Is it suitable for beginners?',
      date: '2024-03-15',
      status: 'unread'
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya@yahoo.com',
      subject: 'Payment Issue',
      message: 'I made a payment for the Mutual Funds course but did not receive access. Please help.',
      date: '2024-03-14',
      status: 'read'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      email: 'amit@outlook.com',
      subject: 'Tool Request',
      message: 'Can you add a retirement planning calculator to your tools section?',
      date: '2024-03-13',
      status: 'replied'
    }
  ]);

  const [userLogins, setUserLogins] = useState([
    {
      id: 1,
      name: 'Rajesh Singh',
      email: 'rajesh@gmail.com',
      loginTime: '2024-03-15 10:30 AM',
      location: 'Mumbai, India',
      device: 'Chrome Browser'
    },
    {
      id: 2,
      name: 'Sneha Reddy',
      email: 'sneha@gmail.com',
      loginTime: '2024-03-15 09:15 AM',
      location: 'Bangalore, India',
      device: 'Mobile App'
    }
  ]);

  const [paymentData, setPaymentData] = useState([
    {
      id: 1,
      user: 'Vikash Gupta',
      email: 'vikash@gmail.com',
      item: 'Stock Market Fundamentals',
      amount: '₹2,999',
      date: '2024-03-15',
      status: 'completed'
    },
    {
      id: 2,
      user: 'Anita Sharma',
      email: 'anita@yahoo.com',
      item: 'Portfolio Analyzer Tool',
      amount: '₹999',
      date: '2024-03-14',
      status: 'completed'
    }
  ]);

  const [replyText, setReplyText] = useState('');
  const [selectedEmail, setSelectedEmail] = useState(null);

  useEffect(() => {
    // Check if admin is logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!adminLoggedIn) {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const markAsRead = (id) => {
    setContactEmails(prev => prev.map(email => 
      email.id === id ? { ...email, status: 'read' } : email
    ));
  };

  const deleteEmail = (id) => {
    if (window.confirm('Are you sure you want to delete this email?')) {
      setContactEmails(prev => prev.filter(email => email.id !== id));
    }
  };

  const sendReply = (emailId) => {
    if (!replyText.trim()) {
      alert('Please enter a reply message.');
      return;
    }

    // Update email status to replied
    setContactEmails(prev => prev.map(email => 
      email.id === emailId ? { ...email, status: 'replied' } : email
    ));

    // In real app, send email here
    alert(`Reply sent successfully to ${selectedEmail.email}!`);
    setReplyText('');
    setSelectedEmail(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminLoginTime');
    router.push('/admin/login');
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p>Checking authentication...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Sidebar />
      <ChatbotIcon />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header with Logout */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Dashboard</span>
              </h1>
              <p className="text-xl text-gray-600">Manage your Finance Fetish platform</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-500 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-logout-box-line mr-2 w-4 h-4 flex items-center justify-center inline"></i>
              Logout
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-fill text-blue-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">{contactEmails.length}</p>
                  <p className="text-sm text-gray-600">Total Emails</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="ri-user-fill text-green-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">2,348</p>
                  <p className="text-sm text-gray-600">Active Users</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <i className="ri-money-dollar-circle-fill text-yellow-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">₹2.4L</p>
                  <p className="text-sm text-gray-600">Revenue</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="ri-graduation-cap-fill text-purple-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">856</p>
                  <p className="text-sm text-gray-600">Course Sales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('emails')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors cursor-pointer ${
                  activeTab === 'emails' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <i className="ri-mail-fill mr-2 w-4 h-4 flex items-center justify-center inline"></i>
                Contact Emails ({contactEmails.filter(e => e.status === 'unread').length} unread)
              </button>
              <button
                onClick={() => setActiveTab('logins')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors cursor-pointer ${
                  activeTab === 'logins' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <i className="ri-user-fill mr-2 w-4 h-4 flex items-center justify-center inline"></i>
                User Logins
              </button>
              <button
                onClick={() => setActiveTab('payments')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors cursor-pointer ${
                  activeTab === 'payments' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <i className="ri-money-dollar-circle-fill mr-2 w-4 h-4 flex items-center justify-center inline"></i>
                Payments
              </button>
            </div>

            <div className="p-6">
              {/* Contact Emails Tab */}
              {activeTab === 'emails' && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form Submissions</h2>
                  {contactEmails.map((email) => (
                    <div key={email.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-bold text-gray-900">{email.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            email.status === 'unread' 
                              ? 'bg-red-100 text-red-800' 
                              : email.status === 'read'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {email.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">{email.date}</div>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-gray-600">{email.email}</p>
                        <p className="font-semibold text-gray-900">{email.subject}</p>
                      </div>
                      <p className="text-gray-700 mb-4">{email.message}</p>
                      
                      {/* Reply Section */}
                      {selectedEmail?.id === email.id && (
                        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                          <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Type your reply here..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows="4"
                          />
                          <div className="flex space-x-2 mt-3">
                            <button 
                              onClick={() => sendReply(email.id)}
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors cursor-pointer whitespace-nowrap"
                            >
                              Send Reply
                            </button>
                            <button 
                              onClick={() => setSelectedEmail(null)}
                              className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-500 transition-colors cursor-pointer whitespace-nowrap"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="flex space-x-3">
                        <button 
                          onClick={() => markAsRead(email.id)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors cursor-pointer whitespace-nowrap"
                          disabled={email.status === 'read' || email.status === 'replied'}
                        >
                          Mark as Read
                        </button>
                        <button 
                          onClick={() => setSelectedEmail(email)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-500 transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Reply
                        </button>
                        <button 
                          onClick={() => deleteEmail(email.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-500 transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* User Logins Tab */}
              {activeTab === 'logins' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent User Logins</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">User</th>
                          <th className="text-left py-3 px-4 font-semibold">Email</th>
                          <th className="text-left py-3 px-4 font-semibold">Login Time</th>
                          <th className="text-left py-3 px-4 font-semibold">Location</th>
                          <th className="text-left py-3 px-4 font-semibold">Device</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userLogins.map((login) => (
                          <tr key={login.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">{login.name}</td>
                            <td className="py-4 px-4 text-gray-600">{login.email}</td>
                            <td className="py-4 px-4 text-gray-600">{login.loginTime}</td>
                            <td className="py-4 px-4 text-gray-600">{login.location}</td>
                            <td className="py-4 px-4 text-gray-600">{login.device}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Payments Tab */}
              {activeTab === 'payments' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Payments</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Customer</th>
                          <th className="text-left py-3 px-4 font-semibold">Email</th>
                          <th className="text-left py-3 px-4 font-semibold">Item</th>
                          <th className="text-left py-3 px-4 font-semibold">Amount</th>
                          <th className="text-left py-3 px-4 font-semibold">Date</th>
                          <th className="text-left py-3 px-4 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paymentData.map((payment) => (
                          <tr key={payment.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium">{payment.user}</td>
                            <td className="py-4 px-4 text-gray-600">{payment.email}</td>
                            <td className="py-4 px-4 text-gray-600">{payment.item}</td>
                            <td className="py-4 px-4 font-bold text-green-600">{payment.amount}</td>
                            <td className="py-4 px-4 text-gray-600">{payment.date}</td>
                            <td className="py-4 px-4">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                                {payment.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
