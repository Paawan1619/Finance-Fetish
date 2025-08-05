
'use client';

import { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ChatbotIcon from '../components/ChatbotIcon';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm FinancePal, your friendly finance expert! 💰 I'm here to help you with all your financial questions. Ask me about investments, savings, loans, or just say hello!",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced responses including general conversation
  const getResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // General greetings and conversation
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello there! 👋 Great to meet you! I'm FinancePal, your friendly finance assistant. I'm here to help you with anything money-related. What would you like to know about today?";
    }
    
    if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you do')) {
      return "I'm doing great, thank you for asking! 😊 I'm always excited to help people make smarter financial decisions. How are you doing today? Any financial goals you're working on?";
    }
    
    if (lowerMessage.includes('thank you') || lowerMessage.includes('thanks')) {
      return "You're very welcome! 🙏 I'm always happy to help with your financial questions. Feel free to ask me anything else - whether it's about investments, budgeting, or planning for the future!";
    }
    
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Goodbye! 👋 It was great chatting with you. Remember, I'm always here whenever you need financial guidance. Keep building that wealth! 💪💰";
    }

    // Financial advice responses
    if (lowerMessage.includes('sip') || lowerMessage.includes('systematic investment')) {
      return "Great question about SIP! 📈 Systematic Investment Plans are perfect for building wealth gradually. I recommend starting with ₹1,000-5,000 monthly in diversified equity funds. Benefits: rupee cost averaging, disciplined investing, and compound growth. Want to know about specific SIP calculators or fund recommendations?";
    }
    
    if (lowerMessage.includes('mutual fund')) {
      return "Mutual funds are excellent for beginners! 🎯 For Indian investors, I suggest: Large-cap funds (stable), Mid-cap funds (growth), and Index funds (low cost). Start with 70% equity, 20% debt, 10% gold allocation. Popular options: SBI Bluechip, Axis Bluechip, HDFC Index. Need help choosing based on your risk profile?";
    }
    
    if (lowerMessage.includes('emergency fund')) {
      return "Emergency fund is crucial! 🚨 Keep 6-12 months of expenses in liquid savings. Best options in India: High-yield savings accounts (4-6%), Liquid mutual funds, FDs for ultra-safe approach. Start with ₹50,000 and gradually build. This protects you from debt during emergencies. How much can you save monthly?";
    }
    
    if (lowerMessage.includes('stock') || lowerMessage.includes('equity')) {
      return "Stocks can create wealth! 📊 For beginners: Start with blue-chip stocks (Reliance, TCS, HDFC Bank). Use fundamental analysis: P/E ratio, ROE, debt levels. Invest only 10-20% initially, increase as you learn. Consider index funds if direct stock picking seems complex. Want to learn about specific sectors?";
    }
    
    if (lowerMessage.includes('inflation')) {
      return "Inflation is money's silent enemy! 💸 In India, it averages 6% annually. Your money loses purchasing power if returns < inflation. Combat with: Equity investments (12-15% long-term), Real estate, Gold (5-10% allocation). Fixed deposits won't beat inflation. Need help calculating inflation impact on your savings?";
    }
    
    if (lowerMessage.includes('retirement') || lowerMessage.includes('pension')) {
      return "Retirement planning is vital! 🌅 Start early for compound magic. Target: 25-30x annual expenses by retirement. Use PPF (₹1.5L annual, 15-year lock), EPF, NPS for tax benefits. Equity exposure should be 100 - your age (%). A 30-year-old should have 70% equity allocation. Want a personalized retirement calculation?";
    }
    
    if (lowerMessage.includes('tax') || lowerMessage.includes('80c')) {
      return "Tax planning saves money! 💰 Section 80C limit: ₹1.5 lakh. Best options: PPF (best returns), ELSS mutual funds (3-year lock, market returns), NSC, tax-saver FDs. Use 80D for health insurance (₹25K-50K). Plan by January for maximum benefits. Need help optimizing your tax-saving strategy?";
    }

    // Default friendly response
    const responses = [
      "That's an interesting question! 🤔 I'm here to help with all things finance. Could you tell me more about what you'd like to know? I can assist with investments, budgeting, loans, insurance, or any other money matters!",
      "Great to hear from you! 💡 I love helping people with their financial journey. What specific area would you like to explore - saving, investing, debt management, or something else?",
      "I'm excited to help you! 📚 Finance can seem complex, but together we can make it simple. What's your main financial goal or concern right now?",
      "Hello! 🎯 I'm FinancePal, and I'm passionate about helping people build wealth and make smart money decisions. What would you like to learn about today?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate thinking time
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const quickQuestions = [
    "Hello! How are you?",
    "How to start investing in SIP?",
    "Best mutual funds for beginners",
    "Emergency fund planning",
    "Tax saving under 80C"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Sidebar />
      <ChatbotIcon />
      
      <div className="pt-20 pb-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">FinancePal</span>
            </h1>
            <p className="text-xl text-gray-600">
              Your friendly AI finance expert, ready to help 24/7! 🤖💰
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ height: '70vh' }}>
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 text-white">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <i className="ri-robot-fill text-green-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="font-bold">FinancePal</h3>
                  <p className="text-sm text-green-100">Your Financial Assistant • Online</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ height: 'calc(70vh - 160px)' }}>
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-900 rounded-bl-none'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-none max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about finance..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center hover:from-green-500 hover:to-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <i className="ri-send-plane-fill w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Questions */}
          <div className="mt-6">
            <p className="text-center text-gray-600 mb-4">Quick questions to get started:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputMessage(question);
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
